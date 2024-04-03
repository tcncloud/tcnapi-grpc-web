// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/service.proto

var api_v1alpha1_vanalytics_service_pb = require("../../../api/v1alpha1/vanalytics/service_pb");
var api_v1alpha1_vanalytics_correction_pb = require("../../../api/v1alpha1/vanalytics/correction_pb");
var api_v1alpha1_vanalytics_filter_pb = require("../../../api/v1alpha1/vanalytics/filter_pb");
var api_v1alpha1_vanalytics_flag_pb = require("../../../api/v1alpha1/vanalytics/flag_pb");
var api_v1alpha1_vanalytics_flag_filter_pb = require("../../../api/v1alpha1/vanalytics/flag_filter_pb");
var api_v1alpha1_vanalytics_flag_review_pb = require("../../../api/v1alpha1/vanalytics/flag_review_pb");
var api_v1alpha1_vanalytics_flag_snapshot_pb = require("../../../api/v1alpha1/vanalytics/flag_snapshot_pb");
var api_v1alpha1_vanalytics_flag_transcript_pb = require("../../../api/v1alpha1/vanalytics/flag_transcript_pb");
var api_v1alpha1_vanalytics_flag_transcript_filter_pb = require("../../../api/v1alpha1/vanalytics/flag_transcript_filter_pb");
var api_v1alpha1_vanalytics_transcript_pb = require("../../../api/v1alpha1/vanalytics/transcript_pb");
var api_v1alpha1_vanalytics_transcript_summary_pb = require("../../../api/v1alpha1/vanalytics/transcript_summary_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Vanalytics = (function () {
  function Vanalytics() {}
  Vanalytics.serviceName = "api.v1alpha1.vanalytics.Vanalytics";
  return Vanalytics;
}());

Vanalytics.Audit = {
  methodName: "Audit",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_service_pb.AuditRequest,
  responseType: api_v1alpha1_vanalytics_service_pb.AuditResponse
};

Vanalytics.GetRecordingUrl = {
  methodName: "GetRecordingUrl",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_service_pb.GetRecordingUrlRequest,
  responseType: api_v1alpha1_vanalytics_service_pb.GetRecordingUrlResponse
};

Vanalytics.ListBillingSpan = {
  methodName: "ListBillingSpan",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_service_pb.ListBillingSpanRequest,
  responseType: api_v1alpha1_vanalytics_service_pb.ListBillingSpanResponse
};

Vanalytics.Search = {
  methodName: "Search",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_transcript_pb.SearchRequest,
  responseType: api_v1alpha1_vanalytics_transcript_pb.SearchResponse
};

Vanalytics.ListTranscriptGroupNames = {
  methodName: "ListTranscriptGroupNames",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesRequest,
  responseType: api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesResponse
};

Vanalytics.BulkDeleteTranscripts = {
  methodName: "BulkDeleteTranscripts",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsRequest,
  responseType: api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsResponse
};

Vanalytics.BulkRestoreTranscripts = {
  methodName: "BulkRestoreTranscripts",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsRequest,
  responseType: api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsResponse
};

Vanalytics.ListAgentResponseValues = {
  methodName: "ListAgentResponseValues",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesRequest,
  responseType: api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesResponse
};

Vanalytics.GetTranscriptSummary = {
  methodName: "GetTranscriptSummary",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_transcript_summary_pb.GetTranscriptSummaryRequest,
  responseType: api_v1alpha1_vanalytics_transcript_summary_pb.GetTranscriptSummaryResponse
};

Vanalytics.CreateFilter = {
  methodName: "CreateFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_filter_pb.CreateFilterRequest,
  responseType: api_v1alpha1_vanalytics_filter_pb.Filter
};

Vanalytics.ListFilters = {
  methodName: "ListFilters",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_filter_pb.ListFiltersRequest,
  responseType: api_v1alpha1_vanalytics_filter_pb.ListFiltersResponse
};

