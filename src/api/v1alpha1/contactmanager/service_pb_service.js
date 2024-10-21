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

ContactManager.AddContactEntry = {
  methodName: "AddContactEntry",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryResponse
};

ContactManager.EditContactEntry = {
  methodName: "EditContactEntry",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryResponse
};

ContactManager.ListContactsByEntity = {
  methodName: "ListContactsByEntity",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityResponse
};

ContactManager.GetContactFieldType = {
  methodName: "GetContactFieldType",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeResponse
};

ContactManager.AgentAddContact = {
  methodName: "AgentAddContact",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryResponse
};

ContactManager.AgentEditContact = {
  methodName: "AgentEditContact",
  service: ContactManager,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryRequest,
  responseType: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryResponse
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

ContactManagerClient.prototype.addContactEntry = function addContactEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.AddContactEntry, {
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

ContactManagerClient.prototype.editContactEntry = function editContactEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.EditContactEntry, {
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

ContactManagerClient.prototype.listContactsByEntity = function listContactsByEntity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.ListContactsByEntity, {
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

ContactManagerClient.prototype.getContactFieldType = function getContactFieldType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.GetContactFieldType, {
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

ContactManagerClient.prototype.agentAddContact = function agentAddContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.AgentAddContact, {
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

ContactManagerClient.prototype.agentEditContact = function agentEditContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactManager.AgentEditContact, {
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

