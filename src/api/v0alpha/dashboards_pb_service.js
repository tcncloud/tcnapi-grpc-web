// package: api.v0alpha
// file: api/v0alpha/dashboards.proto

var api_v0alpha_dashboards_pb = require("../../api/v0alpha/dashboards_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Dashboards = (function () {
  function Dashboards() {}
  Dashboards.serviceName = "api.v0alpha.Dashboards";
  return Dashboards;
}());

Dashboards.CreateDashboard = {
  methodName: "CreateDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.CreateDashboardRequest,
  responseType: api_v0alpha_dashboards_pb.CreateDashboardResponse
};

Dashboards.GetDashboard = {
  methodName: "GetDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.GetDashboardRequest,
  responseType: api_v0alpha_dashboards_pb.Dashboard
};

Dashboards.GetDefaultDashboard = {
  methodName: "GetDefaultDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.GetDefaultDashboardRequest,
  responseType: api_v0alpha_dashboards_pb.Dashboard
};

Dashboards.ListDashboards = {
  methodName: "ListDashboards",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.ListDashboardsRequest,
  responseType: api_v0alpha_dashboards_pb.ListDashboardsResponse
};

Dashboards.ListProductTypes = {
  methodName: "ListProductTypes",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.ListProductTypesRequest,
  responseType: api_v0alpha_dashboards_pb.ListProductTypesResult
};

Dashboards.DeleteDashboard = {
  methodName: "DeleteDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.DeleteDashboardRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Dashboards.SetDefaultDashboard = {
  methodName: "SetDefaultDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.SetDefaultDashboardRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Dashboards.UpdateDashboard = {
  methodName: "UpdateDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.UpdateDashboardRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Dashboards.UpdateDashboardTitleAndDescription = {
  methodName: "UpdateDashboardTitleAndDescription",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.UpdateDashboardTitleAndDescriptionRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Dashboards.UpdateDashboardView = {
  methodName: "UpdateDashboardView",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.UpdateDashboardViewRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Dashboards.UpdateDashboardLayout = {
  methodName: "UpdateDashboardLayout",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.UpdateDashboardLayoutRequest,
  responseType: google_protobuf_empty_pb.Empty
};

Dashboards.PublishDashboard = {
  methodName: "PublishDashboard",
  service: Dashboards,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_dashboards_pb.PublishDashboardRequest,
  responseType: api_v0alpha_dashboards_pb.PublishDashboardResponse
};

exports.Dashboards = Dashboards;

function DashboardsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DashboardsClient.prototype.createDashboard = function createDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.CreateDashboard, {
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

DashboardsClient.prototype.getDashboard = function getDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.GetDashboard, {
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

DashboardsClient.prototype.getDefaultDashboard = function getDefaultDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.GetDefaultDashboard, {
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

DashboardsClient.prototype.listDashboards = function listDashboards(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.ListDashboards, {
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

DashboardsClient.prototype.listProductTypes = function listProductTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.ListProductTypes, {
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

DashboardsClient.prototype.deleteDashboard = function deleteDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.DeleteDashboard, {
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

DashboardsClient.prototype.setDefaultDashboard = function setDefaultDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.SetDefaultDashboard, {
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

DashboardsClient.prototype.updateDashboard = function updateDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.UpdateDashboard, {
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

DashboardsClient.prototype.updateDashboardTitleAndDescription = function updateDashboardTitleAndDescription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.UpdateDashboardTitleAndDescription, {
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

DashboardsClient.prototype.updateDashboardView = function updateDashboardView(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.UpdateDashboardView, {
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

DashboardsClient.prototype.updateDashboardLayout = function updateDashboardLayout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.UpdateDashboardLayout, {
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

DashboardsClient.prototype.publishDashboard = function publishDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Dashboards.PublishDashboard, {
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

exports.DashboardsClient = DashboardsClient;