Vanalytics.UpdateFilter = {
  methodName: "UpdateFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_filter_pb.UpdateFilterRequest,
  responseType: api_v1alpha1_vanalytics_filter_pb.Filter
};

Vanalytics.DeleteFilter = {
  methodName: "DeleteFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_filter_pb.DeleteFilterRequest,
  responseType: api_v1alpha1_vanalytics_filter_pb.DeleteFilterResponse
};

Vanalytics.GetFilter = {
  methodName: "GetFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_filter_pb.GetFilterRequest,
  responseType: api_v1alpha1_vanalytics_filter_pb.Filter
};

Vanalytics.GetFlag = {
  methodName: "GetFlag",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_pb.GetFlagRequest,
  responseType: api_v1alpha1_vanalytics_flag_pb.Flag
};

Vanalytics.CreateFlag = {
  methodName: "CreateFlag",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_pb.CreateFlagRequest,
  responseType: api_v1alpha1_vanalytics_flag_pb.Flag
};

Vanalytics.ListFlags = {
  methodName: "ListFlags",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_pb.ListFlagsRequest,
  responseType: api_v1alpha1_vanalytics_flag_pb.ListFlagsResponse
};

Vanalytics.UpdateFlag = {
  methodName: "UpdateFlag",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_pb.UpdateFlagRequest,
  responseType: api_v1alpha1_vanalytics_flag_pb.Flag
};

Vanalytics.DeleteFlag = {
  methodName: "DeleteFlag",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_pb.DeleteFlagRequest,
  responseType: api_v1alpha1_vanalytics_flag_pb.DeleteFlagResponse
};

Vanalytics.CreateFlagReview = {
  methodName: "CreateFlagReview",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_review_pb.CreateFlagReviewRequest,
  responseType: api_v1alpha1_vanalytics_flag_review_pb.FlagReview
};

Vanalytics.BulkCreateFlagReview = {
  methodName: "BulkCreateFlagReview",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewRequest,
  responseType: api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewResponse
};

Vanalytics.ListFlagReviews = {
  methodName: "ListFlagReviews",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsRequest,
  responseType: api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsResponse
};

Vanalytics.CreateFlagTranscript = {
  methodName: "CreateFlagTranscript",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptRequest,
  responseType: api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptResponse
};

Vanalytics.DeleteFlagTranscript = {
  methodName: "DeleteFlagTranscript",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptRequest,
  responseType: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptResponse
};

Vanalytics.SearchFlagTranscripts = {
  methodName: "SearchFlagTranscripts",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsRequest,
  responseType: api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsResponse
};

Vanalytics.CreateFlagFilter = {
  methodName: "CreateFlagFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_filter_pb.CreateFlagFilterRequest,
  responseType: api_v1alpha1_vanalytics_flag_filter_pb.FlagFilter
};

Vanalytics.ListFlagFilters = {
  methodName: "ListFlagFilters",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersRequest,
  responseType: api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersResponse
};

Vanalytics.DeleteFlagFilter = {
  methodName: "DeleteFlagFilter",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterRequest,
  responseType: api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterResponse
};

Vanalytics.ListFlagSnapshots = {
  methodName: "ListFlagSnapshots",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsRequest,
  responseType: api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsResponse
};

Vanalytics.ListFlagTranscriptFilters = {
  methodName: "ListFlagTranscriptFilters",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest,
  responseType: api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse
};

Vanalytics.CreateCorrection = {
  methodName: "CreateCorrection",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_correction_pb.CreateCorrectionRequest,
  responseType: api_v1alpha1_vanalytics_correction_pb.CreateCorrectionResponse
};

Vanalytics.GetCorrection = {
  methodName: "GetCorrection",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_correction_pb.GetCorrectionRequest,
  responseType: api_v1alpha1_vanalytics_correction_pb.Correction
};

