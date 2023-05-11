// package: api.v1alpha1.billing
// file: api/v1alpha1/billing/service.proto

var api_v1alpha1_billing_service_pb = require("../../../api/v1alpha1/billing/service_pb");
var api_v1alpha1_billing_entities_pb = require("../../../api/v1alpha1/billing/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Billing = (function () {
  function Billing() {}
  Billing.serviceName = "api.v1alpha1.billing.Billing";
  return Billing;
}());

Billing.CreateBillingPlan = {
  methodName: "CreateBillingPlan",
  service: Billing,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_billing_entities_pb.CreateBillingPlanReq,
  responseType: api_v1alpha1_billing_entities_pb.CreateBillingPlanRes
};

Billing.GetBillingPlan = {
  methodName: "GetBillingPlan",
  service: Billing,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_billing_entities_pb.GetBillingPlanReq,
  responseType: api_v1alpha1_billing_entities_pb.GetBillingPlanRes
};

Billing.UpdateBillingPlan = {
  methodName: "UpdateBillingPlan",
  service: Billing,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_billing_entities_pb.UpdateBillingPlanReq,
  responseType: api_v1alpha1_billing_entities_pb.UpdateBillingPlanRes
};

Billing.DeleteBillingDetails = {
  methodName: "DeleteBillingDetails",
  service: Billing,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_billing_entities_pb.DeleteBillingDetailsReq,
  responseType: api_v1alpha1_billing_entities_pb.DeleteBillingDetailsRes
};

Billing.GetInvoice = {
  methodName: "GetInvoice",
  service: Billing,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_billing_entities_pb.GetInvoiceReq,
  responseType: api_v1alpha1_billing_entities_pb.GetInvoiceRes
};

exports.Billing = Billing;

function BillingClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingClient.prototype.createBillingPlan = function createBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Billing.CreateBillingPlan, {
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

BillingClient.prototype.getBillingPlan = function getBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Billing.GetBillingPlan, {
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

BillingClient.prototype.updateBillingPlan = function updateBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Billing.UpdateBillingPlan, {
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

BillingClient.prototype.deleteBillingDetails = function deleteBillingDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Billing.DeleteBillingDetails, {
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

BillingClient.prototype.getInvoice = function getInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Billing.GetInvoice, {
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

exports.BillingClient = BillingClient;

