// package: api.v1alpha1.org.labels
// file: api/v1alpha1/org/labels/service.proto

var api_v1alpha1_org_labels_service_pb = require("../../../../api/v1alpha1/org/labels/service_pb");
var api_v1alpha1_org_labels_entities_pb = require("../../../../api/v1alpha1/org/labels/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LabelsService = (function () {
  function LabelsService() {}
  LabelsService.serviceName = "api.v1alpha1.org.labels.LabelsService";
  return LabelsService;
}());

LabelsService.CreateLabel = {
  methodName: "CreateLabel",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.CreateLabelRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.CreateLabelResponse
};

LabelsService.GetLabel = {
  methodName: "GetLabel",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.GetLabelRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.GetLabelResponse
};

LabelsService.UpdateLabel = {
  methodName: "UpdateLabel",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.UpdateLabelRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.UpdateLabelResponse
};

LabelsService.ListLabels = {
  methodName: "ListLabels",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.ListLabelsRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.ListLabelsResponse
};

LabelsService.DeleteLabel = {
  methodName: "DeleteLabel",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.DeleteLabelRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.DeleteLabelResponse
};

LabelsService.AttachLabel = {
  methodName: "AttachLabel",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.AttachLabelRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.AttachLabelResponse
};

LabelsService.DetachLabel = {
  methodName: "DetachLabel",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.DetachLabelRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.DetachLabelResponse
};

LabelsService.GetLabeledEntityMap = {
  methodName: "GetLabeledEntityMap",
  service: LabelsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapRequest,
  responseType: api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapResponse
};

exports.LabelsService = LabelsService;

function LabelsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LabelsServiceClient.prototype.createLabel = function createLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.CreateLabel, {
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

LabelsServiceClient.prototype.getLabel = function getLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.GetLabel, {
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

LabelsServiceClient.prototype.updateLabel = function updateLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.UpdateLabel, {
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

LabelsServiceClient.prototype.listLabels = function listLabels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.ListLabels, {
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

LabelsServiceClient.prototype.deleteLabel = function deleteLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.DeleteLabel, {
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

LabelsServiceClient.prototype.attachLabel = function attachLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.AttachLabel, {
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

LabelsServiceClient.prototype.detachLabel = function detachLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.DetachLabel, {
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

LabelsServiceClient.prototype.getLabeledEntityMap = function getLabeledEntityMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelsService.GetLabeledEntityMap, {
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

exports.LabelsServiceClient = LabelsServiceClient;

