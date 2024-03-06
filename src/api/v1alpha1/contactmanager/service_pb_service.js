// package: api.v1alpha1.contactmanager
// file: api/v1alpha1/contactmanager/service.proto

var api_v1alpha1_contactmanager_service_pb = require("../../../api/v1alpha1/contactmanager/service_pb");
var api_v1alpha1_contactmanager_contactmanager_pb = require("../../../api/v1alpha1/contactmanager/contactmanager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ContactManager = (function () {
  function ContactManager() {}
  ContactManager.serviceName = "api.v1alpha1.contactmanager.ContactManager";
  return ContactManager;
}());

ContactManager.GetContactList = {
  methodName: "GetContactList",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.GetContactListRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.GetContactListResponse
};

ContactManager.ListContactEntryList = {
  methodName: "ListContactEntryList",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListResponse
};

ContactManager.GetEncContactEntry = {
  methodName: "GetEncContactEntry",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryResponse
};

ContactManager.GetKYCEncContactEntry = {
  methodName: "GetKYCEncContactEntry",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryResponse
};

ContactManager.GetKYCKeys = {
  methodName: "GetKYCKeys",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysResponse
};

exports.ContactManager = ContactManager;

function ContactManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ContactManagerClient.prototype.getContactList = function getContactList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.GetContactList, {
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

ContactManagerClient.prototype.listContactEntryList = function listContactEntryList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.ListContactEntryList, {
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

ContactManagerClient.prototype.getEncContactEntry = function getEncContactEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.GetEncContactEntry, {
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

ContactManagerClient.prototype.getKYCEncContactEntry = function getKYCEncContactEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.GetKYCEncContactEntry, {
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

ContactManagerClient.prototype.getKYCKeys = function getKYCKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.GetKYCKeys, {
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

exports.ContactManagerClient = ContactManagerClient;

