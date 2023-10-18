// package: api.v0alpha
// file: api/v0alpha/lms.proto

var api_v0alpha_lms_pb = require("../../api/v0alpha/lms_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LMS = (function () {
  function LMS() {}
  LMS.serviceName = "api.v0alpha.LMS";
  return LMS;
}());

LMS.GetPublicKey = {
  methodName: "GetPublicKey",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetPublicKeyReq,
  responseType: api_v0alpha_lms_pb.PublicKey
};

LMS.CreateFileTemplate = {
  methodName: "CreateFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.FileTemplate,
  responseType: api_v0alpha_lms_pb.FileTemplate
};

LMS.ListFileTemplates = {
  methodName: "ListFileTemplates",
  service: LMS,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_lms_pb.GetFileTemplatesReq,
  responseType: api_v0alpha_lms_pb.FileTemplate
};

LMS.UpdateFileTemplate = {
  methodName: "UpdateFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.FileTemplate,
  responseType: api_v0alpha_lms_pb.FileTemplate
};

LMS.DeleteFileTemplate = {
  methodName: "DeleteFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.FileTemplate,
  responseType: api_v0alpha_lms_pb.FileTemplate
};

LMS.GetFileTemplate = {
  methodName: "GetFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.FileTemplate,
  responseType: api_v0alpha_lms_pb.FileTemplate
};

LMS.CreateField = {
  methodName: "CreateField",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.Field,
  responseType: api_v0alpha_lms_pb.Field
};

LMS.ListFields = {
  methodName: "ListFields",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ListFieldsReq,
  responseType: api_v0alpha_lms_pb.Fields
};

LMS.GetField = {
  methodName: "GetField",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.Field,
  responseType: api_v0alpha_lms_pb.Field
};

LMS.UpdateField = {
  methodName: "UpdateField",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.UpdateFieldReq,
  responseType: api_v0alpha_lms_pb.Field
};

LMS.DeleteField = {
  methodName: "DeleteField",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.Field,
  responseType: api_v0alpha_lms_pb.Field
};

LMS.ListAvailableFieldsByElementId = {
  methodName: "ListAvailableFieldsByElementId",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ListAvailableFieldsByElementIdReq,
  responseType: api_v0alpha_lms_pb.ProcessFields
};

LMS.ListFieldsForElement = {
  methodName: "ListFieldsForElement",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ListFieldsForElementReq,
  responseType: api_v0alpha_lms_pb.ListFieldsForElementRes
};

LMS.ListAutocompleteFields = {
  methodName: "ListAutocompleteFields",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ListAutocompleteFieldsReq,
  responseType: api_v0alpha_lms_pb.ListAutocompleteFieldsRes
};

LMS.ListCampaignLinks = {
  methodName: "ListCampaignLinks",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: api_v0alpha_lms_pb.ListCampaignLinksRes
};

LMS.PeekList = {
  methodName: "PeekList",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.PeekListReq,
  responseType: api_v0alpha_lms_pb.PeekListRes
};

LMS.GetHistory = {
  methodName: "GetHistory",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetHistoryReq,
  responseType: api_v0alpha_lms_pb.GetHistoryRes
};

