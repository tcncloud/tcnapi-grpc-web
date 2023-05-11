// package: api.v1alpha1.integrationspublic
// file: api/v1alpha1/integrationspublic/service.proto

var api_v1alpha1_integrationspublic_service_pb = require("../../../api/v1alpha1/integrationspublic/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IntegrationsPublic = (function () {
  function IntegrationsPublic() {}
  IntegrationsPublic.serviceName = "api.v1alpha1.integrationspublic.IntegrationsPublic";
  return IntegrationsPublic;
}());

IntegrationsPublic.GetLinkData = {
  methodName: "GetLinkData",
  service: IntegrationsPublic,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrationspublic_service_pb.GetLinkDataReq,
  responseType: api_v1alpha1_integrationspublic_service_pb.GetLinkDataRes
};

IntegrationsPublic.SubmitVerification = {
  methodName: "SubmitVerification",
  service: IntegrationsPublic,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrationspublic_service_pb.SubmitVerificationReq,
  responseType: api_v1alpha1_integrationspublic_service_pb.SubmitVerificationRes
};

IntegrationsPublic.SessionKeepAlive = {
  methodName: "SessionKeepAlive",
  service: IntegrationsPublic,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveReq,
  responseType: api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveRes
};

IntegrationsPublic.GetInvoice = {
  methodName: "GetInvoice",
  service: IntegrationsPublic,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrationspublic_service_pb.GetInvoiceReq,
  responseType: api_v1alpha1_integrationspublic_service_pb.GetInvoiceRes
};

IntegrationsPublic.SubmitPayment = {
  methodName: "SubmitPayment",
  service: IntegrationsPublic,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrationspublic_service_pb.SubmitPaymentReq,
  responseType: api_v1alpha1_integrationspublic_service_pb.SubmitPaymentRes
};

IntegrationsPublic.GetReceipt = {
  methodName: "GetReceipt",
  service: IntegrationsPublic,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrationspublic_service_pb.GetReceiptReq,
  responseType: api_v1alpha1_integrationspublic_service_pb.GetReceiptRes
};

exports.IntegrationsPublic = IntegrationsPublic;

function IntegrationsPublicClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IntegrationsPublicClient.prototype.getLinkData = function getLinkData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IntegrationsPublic.GetLinkData, {
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

IntegrationsPublicClient.prototype.submitVerification = function submitVerification(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IntegrationsPublic.SubmitVerification, {
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

IntegrationsPublicClient.prototype.sessionKeepAlive = function sessionKeepAlive(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IntegrationsPublic.SessionKeepAlive, {
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

IntegrationsPublicClient.prototype.getInvoice = function getInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IntegrationsPublic.GetInvoice, {
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

IntegrationsPublicClient.prototype.submitPayment = function submitPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IntegrationsPublic.SubmitPayment, {
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

IntegrationsPublicClient.prototype.getReceipt = function getReceipt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IntegrationsPublic.GetReceipt, {
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

exports.IntegrationsPublicClient = IntegrationsPublicClient;

