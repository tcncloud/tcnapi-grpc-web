// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/service.proto

var wfo_vanalytics_v2_service_pb = require("../../../wfo/vanalytics/v2/service_pb");
var wfo_vanalytics_v2_filter_pb = require("../../../wfo/vanalytics/v2/filter_pb");
var wfo_vanalytics_v2_flag_transcript_filter_pb = require("../../../wfo/vanalytics/v2/flag_transcript_filter_pb");
var wfo_vanalytics_v2_transcript_pb = require("../../../wfo/vanalytics/v2/transcript_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Vanalytics = (function () {
  function Vanalytics() {}
  Vanalytics.serviceName = "wfo.vanalytics.v2.Vanalytics";
  return Vanalytics;
}());

Vanalytics.SearchTranscripts = {
  methodName: "SearchTranscripts",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_transcript_pb.SearchTranscriptsRequest,
  responseType: wfo_vanalytics_v2_transcript_pb.SearchTranscriptsResponse
};

Vanalytics.CreateFilter = {
  methodName: "CreateFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_filter_pb.CreateFilterRequest,
  responseType: wfo_vanalytics_v2_filter_pb.Filter
};

Vanalytics.ListFilters = {
  methodName: "ListFilters",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_filter_pb.ListFiltersRequest,
  responseType: wfo_vanalytics_v2_filter_pb.ListFiltersResponse
};

Vanalytics.UpdateFilter = {
  methodName: "UpdateFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_filter_pb.UpdateFilterRequest,
  responseType: wfo_vanalytics_v2_filter_pb.Filter
};

Vanalytics.DeleteFilter = {
  methodName: "DeleteFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_filter_pb.DeleteFilterRequest,
  responseType: wfo_vanalytics_v2_filter_pb.DeleteFilterResponse
};

Vanalytics.GetFilter = {
  methodName: "GetFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_filter_pb.GetFilterRequest,
  responseType: wfo_vanalytics_v2_filter_pb.Filter
};

Vanalytics.ListFlagTranscriptFilters = {
  methodName: "ListFlagTranscriptFilters",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest,
  responseType: wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse
};

exports.Vanalytics = Vanalytics;

function VanalyticsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VanalyticsClient.prototype.searchTranscripts = function searchTranscripts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.SearchTranscripts, {
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

VanalyticsClient.prototype.createFilter = function createFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.CreateFilter, {
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

VanalyticsClient.prototype.listFilters = function listFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListFilters, {
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

VanalyticsClient.prototype.updateFilter = function updateFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.UpdateFilter, {
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

VanalyticsClient.prototype.deleteFilter = function deleteFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.DeleteFilter, {
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

VanalyticsClient.prototype.getFilter = function getFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.GetFilter, {
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

VanalyticsClient.prototype.listFlagTranscriptFilters = function listFlagTranscriptFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListFlagTranscriptFilters, {
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

exports.VanalyticsClient = VanalyticsClient;