LMS.CreateElement = {
  methodName: "CreateElement",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.Element,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.ListElements = {
  methodName: "ListElements",
  service: LMS,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_lms_pb.ListElementsReq,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.GetElement = {
  methodName: "GetElement",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ElementPK,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.UpdateElement = {
  methodName: "UpdateElement",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.Element,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.DeleteElement = {
  methodName: "DeleteElement",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.Element,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.CopyPipelineUpstream = {
  methodName: "CopyPipelineUpstream",
  service: LMS,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_lms_pb.Element,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.CopyPipelineDownstream = {
  methodName: "CopyPipelineDownstream",
  service: LMS,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_lms_pb.Element,
  responseType: api_v0alpha_lms_pb.Element
};

LMS.ProcessElement = {
  methodName: "ProcessElement",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ProcessElementReq,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.ProcessList = {
  methodName: "ProcessList",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ProcessListRequest,
  responseType: api_v0alpha_lms_pb.ProcessListResponse
};

LMS.StreamList = {
  methodName: "StreamList",
  service: LMS,
  requestStream: true,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.StreamListRequest,
  responseType: api_v0alpha_lms_pb.StreamListResponse
};

LMS.GetAvailableFields = {
  methodName: "GetAvailableFields",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: api_v0alpha_lms_pb.ProcessFields
};

LMS.ListNewEvents = {
  methodName: "ListNewEvents",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: api_v0alpha_lms_pb.Events
};

LMS.ViewQueue = {
  methodName: "ViewQueue",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ViewQueueReq,
  responseType: api_v0alpha_lms_pb.Events
};

LMS.Autocomplete = {
  methodName: "Autocomplete",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ParseReq,
  responseType: api_v0alpha_lms_pb.ParseRes
};

LMS.GetComplianceScrubLists = {
  methodName: "GetComplianceScrubLists",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetComplianceScrubListsReq,
  responseType: api_v0alpha_lms_pb.GetComplianceScrubListsRes
};

LMS.FindFieldUsages = {
  methodName: "FindFieldUsages",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.FindFieldUsagesReq,
  responseType: api_v0alpha_lms_pb.FindFieldUsagesRes
};

LMS.FindInvalidElements = {
  methodName: "FindInvalidElements",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.FindInvalidElementsReq,
  responseType: api_v0alpha_lms_pb.FindInvalidElementsRes
};

LMS.CreateCollection = {
  methodName: "CreateCollection",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CollectionMetadata,
  responseType: api_v0alpha_lms_pb.CollectionMetadata
};

LMS.GetCollection = {
  methodName: "GetCollection",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetCollectionReq,
  responseType: api_v0alpha_lms_pb.CollectionMetadata
};

LMS.UpdateCollection = {
  methodName: "UpdateCollection",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CollectionMetadata,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.DeleteCollection = {
  methodName: "DeleteCollection",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.DeleteCollectionReq,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.ListCollections = {
  methodName: "ListCollections",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ListCollectionsReq,
  responseType: api_v0alpha_lms_pb.ListCollectionsRes
};

LMS.ResetCollection = {
  methodName: "ResetCollection",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ResetCollectionReq,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.AddCollectionEntry = {
  methodName: "AddCollectionEntry",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CollectionEntry,
  responseType: api_v0alpha_lms_pb.CollectionEntry
};

LMS.DeleteCollectionEntry = {
  methodName: "DeleteCollectionEntry",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.DeleteCollectionEntryReq,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.UpdateCollectionEntry = {
  methodName: "UpdateCollectionEntry",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CollectionEntry,
  responseType: api_v0alpha_lms_pb.CollectionEntry
};

LMS.StreamCollection = {
  methodName: "StreamCollection",
  service: LMS,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_lms_pb.StreamCollectionReq,
  responseType: api_v0alpha_lms_pb.CollectionEntry
};

LMS.SearchCollectionsPaginated = {
  methodName: "SearchCollectionsPaginated",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.SearchCollectionsPaginatedReq,
  responseType: api_v0alpha_lms_pb.PaginatedSearchRes
};

LMS.GetCollectionEntries = {
  methodName: "GetCollectionEntries",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetCollectionEntriesReq,
  responseType: api_v0alpha_lms_pb.GetCollectionEntriesRes
};

LMS.CreateCjsSearchDefinition = {
  methodName: "CreateCjsSearchDefinition",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CjsSearchDefinition,
  responseType: api_v0alpha_lms_pb.CjsSearchDefinition
};

LMS.GetCjsSearchDefinition = {
  methodName: "GetCjsSearchDefinition",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetCjsSearchDefinitionReq,
  responseType: api_v0alpha_lms_pb.CjsSearchDefinition
};

LMS.UpdateCjsSearchDefinition = {
  methodName: "UpdateCjsSearchDefinition",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CjsSearchDefinition,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.DeleteCjsSearchDefinition = {
  methodName: "DeleteCjsSearchDefinition",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.DeleteCjsSearchDefinitionReq,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.ListCjsSearchDefinitions = {
  methodName: "ListCjsSearchDefinitions",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ListCjsSearchDefinitionsReq,
  responseType: api_v0alpha_lms_pb.ListCjsSearchDefinitionsRes
};

LMS.ExecuteCjsSearchDefinition = {
  methodName: "ExecuteCjsSearchDefinition",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionReq,
  responseType: api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionRes
};

LMS.GetCjsSecureSearchCriteria = {
  methodName: "GetCjsSecureSearchCriteria",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.GetCjsSecureSearchCriteriaReq,
  responseType: api_v0alpha_lms_pb.CjsSecureSearchCriteria
};

LMS.CreateCjsSecureSearchCriteria = {
  methodName: "CreateCjsSecureSearchCriteria",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CjsSecureSearchCriteria,
  responseType: api_v0alpha_lms_pb.CjsSecureSearchCriteria
};

LMS.UpdateCjsSecureSearchCriteria = {
  methodName: "UpdateCjsSecureSearchCriteria",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.CjsSecureSearchCriteria,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.TestByteField = {
  methodName: "TestByteField",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.TestingBytes,
  responseType: google_protobuf_empty_pb.Empty
};

LMS.GetQueuedEventsStatusByElementId = {
  methodName: "GetQueuedEventsStatusByElementId",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_lms_pb.ElementPK,
  responseType: api_v0alpha_lms_pb.Events
};

exports.LMS = LMS;

function LMSClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LMSClient.prototype.getPublicKey = function getPublicKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetPublicKey, {
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

LMSClient.prototype.createFileTemplate = function createFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.CreateFileTemplate, {
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

LMSClient.prototype.listFileTemplates = function listFileTemplates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LMS.ListFileTemplates, {
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

LMSClient.prototype.updateFileTemplate = function updateFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateFileTemplate, {
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

LMSClient.prototype.deleteFileTemplate = function deleteFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteFileTemplate, {
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

LMSClient.prototype.getFileTemplate = function getFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetFileTemplate, {
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

LMSClient.prototype.createField = function createField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.CreateField, {
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

LMSClient.prototype.listFields = function listFields(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListFields, {
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

LMSClient.prototype.getField = function getField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetField, {
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

LMSClient.prototype.updateField = function updateField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateField, {
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

LMSClient.prototype.deleteField = function deleteField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteField, {
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

LMSClient.prototype.listAvailableFieldsByElementId = function listAvailableFieldsByElementId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListAvailableFieldsByElementId, {
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

LMSClient.prototype.listFieldsForElement = function listFieldsForElement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListFieldsForElement, {
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

LMSClient.prototype.listAutocompleteFields = function listAutocompleteFields(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListAutocompleteFields, {
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

LMSClient.prototype.listCampaignLinks = function listCampaignLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListCampaignLinks, {
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

LMSClient.prototype.peekList = function peekList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.PeekList, {
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

LMSClient.prototype.getHistory = function getHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetHistory, {
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

LMSClient.prototype.createElement = function createElement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.CreateElement, {
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

LMSClient.prototype.listElements = function listElements(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LMS.ListElements, {
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

LMSClient.prototype.getElement = function getElement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetElement, {
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

LMSClient.prototype.updateElement = function updateElement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateElement, {
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

LMSClient.prototype.deleteElement = function deleteElement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteElement, {
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

LMSClient.prototype.copyPipelineUpstream = function copyPipelineUpstream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LMS.CopyPipelineUpstream, {
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

LMSClient.prototype.copyPipelineDownstream = function copyPipelineDownstream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LMS.CopyPipelineDownstream, {
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

LMSClient.prototype.processElement = function processElement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ProcessElement, {
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

LMSClient.prototype.processList = function processList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ProcessList, {
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

LMSClient.prototype.streamList = function streamList(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(LMS.StreamList, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

LMSClient.prototype.getAvailableFields = function getAvailableFields(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetAvailableFields, {
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

LMSClient.prototype.listNewEvents = function listNewEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListNewEvents, {
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

LMSClient.prototype.viewQueue = function viewQueue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ViewQueue, {
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

LMSClient.prototype.autocomplete = function autocomplete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.Autocomplete, {
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

LMSClient.prototype.getComplianceScrubLists = function getComplianceScrubLists(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetComplianceScrubLists, {
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

LMSClient.prototype.findFieldUsages = function findFieldUsages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.FindFieldUsages, {
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

LMSClient.prototype.findInvalidElements = function findInvalidElements(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.FindInvalidElements, {
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

LMSClient.prototype.createCollection = function createCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.CreateCollection, {
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

LMSClient.prototype.getCollection = function getCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetCollection, {
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

LMSClient.prototype.updateCollection = function updateCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateCollection, {
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

LMSClient.prototype.deleteCollection = function deleteCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteCollection, {
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

LMSClient.prototype.listCollections = function listCollections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListCollections, {
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

LMSClient.prototype.resetCollection = function resetCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ResetCollection, {
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

LMSClient.prototype.addCollectionEntry = function addCollectionEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.AddCollectionEntry, {
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

LMSClient.prototype.deleteCollectionEntry = function deleteCollectionEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteCollectionEntry, {
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

LMSClient.prototype.updateCollectionEntry = function updateCollectionEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateCollectionEntry, {
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

LMSClient.prototype.streamCollection = function streamCollection(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LMS.StreamCollection, {
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

LMSClient.prototype.searchCollectionsPaginated = function searchCollectionsPaginated(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.SearchCollectionsPaginated, {
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

LMSClient.prototype.getCollectionEntries = function getCollectionEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetCollectionEntries, {
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

LMSClient.prototype.createCjsSearchDefinition = function createCjsSearchDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.CreateCjsSearchDefinition, {
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

LMSClient.prototype.getCjsSearchDefinition = function getCjsSearchDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetCjsSearchDefinition, {
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

LMSClient.prototype.updateCjsSearchDefinition = function updateCjsSearchDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateCjsSearchDefinition, {
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

LMSClient.prototype.deleteCjsSearchDefinition = function deleteCjsSearchDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteCjsSearchDefinition, {
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

LMSClient.prototype.listCjsSearchDefinitions = function listCjsSearchDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListCjsSearchDefinitions, {
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

LMSClient.prototype.executeCjsSearchDefinition = function executeCjsSearchDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ExecuteCjsSearchDefinition, {
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

LMSClient.prototype.getCjsSecureSearchCriteria = function getCjsSecureSearchCriteria(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetCjsSecureSearchCriteria, {
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

LMSClient.prototype.createCjsSecureSearchCriteria = function createCjsSecureSearchCriteria(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.CreateCjsSecureSearchCriteria, {
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

LMSClient.prototype.updateCjsSecureSearchCriteria = function updateCjsSecureSearchCriteria(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateCjsSecureSearchCriteria, {
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

LMSClient.prototype.testByteField = function testByteField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.TestByteField, {
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

LMSClient.prototype.getQueuedEventsStatusByElementId = function getQueuedEventsStatusByElementId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetQueuedEventsStatusByElementId, {
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

exports.LMSClient = LMSClient;

