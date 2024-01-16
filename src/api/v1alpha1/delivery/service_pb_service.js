// package: api.v1alpha1.delivery
// file: api/v1alpha1/delivery/service.proto

var api_v1alpha1_delivery_service_pb = require("../../../api/v1alpha1/delivery/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeliveryApi = (function () {
  function DeliveryApi() {}
  DeliveryApi.serviceName = "api.v1alpha1.delivery.DeliveryApi";
  return DeliveryApi;
}());

DeliveryApi.CreateTransferConfig = {
  methodName: "CreateTransferConfig",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.CreateTransferConfigReq,
  responseType: api_v1alpha1_delivery_service_pb.CreateTransferConfigRes
};

DeliveryApi.ListTransferConfigs = {
  methodName: "ListTransferConfigs",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListTransferConfigsReq,
  responseType: api_v1alpha1_delivery_service_pb.ListTransferConfigsRes
};

DeliveryApi.ListTransferConfigsByCredentialID = {
  methodName: "ListTransferConfigsByCredentialID",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDReq,
  responseType: api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDRes
};

DeliveryApi.UpdateTransferConfig = {
  methodName: "UpdateTransferConfig",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.UpdateTransferConfigReq,
  responseType: api_v1alpha1_delivery_service_pb.UpdateTransferConfigRes
};

DeliveryApi.DeleteTransferConfig = {
  methodName: "DeleteTransferConfig",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.DeleteTransferConfigReq,
  responseType: api_v1alpha1_delivery_service_pb.DeleteTransferConfigRes
};

DeliveryApi.GetTransferConfig = {
  methodName: "GetTransferConfig",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.GetTransferConfigReq,
  responseType: api_v1alpha1_delivery_service_pb.GetTransferConfigRes
};

DeliveryApi.GetTransferConfigByName = {
  methodName: "GetTransferConfigByName",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.GetTransferConfigByNameReq,
  responseType: api_v1alpha1_delivery_service_pb.GetTransferConfigByNameRes
};

DeliveryApi.ListHistory = {
  methodName: "ListHistory",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListHistoryReq,
  responseType: api_v1alpha1_delivery_service_pb.ListHistoryRes
};

DeliveryApi.ListHistoryByTransferConfig = {
  methodName: "ListHistoryByTransferConfig",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigReq,
  responseType: api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigRes
};

DeliveryApi.ListCredentials = {
  methodName: "ListCredentials",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListCredentialsReq,
  responseType: api_v1alpha1_delivery_service_pb.ListCredentialsRes
};

DeliveryApi.GetCredential = {
  methodName: "GetCredential",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.GetCredentialReq,
  responseType: api_v1alpha1_delivery_service_pb.GetCredentialRes
};

DeliveryApi.CreateCredential = {
  methodName: "CreateCredential",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.CreateCredentialReq,
  responseType: api_v1alpha1_delivery_service_pb.CreateCredentialRes
};

DeliveryApi.DeleteCredential = {
  methodName: "DeleteCredential",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.DeleteCredentialReq,
  responseType: api_v1alpha1_delivery_service_pb.DeleteCredentialRes
};

DeliveryApi.UpdateCredential = {
  methodName: "UpdateCredential",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.UpdateCredentialReq,
  responseType: api_v1alpha1_delivery_service_pb.UpdateCredentialRes
};

DeliveryApi.CreateDeliveryDefinition = {
  methodName: "CreateDeliveryDefinition",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionReq,
  responseType: api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionRes
};

DeliveryApi.DeleteDeliveryDefinition = {
  methodName: "DeleteDeliveryDefinition",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionReq,
  responseType: api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionRes
};

DeliveryApi.GetDeliveryDefinition = {
  methodName: "GetDeliveryDefinition",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionReq,
  responseType: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionRes
};

DeliveryApi.GetDeliveryDefinitionByName = {
  methodName: "GetDeliveryDefinitionByName",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameReq,
  responseType: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameRes
};

DeliveryApi.ListDeliveryDefinitions = {
  methodName: "ListDeliveryDefinitions",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsReq,
  responseType: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsRes
};

DeliveryApi.ListDeliveryDefinitionsByCredentialID = {
  methodName: "ListDeliveryDefinitionsByCredentialID",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDReq,
  responseType: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDRes
};

DeliveryApi.UpdateDeliveryDefinition = {
  methodName: "UpdateDeliveryDefinition",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionReq,
  responseType: api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionRes
};

DeliveryApi.CreateEncryption = {
  methodName: "CreateEncryption",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.CreateEncryptionReq,
  responseType: api_v1alpha1_delivery_service_pb.CreateEncryptionRes
};