Vanalytics.DeleteCorrection = {
  methodName: "DeleteCorrection",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_correction_pb.DeleteCorrectionRequest,
  responseType: api_v1alpha1_vanalytics_correction_pb.DeleteCorrectionResponse
};

Vanalytics.ListCorrections = {
  methodName: "ListCorrections",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_correction_pb.ListCorrectionsRequest,
  responseType: api_v1alpha1_vanalytics_correction_pb.ListCorrectionsResponse
};

Vanalytics.UpdateCorrection = {
  methodName: "UpdateCorrection",
  service: Vanalytics,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_correction_pb.UpdateCorrectionRequest,
  responseType: api_v1alpha1_vanalytics_correction_pb.UpdateCorrectionResponse
};

exports.Vanalytics = Vanalytics;

function VanalyticsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VanalyticsClient.prototype.audit = function audit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.Audit, {
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

VanalyticsClient.prototype.getRecordingUrl = function getRecordingUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.GetRecordingUrl, {
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

VanalyticsClient.prototype.listBillingSpan = function listBillingSpan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListBillingSpan, {
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

VanalyticsClient.prototype.search = function search(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.Search, {
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

VanalyticsClient.prototype.listTranscriptGroupNames = function listTranscriptGroupNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListTranscriptGroupNames, {
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

VanalyticsClient.prototype.bulkDeleteTranscripts = function bulkDeleteTranscripts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.BulkDeleteTranscripts, {
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

VanalyticsClient.prototype.bulkRestoreTranscripts = function bulkRestoreTranscripts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.BulkRestoreTranscripts, {
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

VanalyticsClient.prototype.listAgentResponseValues = function listAgentResponseValues(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListAgentResponseValues, {
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

VanalyticsClient.prototype.getTranscriptSummary = function getTranscriptSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.GetTranscriptSummary, {
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

VanalyticsClient.prototype.getFlag = function getFlag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.GetFlag, {
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

VanalyticsClient.prototype.createFlag = function createFlag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.CreateFlag, {
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

VanalyticsClient.prototype.listFlags = function listFlags(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListFlags, {
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

VanalyticsClient.prototype.updateFlag = function updateFlag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.UpdateFlag, {
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

VanalyticsClient.prototype.deleteFlag = function deleteFlag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.DeleteFlag, {
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

VanalyticsClient.prototype.createFlagReview = function createFlagReview(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.CreateFlagReview, {
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

VanalyticsClient.prototype.bulkCreateFlagReview = function bulkCreateFlagReview(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.BulkCreateFlagReview, {
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

VanalyticsClient.prototype.listFlagReviews = function listFlagReviews(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListFlagReviews, {
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

VanalyticsClient.prototype.createFlagTranscript = function createFlagTranscript(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.CreateFlagTranscript, {
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

VanalyticsClient.prototype.deleteFlagTranscript = function deleteFlagTranscript(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.DeleteFlagTranscript, {
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

VanalyticsClient.prototype.searchFlagTranscripts = function searchFlagTranscripts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.SearchFlagTranscripts, {
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

VanalyticsClient.prototype.createFlagFilter = function createFlagFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.CreateFlagFilter, {
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

VanalyticsClient.prototype.listFlagFilters = function listFlagFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListFlagFilters, {
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

VanalyticsClient.prototype.deleteFlagFilter = function deleteFlagFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.DeleteFlagFilter, {
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

VanalyticsClient.prototype.listFlagSnapshots = function listFlagSnapshots(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListFlagSnapshots, {
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

VanalyticsClient.prototype.createCorrection = function createCorrection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.CreateCorrection, {
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

VanalyticsClient.prototype.getCorrection = function getCorrection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.GetCorrection, {
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

VanalyticsClient.prototype.deleteCorrection = function deleteCorrection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.DeleteCorrection, {
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

VanalyticsClient.prototype.listCorrections = function listCorrections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.ListCorrections, {
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

VanalyticsClient.prototype.updateCorrection = function updateCorrection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vanalytics.UpdateCorrection, {
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