DeliveryApi.DeleteEncryption = {
  methodName: "DeleteEncryption",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.DeleteEncryptionReq,
  responseType: api_v1alpha1_delivery_service_pb.DeleteEncryptionRes
};

DeliveryApi.GetEncryption = {
  methodName: "GetEncryption",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.GetEncryptionReq,
  responseType: api_v1alpha1_delivery_service_pb.GetEncryptionRes
};

DeliveryApi.ListEncryptions = {
  methodName: "ListEncryptions",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListEncryptionsReq,
  responseType: api_v1alpha1_delivery_service_pb.ListEncryptionsRes
};

DeliveryApi.UpdateEncryption = {
  methodName: "UpdateEncryption",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.UpdateEncryptionReq,
  responseType: api_v1alpha1_delivery_service_pb.UpdateEncryptionRes
};

DeliveryApi.ListSMSNumbers = {
  methodName: "ListSMSNumbers",
  service: DeliveryApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_delivery_service_pb.ListSMSNumbersReq,
  responseType: api_v1alpha1_delivery_service_pb.ListSMSNumbersRes
};

exports.DeliveryApi = DeliveryApi;

function DeliveryApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeliveryApiClient.prototype.createTransferConfig = function createTransferConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.CreateTransferConfig, {
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

DeliveryApiClient.prototype.listTransferConfigs = function listTransferConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListTransferConfigs, {
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

DeliveryApiClient.prototype.listTransferConfigsByCredentialID = function listTransferConfigsByCredentialID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListTransferConfigsByCredentialID, {
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

DeliveryApiClient.prototype.updateTransferConfig = function updateTransferConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.UpdateTransferConfig, {
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

DeliveryApiClient.prototype.deleteTransferConfig = function deleteTransferConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.DeleteTransferConfig, {
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

DeliveryApiClient.prototype.getTransferConfig = function getTransferConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.GetTransferConfig, {
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

DeliveryApiClient.prototype.getTransferConfigByName = function getTransferConfigByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.GetTransferConfigByName, {
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

DeliveryApiClient.prototype.listHistory = function listHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListHistory, {
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

DeliveryApiClient.prototype.listHistoryByTransferConfig = function listHistoryByTransferConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListHistoryByTransferConfig, {
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

DeliveryApiClient.prototype.listCredentials = function listCredentials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListCredentials, {
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

DeliveryApiClient.prototype.getCredential = function getCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.GetCredential, {
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

DeliveryApiClient.prototype.createCredential = function createCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.CreateCredential, {
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

DeliveryApiClient.prototype.deleteCredential = function deleteCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.DeleteCredential, {
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

DeliveryApiClient.prototype.updateCredential = function updateCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.UpdateCredential, {
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

DeliveryApiClient.prototype.createDeliveryDefinition = function createDeliveryDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.CreateDeliveryDefinition, {
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

DeliveryApiClient.prototype.deleteDeliveryDefinition = function deleteDeliveryDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.DeleteDeliveryDefinition, {
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

DeliveryApiClient.prototype.getDeliveryDefinition = function getDeliveryDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.GetDeliveryDefinition, {
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

DeliveryApiClient.prototype.getDeliveryDefinitionByName = function getDeliveryDefinitionByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.GetDeliveryDefinitionByName, {
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

DeliveryApiClient.prototype.listDeliveryDefinitions = function listDeliveryDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListDeliveryDefinitions, {
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

DeliveryApiClient.prototype.listDeliveryDefinitionsByCredentialID = function listDeliveryDefinitionsByCredentialID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListDeliveryDefinitionsByCredentialID, {
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

DeliveryApiClient.prototype.updateDeliveryDefinition = function updateDeliveryDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.UpdateDeliveryDefinition, {
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

DeliveryApiClient.prototype.createEncryption = function createEncryption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.CreateEncryption, {
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

DeliveryApiClient.prototype.deleteEncryption = function deleteEncryption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.DeleteEncryption, {
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

DeliveryApiClient.prototype.getEncryption = function getEncryption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.GetEncryption, {
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

DeliveryApiClient.prototype.listEncryptions = function listEncryptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListEncryptions, {
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

DeliveryApiClient.prototype.updateEncryption = function updateEncryption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.UpdateEncryption, {
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

DeliveryApiClient.prototype.listSMSNumbers = function listSMSNumbers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeliveryApi.ListSMSNumbers, {
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

exports.DeliveryApiClient = DeliveryApiClient;

