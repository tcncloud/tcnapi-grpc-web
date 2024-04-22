// source: api/v1alpha1/vanalytics/transcript.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var localGlobalThis = require("../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_acd_pb = require('../../../api/commons/acd_pb.js');
goog.object.extend(proto, api_commons_acd_pb);
var api_v1alpha1_vanalytics_aclpb_aclpb_pb = require('../../../api/v1alpha1/vanalytics/aclpb/aclpb_pb.js');
goog.object.extend(proto, api_v1alpha1_vanalytics_aclpb_aclpb_pb);
var api_v1alpha1_vanalytics_expr_pb = require('../../../api/v1alpha1/vanalytics/expr_pb.js');
goog.object.extend(proto, api_v1alpha1_vanalytics_expr_pb);
var api_v1alpha1_vanalytics_transcript_summary_pb = require('../../../api/v1alpha1/vanalytics/transcript_summary_pb.js');
goog.object.extend(proto, api_v1alpha1_vanalytics_transcript_summary_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.AgentCallLogQuery', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.AgentResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.FlagSummary', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.FlagSummary.Filter', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.FlagSummary.Flag', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.FlagSummary.Review', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Result', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Cc', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.City', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Iso2', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Location', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Ndc', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Phone', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Prefix', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.RegionName', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Type', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchQuery.Utc', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Agent', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Phrase', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Silence', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchRequest.Terms', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.SearchResponse.Hit', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Segment', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Silence', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Silence.Duration', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Silence.Occurrence', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Silence.Segment', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Sort', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Sort.Field', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TalkOver', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TalkOver.Duration', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TalkOver.Occurrence', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TalkOver.Result', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TalkOver.Segment', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Transcript', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TranscriptGroupName', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TranscriptReviewStatus', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.VanaTermsQuery', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.Word', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.displayName = 'proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.displayName = 'proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.displayName = 'proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.displayName = 'proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Phrase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Phrase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Silence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Silence.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Silence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchRequest.Terms.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Terms, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Terms.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Terms';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Agent.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Agent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.displayName = 'proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Phone.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Phone';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Cc.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Cc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Cc.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Cc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Ndc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Ndc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Prefix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Prefix';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.City.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.City.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.City';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Iso2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Iso2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.RegionName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.RegionName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Type.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Type, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Type.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Type';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Utc.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Utc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Utc.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Utc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Location.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.displayName = 'proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.SearchResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchResponse.displayName = 'proto.api.v1alpha1.vanalytics.SearchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.SearchResponse.Hit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.SearchResponse.Hit.displayName = 'proto.api.v1alpha1.vanalytics.SearchResponse.Hit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.AgentCallLogQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.AgentCallLogQuery.displayName = 'proto.api.v1alpha1.vanalytics.AgentCallLogQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.displayName = 'proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.VanaTermsQuery.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.VanaTermsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.VanaTermsQuery.displayName = 'proto.api.v1alpha1.vanalytics.VanaTermsQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Sort = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.Sort.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Sort, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Sort.displayName = 'proto.api.v1alpha1.vanalytics.Sort';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Sort.Field = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Sort.Field, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Sort.Field.displayName = 'proto.api.v1alpha1.vanalytics.Sort.Field';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.displayName = 'proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.displayName = 'proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TranscriptGroupName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TranscriptGroupName.displayName = 'proto.api.v1alpha1.vanalytics.TranscriptGroupName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.displayName = 'proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.displayName = 'proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Transcript = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.Transcript.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Transcript, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Transcript.displayName = 'proto.api.v1alpha1.vanalytics.Transcript';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.Result.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Result.displayName = 'proto.api.v1alpha1.vanalytics.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Segment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.Segment.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Segment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Segment.displayName = 'proto.api.v1alpha1.vanalytics.Segment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Word = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Word, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Word.displayName = 'proto.api.v1alpha1.vanalytics.Word';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Silence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.Silence.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Silence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Silence.displayName = 'proto.api.v1alpha1.vanalytics.Silence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Silence.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Silence.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Silence.Duration.displayName = 'proto.api.v1alpha1.vanalytics.Silence.Duration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Silence.Segment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Silence.Segment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Silence.Segment.displayName = 'proto.api.v1alpha1.vanalytics.Silence.Segment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.Silence.Occurrence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.Silence.Occurrence.displayName = 'proto.api.v1alpha1.vanalytics.Silence.Occurrence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.TalkOver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.TalkOver.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TalkOver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TalkOver.displayName = 'proto.api.v1alpha1.vanalytics.TalkOver';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TalkOver.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TalkOver.Duration.displayName = 'proto.api.v1alpha1.vanalytics.TalkOver.Duration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.TalkOver.Result.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TalkOver.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TalkOver.Result.displayName = 'proto.api.v1alpha1.vanalytics.TalkOver.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TalkOver.Segment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TalkOver.Segment.displayName = 'proto.api.v1alpha1.vanalytics.TalkOver.Segment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TalkOver.Occurrence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.displayName = 'proto.api.v1alpha1.vanalytics.TalkOver.Occurrence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.FlagSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.FlagSummary.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.FlagSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.FlagSummary.displayName = 'proto.api.v1alpha1.vanalytics.FlagSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.displayName = 'proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.FlagSummary.Flag.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.FlagSummary.Flag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.FlagSummary.Flag.displayName = 'proto.api.v1alpha1.vanalytics.FlagSummary.Flag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.FlagSummary.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.FlagSummary.Filter.displayName = 'proto.api.v1alpha1.vanalytics.FlagSummary.Filter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.FlagSummary.Review, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.FlagSummary.Review.displayName = 'proto.api.v1alpha1.vanalytics.FlagSummary.Review';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.AgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.AgentResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.AgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.AgentResponse.displayName = 'proto.api.v1alpha1.vanalytics.AgentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.displayName = 'proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.api.v1alpha1.vanalytics.SearchRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest;
  return proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional SearchRequest query = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.prototype.getQuery = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest} returns this
*/
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest} returns this
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse;
  return proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse} returns this
 */
proto.api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.api.v1alpha1.vanalytics.SearchRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest;
  return proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional SearchRequest query = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.prototype.getQuery = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest} returns this
*/
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest} returns this
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse;
  return proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse} returns this
 */
proto.api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchRequest.repeatedFields_ = [16,18,19,20,21];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    silence: (f = msg.getSilence()) && proto.api.v1alpha1.vanalytics.SearchRequest.Silence.toObject(includeInstance, f),
    talkTime: (f = msg.getTalkTime()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    agent: (f = msg.getAgent()) && proto.api.v1alpha1.vanalytics.SearchRequest.Agent.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sort: (f = msg.getSort()) && proto.api.v1alpha1.vanalytics.Sort.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && api_v1alpha1_vanalytics_expr_pb.TimestampExpr.toObject(includeInstance, f),
    talkOver: (f = msg.getTalkOver()) && proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.toObject(includeInstance, f),
    terms: (f = msg.getTerms()) && proto.api.v1alpha1.vanalytics.SearchRequest.Terms.toObject(includeInstance, f),
    channel: jspb.Message.getFieldWithDefault(msg, 10, 0),
    phrase: (f = msg.getPhrase()) && proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.toObject(includeInstance, f),
    transcriptMask: (f = msg.getTranscriptMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    transcriptSid: jspb.Message.getFieldWithDefault(msg, 13, 0),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 14, ""),
    callerId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    transcriptSidsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    callStartTime: (f = msg.getCallStartTime()) && api_v1alpha1_vanalytics_expr_pb.TimestampExpr.toObject(includeInstance, f),
    callTypesList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    callSidsList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    groupNamesList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    agentCallLog: (f = msg.getAgentCallLog()) && proto.api.v1alpha1.vanalytics.AgentCallLogQuery.toObject(includeInstance, f),
    where: (f = msg.getWhere()) && proto.api.v1alpha1.vanalytics.SearchQuery.toObject(includeInstance, f),
    timeFrame: (f = msg.getTimeFrame()) && api_v1alpha1_vanalytics_expr_pb.Uint32Range.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest;
  return proto.api.v1alpha1.vanalytics.SearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Silence;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Silence.deserializeBinaryFromReader);
      msg.setSilence(value);
      break;
    case 3:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setTalkTime(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Agent;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.vanalytics.Sort;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Sort.deserializeBinaryFromReader);
      msg.setSort(value);
      break;
    case 7:
      var value = new api_v1alpha1_vanalytics_expr_pb.TimestampExpr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.TimestampExpr.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.deserializeBinaryFromReader);
      msg.setTalkOver(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Terms;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Terms.deserializeBinaryFromReader);
      msg.setTerms(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannel(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Phrase;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.deserializeBinaryFromReader);
      msg.setPhrase(value);
      break;
    case 12:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setTranscriptMask(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTranscriptSid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 16:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTranscriptSids(values[i]);
      }
      break;
    case 17:
      var value = new api_v1alpha1_vanalytics_expr_pb.TimestampExpr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.TimestampExpr.deserializeBinaryFromReader);
      msg.setCallStartTime(value);
      break;
    case 18:
      var values = /** @type {!Array<!proto.api.commons.CallType.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCallTypes(values[i]);
      }
      break;
    case 19:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCallSids(values[i]);
      }
      break;
    case 20:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
      }
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupNames(value);
      break;
    case 22:
      var value = new proto.api.v1alpha1.vanalytics.AgentCallLogQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.AgentCallLogQuery.deserializeBinaryFromReader);
      msg.setAgentCallLog(value);
      break;
    case 23:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinaryFromReader);
      msg.setWhere(value);
      break;
    case 24:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Range;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Range.deserializeBinaryFromReader);
      msg.setTimeFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSilence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Silence.serializeBinaryToWriter
    );
  }
  f = message.getTalkTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Agent.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getSort();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.vanalytics.Sort.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_v1alpha1_vanalytics_expr_pb.TimestampExpr.serializeBinaryToWriter
    );
  }
  f = message.getTalkOver();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.serializeBinaryToWriter
    );
  }
  f = message.getTerms();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Terms.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getPhrase();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.serializeBinaryToWriter
    );
  }
  f = message.getTranscriptMask();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getTranscriptSid();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getTranscriptSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      16,
      f
    );
  }
  f = message.getCallStartTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      api_v1alpha1_vanalytics_expr_pb.TimestampExpr.serializeBinaryToWriter
    );
  }
  f = message.getCallTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      18,
      f
    );
  }
  f = message.getCallSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      19,
      f
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      20,
      f
    );
  }
  f = message.getGroupNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      21,
      f
    );
  }
  f = message.getAgentCallLog();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.api.v1alpha1.vanalytics.AgentCallLogQuery.serializeBinaryToWriter
    );
  }
  f = message.getWhere();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.serializeBinaryToWriter
    );
  }
  f = message.getTimeFrame();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Range.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.toObject = function(includeInstance, msg) {
  var f, obj = {
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.toObject, includeInstance),
    slop: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inOrder: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    highlight: (f = msg.getHighlight()) && proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.toObject(includeInstance, f),
    not: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    agent: (f = msg.getAgent()) && proto.api.v1alpha1.vanalytics.SearchRequest.Agent.toObject(includeInstance, f),
    channel: jspb.Message.getFieldWithDefault(msg, 7, 0),
    positionOffset: (f = msg.getPositionOffset()) && proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Phrase;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.deserializeBinaryFromReader);
      msg.addWords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlop(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInOrder(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.deserializeBinaryFromReader);
      msg.setHighlight(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNot(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Agent;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannel(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.deserializeBinaryFromReader);
      msg.setPositionOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.serializeBinaryToWriter
    );
  }
  f = message.getSlop();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInOrder();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHighlight();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.serializeBinaryToWriter
    );
  }
  f = message.getNot();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Agent.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPositionOffset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fuzziness: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFuzziness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFuzziness();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fuzziness = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.prototype.getFuzziness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word.prototype.setFuzziness = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.toObject = function(includeInstance, msg) {
  var f, obj = {
    preTagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    postTagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPreTags(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPostTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string pre_tags = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.getPreTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.setPreTagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.addPreTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.clearPreTagsList = function() {
  return this.setPreTagsList([]);
};


/**
 * repeated string post_tags = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.getPostTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.setPostTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.addPostTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight.prototype.clearPostTagsList = function() {
  return this.setPostTagsList([]);
};


/**
 * repeated Word words = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setWordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Word, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.clearWordsList = function() {
  return this.setWordsList([]);
};


/**
 * optional uint32 slop = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getSlop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setSlop = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool in_order = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getInOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setInOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Highlight highlight = 4;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getHighlight = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setHighlight = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.clearHighlight = function() {
  return this.setHighlight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.hasHighlight = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool not = 5;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getNot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setNot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional Agent agent = 6;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getAgent = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Agent} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Agent, 6));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 channel = 7;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional PositionOffset position_offset = 8;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.getPositionOffset = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset, 8));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.setPositionOffset = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.clearPositionOffset = function() {
  return this.setPositionOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Phrase.prototype.hasPositionOffset = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    stop: (f = msg.getStop()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset;
  return proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStop();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration start = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration stop = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.getStop = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.setStop = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.clearStop = function() {
  return this.setStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.prototype.hasStop = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Silence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.toObject = function(includeInstance, msg) {
  var f, obj = {
    durationTotal: (f = msg.getDurationTotal()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    durationMax: (f = msg.getDurationMax()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    occurrenceTotal: (f = msg.getOccurrenceTotal()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    durationPercentage: (f = msg.getDurationPercentage()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Silence;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Silence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setDurationTotal(value);
      break;
    case 2:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setDurationMax(value);
      break;
    case 3:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setOccurrenceTotal(value);
      break;
    case 4:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setDurationPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Silence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDurationTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getDurationMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getOccurrenceTotal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getDurationPercentage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
};


/**
 * optional Uint32Expr duration_total = 1;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.getDurationTotal = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.setDurationTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.clearDurationTotal = function() {
  return this.setDurationTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.hasDurationTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Uint32Expr duration_max = 2;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.getDurationMax = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.setDurationMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.clearDurationMax = function() {
  return this.setDurationMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.hasDurationMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uint32Expr occurrence_total = 3;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.getOccurrenceTotal = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.setOccurrenceTotal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.clearOccurrenceTotal = function() {
  return this.setOccurrenceTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.hasOccurrenceTotal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Uint32Expr duration_percentage = 4;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.getDurationPercentage = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.setDurationPercentage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.clearDurationPercentage = function() {
  return this.setDurationPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Silence.prototype.hasDurationPercentage = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.toObject = function(includeInstance, msg) {
  var f, obj = {
    durationTotal: (f = msg.getDurationTotal()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    durationMax: (f = msg.getDurationMax()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    occurrenceTotal: (f = msg.getOccurrenceTotal()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f),
    durationPercentage: (f = msg.getDurationPercentage()) && api_v1alpha1_vanalytics_expr_pb.Uint32Expr.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver;
  return proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setDurationTotal(value);
      break;
    case 2:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setDurationMax(value);
      break;
    case 3:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setOccurrenceTotal(value);
      break;
    case 4:
      var value = new api_v1alpha1_vanalytics_expr_pb.Uint32Expr;
      reader.readMessage(value,api_v1alpha1_vanalytics_expr_pb.Uint32Expr.deserializeBinaryFromReader);
      msg.setDurationPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDurationTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getDurationMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getOccurrenceTotal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
  f = message.getDurationPercentage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_v1alpha1_vanalytics_expr_pb.Uint32Expr.serializeBinaryToWriter
    );
  }
};


/**
 * optional Uint32Expr duration_total = 1;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.getDurationTotal = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.setDurationTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.clearDurationTotal = function() {
  return this.setDurationTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.hasDurationTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Uint32Expr duration_max = 2;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.getDurationMax = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.setDurationMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.clearDurationMax = function() {
  return this.setDurationMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.hasDurationMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uint32Expr occurrence_total = 3;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.getOccurrenceTotal = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.setOccurrenceTotal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.clearOccurrenceTotal = function() {
  return this.setOccurrenceTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.hasOccurrenceTotal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Uint32Expr duration_percentage = 4;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.getDurationPercentage = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.setDurationPercentage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.clearDurationPercentage = function() {
  return this.setDurationPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver.prototype.hasDurationPercentage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Terms.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    allList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    not: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    agent: (f = msg.getAgent()) && proto.api.v1alpha1.vanalytics.SearchRequest.Agent.toObject(includeInstance, f),
    channel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    positionOffset: (f = msg.getPositionOffset()) && proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Terms;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Terms.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAny(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAll(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNot(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Agent;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannel(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.deserializeBinaryFromReader);
      msg.setPositionOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Terms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAllList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNot();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Agent.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getPositionOffset();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * repeated string all = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.getAllList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.setAllList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.addAll = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.clearAllList = function() {
  return this.setAllList([]);
};


/**
 * optional bool not = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.getNot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.setNot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Agent agent = 4;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.getAgent = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Agent} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Agent, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 channel = 5;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional PositionOffset position_offset = 6;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.getPositionOffset = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset, 6));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.PositionOffset|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.setPositionOffset = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Terms} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.clearPositionOffset = function() {
  return this.setPositionOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Terms.prototype.hasPositionOffset = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: (f = msg.getUserName()) && proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Agent;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.deserializeBinaryFromReader);
      msg.setUserName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    allList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName;
  return proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAny(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAllList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * repeated string all = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.getAllList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.setAllList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.addAll = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName.prototype.clearAllList = function() {
  return this.setAllList([]);
};


/**
 * optional UserName user_name = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.prototype.getUserName = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent.UserName|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.prototype.setUserName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest.Agent} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.prototype.clearUserName = function() {
  return this.setUserName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.Agent.prototype.hasUserName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Silence silence = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Silence}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getSilence = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Silence} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Silence, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Silence|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setSilence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearSilence = function() {
  return this.setSilence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasSilence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uint32Expr talk_time = 3;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Expr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTalkTime = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Expr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Expr, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Expr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTalkTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearTalkTime = function() {
  return this.setTalkTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasTalkTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Agent agent = 4;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getAgent = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Agent} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Agent, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Agent|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 page_size = 5;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Sort sort = 6;
 * @return {?proto.api.v1alpha1.vanalytics.Sort}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getSort = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Sort} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Sort, 6));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Sort|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setSort = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearSort = function() {
  return this.setSort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasSort = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TimestampExpr create_time = 7;
 * @return {?proto.api.v1alpha1.vanalytics.TimestampExpr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getCreateTime = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TimestampExpr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.TimestampExpr, 7));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TimestampExpr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TalkOver talk_over = 8;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTalkOver = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver, 8));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.TalkOver|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTalkOver = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearTalkOver = function() {
  return this.setTalkOver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasTalkOver = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Terms terms = 9;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Terms}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTerms = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Terms} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Terms, 9));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Terms|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTerms = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearTerms = function() {
  return this.setTerms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasTerms = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 channel = 10;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Phrase phrase = 11;
 * @return {?proto.api.v1alpha1.vanalytics.SearchRequest.Phrase}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getPhrase = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchRequest.Phrase} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchRequest.Phrase, 11));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchRequest.Phrase|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setPhrase = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearPhrase = function() {
  return this.setPhrase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasPhrase = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.FieldMask transcript_mask = 12;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTranscriptMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 12));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTranscriptMask = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearTranscriptMask = function() {
  return this.setTranscriptMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasTranscriptMask = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 transcript_sid = 13;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string phone_number = 14;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string caller_id = 15;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated int64 transcript_sids = 16;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTranscriptSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTranscriptSidsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.addTranscriptSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearTranscriptSidsList = function() {
  return this.setTranscriptSidsList([]);
};


/**
 * optional TimestampExpr call_start_time = 17;
 * @return {?proto.api.v1alpha1.vanalytics.TimestampExpr}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getCallStartTime = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TimestampExpr} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.TimestampExpr, 17));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TimestampExpr|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setCallStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearCallStartTime = function() {
  return this.setCallStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasCallStartTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated api.commons.CallType.Enum call_types = 18;
 * @return {!Array<!proto.api.commons.CallType.Enum>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getCallTypesList = function() {
  return /** @type {!Array<!proto.api.commons.CallType.Enum>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<!proto.api.commons.CallType.Enum>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setCallTypesList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.addCallTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearCallTypesList = function() {
  return this.setCallTypesList([]);
};


/**
 * repeated int64 call_sids = 19;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getCallSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setCallSidsList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.addCallSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearCallSidsList = function() {
  return this.setCallSidsList([]);
};


/**
 * repeated int64 hunt_group_sids = 20;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};


/**
 * repeated string group_names = 21;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getGroupNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setGroupNamesList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.addGroupNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearGroupNamesList = function() {
  return this.setGroupNamesList([]);
};


/**
 * optional AgentCallLogQuery agent_call_log = 22;
 * @return {?proto.api.v1alpha1.vanalytics.AgentCallLogQuery}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getAgentCallLog = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.AgentCallLogQuery} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.AgentCallLogQuery, 22));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.AgentCallLogQuery|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setAgentCallLog = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearAgentCallLog = function() {
  return this.setAgentCallLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasAgentCallLog = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional SearchQuery where = 23;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getWhere = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery, 23));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setWhere = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearWhere = function() {
  return this.setWhere(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasWhere = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Uint32Range time_frame = 24;
 * @return {?proto.api.v1alpha1.vanalytics.Uint32Range}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.getTimeFrame = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Uint32Range} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_expr_pb.Uint32Range, 24));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Uint32Range|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
*/
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.setTimeFrame = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchRequest} returns this
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.clearTimeFrame = function() {
  return this.setTimeFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchRequest.prototype.hasTimeFrame = function() {
  return jspb.Message.getField(this, 24) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSid: (f = msg.getTranscriptSid()) && proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.toObject(includeInstance, f),
    flagSummary: (f = msg.getFlagSummary()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.toObject(includeInstance, f),
    orList: jspb.Message.toObjectList(msg.getOrList(),
    proto.api.v1alpha1.vanalytics.SearchQuery.toObject, includeInstance),
    andList: jspb.Message.toObjectList(msg.getAndList(),
    proto.api.v1alpha1.vanalytics.SearchQuery.toObject, includeInstance),
    audioTime: (f = msg.getAudioTime()) && proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.toObject(includeInstance, f),
    deleteTime: (f = msg.getDeleteTime()) && proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.toObject(includeInstance, f),
    not: (f = msg.getNot()) && proto.api.v1alpha1.vanalytics.SearchQuery.toObject(includeInstance, f),
    results: (f = msg.getResults()) && proto.api.v1alpha1.vanalytics.SearchQuery.Results.toObject(includeInstance, f),
    agentResponse: (f = msg.getAgentResponse()) && proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.toObject(includeInstance, f),
    agentCallLog: (f = msg.getAgentCallLog()) && proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.toObject(includeInstance, f),
    phone: (f = msg.getPhone()) && proto.api.v1alpha1.vanalytics.SearchQuery.Phone.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery;
  return proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.deserializeBinaryFromReader);
      msg.setTranscriptSid(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.deserializeBinaryFromReader);
      msg.setFlagSummary(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinaryFromReader);
      msg.addOr(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinaryFromReader);
      msg.addAnd(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.deserializeBinaryFromReader);
      msg.setAudioTime(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 7:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.deserializeBinaryFromReader);
      msg.setNot(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.deserializeBinaryFromReader);
      msg.setResults(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.deserializeBinaryFromReader);
      msg.setAgentResponse(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.deserializeBinaryFromReader);
      msg.setAgentCallLog(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Phone;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Phone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.serializeBinaryToWriter
    );
  }
  f = message.getFlagSummary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.serializeBinaryToWriter
    );
  }
  f = message.getOrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.serializeBinaryToWriter
    );
  }
  f = message.getAndList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.serializeBinaryToWriter
    );
  }
  f = message.getAudioTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.serializeBinaryToWriter
    );
  }
  f = message.getNot();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.serializeBinaryToWriter
    );
  }
  f = message.getResults();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.serializeBinaryToWriter
    );
  }
  f = message.getAgentResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.serializeBinaryToWriter
    );
  }
  f = message.getAgentCallLog();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Phone.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
    cc: (f = msg.getCc()) && proto.api.v1alpha1.vanalytics.SearchQuery.Cc.toObject(includeInstance, f),
    ndc: (f = msg.getNdc()) && proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.toObject(includeInstance, f),
    prefix: (f = msg.getPrefix()) && proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.toObject(includeInstance, f),
    city: (f = msg.getCity()) && proto.api.v1alpha1.vanalytics.SearchQuery.City.toObject(includeInstance, f),
    iso2: (f = msg.getIso2()) && proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.toObject(includeInstance, f),
    regionCode: (f = msg.getRegionCode()) && proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.toObject(includeInstance, f),
    regionName: (f = msg.getRegionName()) && proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.toObject(includeInstance, f),
    timeZone: (f = msg.getTimeZone()) && proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.toObject(includeInstance, f),
    type: (f = msg.getType()) && proto.api.v1alpha1.vanalytics.SearchQuery.Type.toObject(includeInstance, f),
    utc: (f = msg.getUtc()) && proto.api.v1alpha1.vanalytics.SearchQuery.Utc.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.api.v1alpha1.vanalytics.SearchQuery.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Phone;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Cc;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Cc.deserializeBinaryFromReader);
      msg.setCc(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Ndc;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.deserializeBinaryFromReader);
      msg.setNdc(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Prefix;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.deserializeBinaryFromReader);
      msg.setPrefix(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.City;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.City.deserializeBinaryFromReader);
      msg.setCity(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Iso2;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.deserializeBinaryFromReader);
      msg.setIso2(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.deserializeBinaryFromReader);
      msg.setRegionCode(value);
      break;
    case 7:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.RegionName;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.deserializeBinaryFromReader);
      msg.setRegionName(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.deserializeBinaryFromReader);
      msg.setTimeZone(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Type;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Type.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Utc;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Utc.deserializeBinaryFromReader);
      msg.setUtc(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Location;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Cc.serializeBinaryToWriter
    );
  }
  f = message.getNdc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.serializeBinaryToWriter
    );
  }
  f = message.getPrefix();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.serializeBinaryToWriter
    );
  }
  f = message.getCity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.City.serializeBinaryToWriter
    );
  }
  f = message.getIso2();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.serializeBinaryToWriter
    );
  }
  f = message.getRegionCode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.serializeBinaryToWriter
    );
  }
  f = message.getRegionName();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.serializeBinaryToWriter
    );
  }
  f = message.getTimeZone();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Type.serializeBinaryToWriter
    );
  }
  f = message.getUtc();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Utc.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Cc cc = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Cc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getCc = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Cc} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Cc, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Cc|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setCc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearCc = function() {
  return this.setCc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasCc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ndc ndc = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Ndc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getNdc = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Ndc, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Ndc|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setNdc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearNdc = function() {
  return this.setNdc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasNdc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Prefix prefix = 3;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Prefix}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getPrefix = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Prefix, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Prefix|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setPrefix = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearPrefix = function() {
  return this.setPrefix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasPrefix = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional City city = 4;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.City}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getCity = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.City} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.City, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.City|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setCity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearCity = function() {
  return this.setCity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasCity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Iso2 iso2 = 5;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Iso2}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getIso2 = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Iso2, 5));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Iso2|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setIso2 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearIso2 = function() {
  return this.setIso2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasIso2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RegionCode region_code = 6;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getRegionCode = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode, 6));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setRegionCode = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearRegionCode = function() {
  return this.setRegionCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasRegionCode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RegionName region_name = 7;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.RegionName}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getRegionName = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.RegionName, 7));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.RegionName|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setRegionName = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearRegionName = function() {
  return this.setRegionName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasRegionName = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TimeZone time_zone = 8;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getTimeZone = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone, 8));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setTimeZone = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearTimeZone = function() {
  return this.setTimeZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasTimeZone = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Type type = 9;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Type}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getType = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Type} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Type, 9));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Type|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Utc utc = 10;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Utc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getUtc = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Utc} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Utc, 10));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Utc|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setUtc = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearUtc = function() {
  return this.setUtc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasUtc = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Location location = 11;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Location}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.getLocation = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Location} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Location, 11));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Location|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Phone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Phone.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Cc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Cc;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Cc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Cc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Cc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Cc.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Ndc;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Ndc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Ndc.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Prefix;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Prefix} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Prefix.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.City} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.City}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.City;
  return proto.api.v1alpha1.vanalytics.SearchQuery.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.City}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.City.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.City} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.City} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.City} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.City} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.City.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Iso2;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Iso2} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Iso2.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode;
  return proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionCode.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.RegionName;
  return proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.RegionName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.RegionName.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone;
  return proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TimeZone.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Type.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Type} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Type}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Type;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Type.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Type} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Type}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Type.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Type} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Type} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Type} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Type} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Type.prototype.clearInList = function() {
  return this.setInList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Utc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Utc;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Utc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIn(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Utc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float in = 1;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.prototype.getInList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Utc} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Utc.prototype.clearInList = function() {
  return this.setInList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipCodeProximity: (f = msg.getZipCodeProximity()) && proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Location;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.deserializeBinaryFromReader);
      msg.setZipCodeProximity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipCodeProximity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.toObject = function(includeInstance, msg) {
  var f, obj = {
    countryCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    distance: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDistance();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string country_code = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zip_code = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string distance = 3;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.getDistance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity.prototype.setDistance = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ZipCodeProximity zip_code_proximity = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.prototype.getZipCodeProximity = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Location.ZipCodeProximity|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Location.prototype.setZipCodeProximity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Location} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.prototype.clearZipCodeProximity = function() {
  return this.setZipCodeProximity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Location.prototype.hasZipCodeProximity = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    callSkillsInitial: (f = msg.getCallSkillsInitial()) && proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.toObject(includeInstance, f),
    callEnded: (f = msg.getCallEnded()) && proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog;
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.deserializeBinaryFromReader);
      msg.setCallSkillsInitial(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.deserializeBinaryFromReader);
      msg.setCallEnded(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSkillsInitial();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.serializeBinaryToWriter
    );
  }
  f = message.getCallEnded();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.serializeBinaryToWriter
    );
  }
};


/**
 * optional CallSkillsInitial call_skills_initial = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.getCallSkillsInitial = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.setCallSkillsInitial = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.clearCallSkillsInitial = function() {
  return this.setCallSkillsInitial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.hasCallSkillsInitial = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CallEnded call_ended = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.getCallEnded = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.setCallEnded = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.clearCallEnded = function() {
  return this.setCallEnded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog.prototype.hasCallEnded = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.toObject = function(includeInstance, msg) {
  var f, obj = {
    reasonsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded;
  return proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.AgentCallLogCallEnded>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addReasons(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReasonsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated api.commons.AgentCallLogCallEnded reasons = 1;
 * @return {!Array<!proto.api.commons.AgentCallLogCallEnded>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.prototype.getReasonsList = function() {
  return /** @type {!Array<!proto.api.commons.AgentCallLogCallEnded>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.AgentCallLogCallEnded>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.prototype.setReasonsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.AgentCallLogCallEnded} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.prototype.addReasons = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallEnded.prototype.clearReasonsList = function() {
  return this.setReasonsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.toObject = function(includeInstance, msg) {
  var f, obj = {
    needList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    wantList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial;
  return proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNeed(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addWant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getWantList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string need = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.getNeedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.setNeedList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.addNeed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.clearNeedList = function() {
  return this.setNeedList([]);
};


/**
 * repeated string want = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.getWantList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.setWantList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.addWant = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial.prototype.clearWantList = function() {
  return this.setWantList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.toObject(includeInstance, f),
    values: (f = msg.getValues()) && proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.toObject(includeInstance, f),
    numbers: (f = msg.getNumbers()) && proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse;
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.deserializeBinaryFromReader);
      msg.setValues(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.deserializeBinaryFromReader);
      msg.setNumbers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.serializeBinaryToWriter
    );
  }
  f = message.getValues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.serializeBinaryToWriter
    );
  }
  f = message.getNumbers();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    startsWith: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contains: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values;
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartsWith(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getStartsWith();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContains();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.clearInList = function() {
  return this.setInList([]);
};


/**
 * optional string starts_with = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.getStartsWith = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.setStartsWith = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contains = 3;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.getContains = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values.prototype.setContains = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    eq: (f = msg.getEq()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers;
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIn(values[i]);
      }
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLt(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEq();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated double in = 1;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.getInList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.clearInList = function() {
  return this.setInList([]);
};


/**
 * optional google.protobuf.DoubleValue gte = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.hasGte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue lte = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.hasLte = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue gt = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.hasGt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue lt = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.hasLt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue eq = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.getEq = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.setEq = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.clearEq = function() {
  return this.setEq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers.prototype.hasEq = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    inList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    startsWith: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contains: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key;
  return proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartsWith(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getStartsWith();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContains();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string in = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.clearInList = function() {
  return this.setInList([]);
};


/**
 * optional string starts_with = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.getStartsWith = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.setStartsWith = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contains = 3;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.getContains = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key.prototype.setContains = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Key key = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.getKey = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Values values = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.getValues = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.setValues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.clearValues = function() {
  return this.setValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.hasValues = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Numbers numbers = 3;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.getNumbers = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.setNumbers = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.clearNumbers = function() {
  return this.setNumbers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse.prototype.hasNumbers = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: (f = msg.getChannel()) && proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.toObject(includeInstance, f),
    agentUserName: (f = msg.getAgentUserName()) && proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.toObject(includeInstance, f),
    segments: (f = msg.getSegments()) && proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.deserializeBinaryFromReader);
      msg.setAgentUserName(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.deserializeBinaryFromReader);
      msg.setSegments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.serializeBinaryToWriter
    );
  }
  f = message.getAgentUserName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.serializeBinaryToWriter
    );
  }
  f = message.getSegments();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.toObject = function(includeInstance, msg) {
  var f, obj = {
    eq: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEq();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 eq = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.prototype.getEq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel.prototype.setEq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    allList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAny(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAllList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * repeated string all = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.getAllList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.setAllList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.addAll = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName.prototype.clearAllList = function() {
  return this.setAllList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = msg.getText()) && proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
    phrase: (f = msg.getPhrase()) && proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.deserializeBinaryFromReader);
      msg.setPhrase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhrase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.toObject = function(includeInstance, msg) {
  var f, obj = {
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.toObject, includeInstance),
    slop: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inOrder: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.deserializeBinaryFromReader);
      msg.addWords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlop(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.serializeBinaryToWriter
    );
  }
  f = message.getSlop();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInOrder();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fuzziness: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word;
  return proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFuzziness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFuzziness();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fuzziness = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.prototype.getFuzziness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word.prototype.setFuzziness = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Word words = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.setWordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.clearWordsList = function() {
  return this.setWordsList([]);
};


/**
 * optional uint32 slop = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.getSlop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.setSlop = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool in_order = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.getInOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.prototype.setInOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Phrase phrase = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.prototype.getPhrase = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.prototype.setPhrase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.prototype.clearPhrase = function() {
  return this.setPhrase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.prototype.hasPhrase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Text text = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.prototype.getText = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Channel channel = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.getChannel = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Channel|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AgentUserName agent_user_name = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.getAgentUserName = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.setAgentUserName = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.clearAgentUserName = function() {
  return this.setAgentUserName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.hasAgentUserName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Segments segments = 3;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.getSegments = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Results.Segments|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.setSegments = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.Results} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.clearSegments = function() {
  return this.setSegments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.Results.prototype.hasSegments = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    exists: (f = msg.getExists()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime;
  return proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExists();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue exists = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.prototype.getExists = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.prototype.setExists = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.prototype.clearExists = function() {
  return this.setExists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime.prototype.hasExists = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid;
  return proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAny(values[i]);
      }
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated int64 any = 1;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * optional google.protobuf.Int64Value gte = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid.prototype.hasGte = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime;
  return proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setLt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int32Value gte = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value lte = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value gt = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value lt = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    needReview: (f = msg.getNeedReview()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.toObject(includeInstance, f),
    reviewStatus: (f = msg.getReviewStatus()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.toObject(includeInstance, f),
    flags: (f = msg.getFlags()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.toObject(includeInstance, f),
    count: (f = msg.getCount()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.deserializeBinaryFromReader);
      msg.setNeedReview(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.deserializeBinaryFromReader);
      msg.setReviewStatus(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.deserializeBinaryFromReader);
      msg.setFlags(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.deserializeBinaryFromReader);
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.serializeBinaryToWriter
    );
  }
  f = message.getReviewStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.serializeBinaryToWriter
    );
  }
  f = message.getFlags();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagSids: (f = msg.getFlagSids()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.deserializeBinaryFromReader);
      msg.setFlagSids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagSids();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAny(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 any = 1;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * optional FlagSids flag_sids = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.prototype.getFlagSids = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.prototype.setFlagSids = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.prototype.clearFlagSids = function() {
  return this.setFlagSids(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.prototype.hasFlagSids = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAny(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated TranscriptReviewStatus any = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.prototype.getAnyList = function() {
  return /** @type {!Array<!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagSid: (f = msg.getFlagSid()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.deserializeBinaryFromReader);
      msg.setFlagSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    allList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAny(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAll(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getAllList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 any = 1;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * repeated int64 all = 2;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.getAllList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.setAllList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.addAll = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid.prototype.clearAllList = function() {
  return this.setAllList([]);
};


/**
 * optional FlagSid flag_sid = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.prototype.getFlagSid = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.prototype.setFlagSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.prototype.clearFlagSid = function() {
  return this.setFlagSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.prototype.hasFlagSid = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    eq: (f = msg.getEq()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count;
  return proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setLt(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setEq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getEq();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int32Value gte = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value lte = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value gt = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value lt = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int32Value eq = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.getEq = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.setEq = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.clearEq = function() {
  return this.setEq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count.prototype.hasEq = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NeedReview need_review = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.getNeedReview = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.setNeedReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.clearNeedReview = function() {
  return this.setNeedReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.hasNeedReview = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReviewStatus review_status = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.getReviewStatus = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.setReviewStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.clearReviewStatus = function() {
  return this.setReviewStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.hasReviewStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Flags flags = 3;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.getFlags = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.setFlags = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.clearFlags = function() {
  return this.setFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.hasFlags = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Count count = 4;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.getCount = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.setCount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.clearCount = function() {
  return this.setCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.prototype.hasCount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TranscriptSid transcript_sid = 1;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getTranscriptSid = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.TranscriptSid|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearTranscriptSid = function() {
  return this.setTranscriptSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasTranscriptSid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FlagSummary flag_summary = 2;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getFlagSummary = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setFlagSummary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearFlagSummary = function() {
  return this.setFlagSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasFlagSummary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SearchQuery or = 3;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.SearchQuery>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getOrList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.SearchQuery>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setOrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.addOr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.vanalytics.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearOrList = function() {
  return this.setOrList([]);
};


/**
 * repeated SearchQuery and = 4;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.SearchQuery>}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getAndList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.SearchQuery>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setAndList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.addAnd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.vanalytics.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearAndList = function() {
  return this.setAndList([]);
};


/**
 * optional AudioTime audio_time = 5;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getAudioTime = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime, 5));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.AudioTime|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setAudioTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearAudioTime = function() {
  return this.setAudioTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasAudioTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DeleteTime delete_time = 6;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getDeleteTime = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime, 6));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.DeleteTime|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SearchQuery not = 7;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getNot = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery, 7));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setNot = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearNot = function() {
  return this.setNot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasNot = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Results results = 8;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Results}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getResults = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Results} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Results, 8));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Results|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setResults = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearResults = function() {
  return this.setResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasResults = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AgentResponse agent_response = 9;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getAgentResponse = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse, 9));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentResponse|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setAgentResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearAgentResponse = function() {
  return this.setAgentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasAgentResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentCallLog agent_call_log = 10;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getAgentCallLog = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog, 10));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.AgentCallLog|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setAgentCallLog = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearAgentCallLog = function() {
  return this.setAgentCallLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasAgentCallLog = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Phone phone = 11;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.Phone}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.getPhone = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.Phone} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.Phone, 11));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.Phone|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
*/
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchQuery} returns this
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchQuery.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.SearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hitsList: jspb.Message.toObjectList(msg.getHitsList(),
    proto.api.v1alpha1.vanalytics.SearchResponse.Hit.toObject, includeInstance),
    sort: (f = msg.getSort()) && proto.api.v1alpha1.vanalytics.Sort.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchResponse;
  return proto.api.v1alpha1.vanalytics.SearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.SearchResponse.Hit;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchResponse.Hit.deserializeBinaryFromReader);
      msg.addHits(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.Sort;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Sort.deserializeBinaryFromReader);
      msg.setSort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.SearchResponse.Hit.serializeBinaryToWriter
    );
  }
  f = message.getSort();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.Sort.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.SearchResponse.Hit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcript: (f = msg.getTranscript()) && proto.api.v1alpha1.vanalytics.Transcript.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.SearchResponse.Hit;
  return proto.api.v1alpha1.vanalytics.SearchResponse.Hit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.Transcript;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Transcript.deserializeBinaryFromReader);
      msg.setTranscript(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.SearchResponse.Hit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscript();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.Transcript.serializeBinaryToWriter
    );
  }
};


/**
 * optional Transcript transcript = 1;
 * @return {?proto.api.v1alpha1.vanalytics.Transcript}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.prototype.getTranscript = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Transcript} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Transcript, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Transcript|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit} returns this
*/
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.prototype.setTranscript = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit} returns this
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.prototype.clearTranscript = function() {
  return this.setTranscript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.Hit.prototype.hasTranscript = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse} returns this
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Hit hits = 4;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.SearchResponse.Hit>}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.getHitsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.SearchResponse.Hit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.SearchResponse.Hit, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.SearchResponse.Hit>} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse} returns this
*/
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.setHitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse.Hit}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.addHits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.vanalytics.SearchResponse.Hit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse} returns this
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.clearHitsList = function() {
  return this.setHitsList([]);
};


/**
 * optional Sort sort = 5;
 * @return {?proto.api.v1alpha1.vanalytics.Sort}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.getSort = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Sort} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Sort, 5));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Sort|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse} returns this
*/
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.setSort = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.SearchResponse} returns this
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.clearSort = function() {
  return this.setSort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.SearchResponse.prototype.hasSort = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.AgentCallLogQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    callSkillsInitial: (f = msg.getCallSkillsInitial()) && proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery}
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.AgentCallLogQuery;
  return proto.api.v1alpha1.vanalytics.AgentCallLogQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery}
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.deserializeBinaryFromReader);
      msg.setCallSkillsInitial(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.AgentCallLogQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSkillsInitial();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional CallSkillsInitialQuery call_skills_initial = 1;
 * @return {?proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery}
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.prototype.getCallSkillsInitial = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery} returns this
*/
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.prototype.setCallSkillsInitial = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.AgentCallLogQuery} returns this
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.prototype.clearCallSkillsInitial = function() {
  return this.setCallSkillsInitial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.AgentCallLogQuery.prototype.hasCallSkillsInitial = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    needList: jspb.Message.toObjectList(msg.getNeedList(),
    proto.api.v1alpha1.vanalytics.VanaTermsQuery.toObject, includeInstance),
    wantList: jspb.Message.toObjectList(msg.getWantList(),
    proto.api.v1alpha1.vanalytics.VanaTermsQuery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery;
  return proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.VanaTermsQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.VanaTermsQuery.deserializeBinaryFromReader);
      msg.addNeed(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.VanaTermsQuery;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.VanaTermsQuery.deserializeBinaryFromReader);
      msg.addWant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.VanaTermsQuery.serializeBinaryToWriter
    );
  }
  f = message.getWantList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.VanaTermsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VanaTermsQuery need = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.VanaTermsQuery>}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.getNeedList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.VanaTermsQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.VanaTermsQuery, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.VanaTermsQuery>} value
 * @return {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} returns this
*/
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.setNeedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.VanaTermsQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.addNeed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.vanalytics.VanaTermsQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} returns this
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.clearNeedList = function() {
  return this.setNeedList([]);
};


/**
 * repeated VanaTermsQuery want = 2;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.VanaTermsQuery>}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.getWantList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.VanaTermsQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.VanaTermsQuery, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.VanaTermsQuery>} value
 * @return {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} returns this
*/
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.setWantList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.VanaTermsQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery}
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.addWant = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.vanalytics.VanaTermsQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery} returns this
 */
proto.api.v1alpha1.vanalytics.CallSkillsInitialQuery.prototype.clearWantList = function() {
  return this.setWantList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.VanaTermsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    termsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    lacks: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.VanaTermsQuery;
  return proto.api.v1alpha1.vanalytics.VanaTermsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTerms(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLacks(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.VanaTermsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTermsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLacks();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated string terms = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.getTermsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} returns this
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.setTermsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} returns this
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.addTerms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} returns this
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.clearTermsList = function() {
  return this.setTermsList([]);
};


/**
 * optional bool lacks = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.getLacks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} returns this
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.setLacks = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool all = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.VanaTermsQuery} returns this
 */
proto.api.v1alpha1.vanalytics.VanaTermsQuery.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.Sort.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Sort.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Sort} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Sort.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.api.v1alpha1.vanalytics.Sort.Field.toObject, includeInstance),
    afterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Sort}
 */
proto.api.v1alpha1.vanalytics.Sort.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Sort;
  return proto.api.v1alpha1.vanalytics.Sort.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Sort} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Sort}
 */
proto.api.v1alpha1.vanalytics.Sort.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.Sort.Field;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Sort.Field.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAfter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Sort.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Sort} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Sort.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.Sort.Field.serializeBinaryToWriter
    );
  }
  f = message.getAfterList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Sort.Field.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Sort.Field.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Sort.Field} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Sort.Field.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    desc: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Sort.Field}
 */
proto.api.v1alpha1.vanalytics.Sort.Field.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Sort.Field;
  return proto.api.v1alpha1.vanalytics.Sort.Field.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Sort.Field} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Sort.Field}
 */
proto.api.v1alpha1.vanalytics.Sort.Field.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Sort.Field.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Sort.Field.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Sort.Field} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Sort.Field.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDesc();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Sort.Field.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Sort.Field} returns this
 */
proto.api.v1alpha1.vanalytics.Sort.Field.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool desc = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Sort.Field.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.Sort.Field} returns this
 */
proto.api.v1alpha1.vanalytics.Sort.Field.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Field fields = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.Sort.Field>}
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.Sort.Field>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.Sort.Field, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.Sort.Field>} value
 * @return {!proto.api.v1alpha1.vanalytics.Sort} returns this
*/
proto.api.v1alpha1.vanalytics.Sort.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.Sort.Field=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.Sort.Field}
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.vanalytics.Sort.Field, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Sort} returns this
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * repeated string after = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.getAfterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.Sort} returns this
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.setAfterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.Sort} returns this
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.addAfter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Sort} returns this
 */
proto.api.v1alpha1.vanalytics.Sort.prototype.clearAfterList = function() {
  return this.setAfterList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest;
  return proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupNamesList: jspb.Message.toObjectList(msg.getGroupNamesList(),
    proto.api.v1alpha1.vanalytics.TranscriptGroupName.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse;
  return proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.TranscriptGroupName;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TranscriptGroupName.deserializeBinaryFromReader);
      msg.addGroupNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupNamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.TranscriptGroupName.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TranscriptGroupName group_names = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.TranscriptGroupName>}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.prototype.getGroupNamesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.TranscriptGroupName>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.TranscriptGroupName, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.TranscriptGroupName>} value
 * @return {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse} returns this
*/
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.prototype.setGroupNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptGroupName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptGroupName}
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.prototype.addGroupNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.vanalytics.TranscriptGroupName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse} returns this
 */
proto.api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse.prototype.clearGroupNamesList = function() {
  return this.setGroupNamesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TranscriptGroupName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptGroupName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptGroupName}
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TranscriptGroupName;
  return proto.api.v1alpha1.vanalytics.TranscriptGroupName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptGroupName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptGroupName}
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TranscriptGroupName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptGroupName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptGroupName} returns this
 */
proto.api.v1alpha1.vanalytics.TranscriptGroupName.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest;
  return proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest} returns this
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse;
  return proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string values = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse} returns this
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse} returns this
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse} returns this
 */
proto.api.v1alpha1.vanalytics.ListAgentResponseValuesResponse.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.Transcript.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Transcript.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Transcript} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Transcript.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    callSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.api.v1alpha1.vanalytics.Result.toObject, includeInstance),
    silence: (f = msg.getSilence()) && proto.api.v1alpha1.vanalytics.Silence.toObject(includeInstance, f),
    talkTime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    callStartTime: (f = msg.getCallStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    talkOver: (f = msg.getTalkOver()) && proto.api.v1alpha1.vanalytics.TalkOver.toObject(includeInstance, f),
    callerId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 13, ""),
    audioTime: jspb.Message.getFieldWithDefault(msg, 14, 0),
    audioBytes: jspb.Message.getFieldWithDefault(msg, 15, 0),
    groupName: jspb.Message.getFieldWithDefault(msg, 17, ""),
    agentCallLog: (f = msg.getAgentCallLog()) && api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog.toObject(includeInstance, f),
    flagSummary: (f = msg.getFlagSummary()) && proto.api.v1alpha1.vanalytics.FlagSummary.toObject(includeInstance, f),
    deleteTime: (f = msg.getDeleteTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    numberFormat: jspb.Message.getFieldWithDefault(msg, 21, ""),
    agentResponseMap: (f = msg.getAgentResponseMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.vanalytics.AgentResponse.toObject) : [],
    summary: (f = msg.getSummary()) && api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript}
 */
proto.api.v1alpha1.vanalytics.Transcript.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Transcript;
  return proto.api.v1alpha1.vanalytics.Transcript.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Transcript} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript}
 */
proto.api.v1alpha1.vanalytics.Transcript.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTranscriptSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.Result;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Result.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.vanalytics.Silence;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Silence.deserializeBinaryFromReader);
      msg.setSilence(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTalkTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCallStartTime(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.deserializeBinaryFromReader);
      msg.setTalkOver(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAudioTime(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAudioBytes(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 18:
      var value = new api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog;
      reader.readMessage(value,api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog.deserializeBinaryFromReader);
      msg.setAgentCallLog(value);
      break;
    case 19:
      var value = new proto.api.v1alpha1.vanalytics.FlagSummary;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.FlagSummary.deserializeBinaryFromReader);
      msg.setFlagSummary(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberFormat(value);
      break;
    case 22:
      var value = msg.getAgentResponseMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.vanalytics.AgentResponse.deserializeBinaryFromReader, "", new proto.api.v1alpha1.vanalytics.AgentResponse());
         });
      break;
    case 24:
      var value = new api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary;
      reader.readMessage(value,api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary.deserializeBinaryFromReader);
      msg.setSummary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Transcript.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Transcript} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Transcript.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.Result.serializeBinaryToWriter
    );
  }
  f = message.getSilence();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.vanalytics.Silence.serializeBinaryToWriter
    );
  }
  f = message.getTalkTime();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCallStartTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTalkOver();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.serializeBinaryToWriter
    );
  }
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAudioTime();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getAudioBytes();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getAgentCallLog();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog.serializeBinaryToWriter
    );
  }
  f = message.getFlagSummary();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.api.v1alpha1.vanalytics.FlagSummary.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNumberFormat();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getAgentResponseMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(22, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.vanalytics.AgentResponse.serializeBinaryToWriter);
  }
  f = message.getSummary();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 transcript_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 call_sid = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 4;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Result results = 5;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.Result>}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.Result>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.Result, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.Result>} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.Result=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.Result}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.vanalytics.Result, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional Silence silence = 6;
 * @return {?proto.api.v1alpha1.vanalytics.Silence}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getSilence = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Silence} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Silence, 6));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Silence|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setSilence = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearSilence = function() {
  return this.setSilence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasSilence = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 talk_time = 7;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getTalkTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setTalkTime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp call_start_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getCallStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setCallStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearCallStartTime = function() {
  return this.setCallStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasCallStartTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TalkOver talk_over = 11;
 * @return {?proto.api.v1alpha1.vanalytics.TalkOver}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getTalkOver = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TalkOver} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver, 11));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TalkOver|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setTalkOver = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearTalkOver = function() {
  return this.setTalkOver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasTalkOver = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string caller_id = 12;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string phone_number = 13;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional uint32 audio_time = 14;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getAudioTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setAudioTime = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 audio_bytes = 15;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getAudioBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setAudioBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string group_name = 17;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional aclpb.AgentCallLog agent_call_log = 18;
 * @return {?proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getAgentCallLog = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog, 18));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setAgentCallLog = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearAgentCallLog = function() {
  return this.setAgentCallLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasAgentCallLog = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional FlagSummary flag_summary = 19;
 * @return {?proto.api.v1alpha1.vanalytics.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getFlagSummary = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.FlagSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.FlagSummary, 19));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.FlagSummary|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setFlagSummary = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearFlagSummary = function() {
  return this.setFlagSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasFlagSummary = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.protobuf.Timestamp delete_time = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getDeleteTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string number_format = 21;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getNumberFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.setNumberFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * map<string, AgentResponse> agent_response = 22;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.vanalytics.AgentResponse>}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getAgentResponseMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.vanalytics.AgentResponse>} */ (
      jspb.Message.getMapField(this, 22, opt_noLazyCreate,
      proto.api.v1alpha1.vanalytics.AgentResponse));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearAgentResponseMap = function() {
  this.getAgentResponseMap().clear();
  return this;
};


/**
 * optional TranscriptSummary summary = 24;
 * @return {?proto.api.v1alpha1.vanalytics.TranscriptSummary}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.getSummary = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TranscriptSummary} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary, 24));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TranscriptSummary|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
*/
proto.api.v1alpha1.vanalytics.Transcript.prototype.setSummary = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Transcript} returns this
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.clearSummary = function() {
  return this.setSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Transcript.prototype.hasSummary = function() {
  return jspb.Message.getField(this, 24) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.Result.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.api.v1alpha1.vanalytics.Segment.toObject, includeInstance),
    agentFirstName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    agentLastName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    agentUserName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    beginTime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 9, 0),
    text: jspb.Message.getFieldWithDefault(msg, 10, ""),
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Result}
 */
proto.api.v1alpha1.vanalytics.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Result;
  return proto.api.v1alpha1.vanalytics.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Result}
 */
proto.api.v1alpha1.vanalytics.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannel(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.Segment;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Segment.deserializeBinaryFromReader);
      msg.addSegments(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentFirstName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentLastName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUserName(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBeginTime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.Segment.serializeBinaryToWriter
    );
  }
  f = message.getAgentFirstName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAgentLastName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAgentUserName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBeginTime();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional int32 channel = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Segment segments = 2;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.Segment>}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.Segment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.Segment, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.Segment>} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
*/
proto.api.v1alpha1.vanalytics.Result.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.Segment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.Segment}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.vanalytics.Segment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
};


/**
 * optional string agent_first_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getAgentFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setAgentFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string agent_last_name = 6;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getAgentLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setAgentLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string agent_user_name = 7;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getAgentUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setAgentUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 begin_time = 8;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getBeginTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setBeginTime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 duration = 9;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string text = 10;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 hunt_group_sid = 11;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Result.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Result} returns this
 */
proto.api.v1alpha1.vanalytics.Result.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.Segment.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Segment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Segment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Segment.toObject = function(includeInstance, msg) {
  var f, obj = {
    beginTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    confidence: jspb.Message.getFieldWithDefault(msg, 2, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.api.v1alpha1.vanalytics.Word.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Segment}
 */
proto.api.v1alpha1.vanalytics.Segment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Segment;
  return proto.api.v1alpha1.vanalytics.Segment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Segment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Segment}
 */
proto.api.v1alpha1.vanalytics.Segment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBeginTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfidence(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.Word;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Word.deserializeBinaryFromReader);
      msg.addWords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Segment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Segment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Segment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeginTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.Word.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 begin_time = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.getBeginTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.setBeginTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 confidence = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 duration = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Word words = 5;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.Word>}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.Word>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.Word, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.Word>} value
 * @return {!proto.api.v1alpha1.vanalytics.Segment} returns this
*/
proto.api.v1alpha1.vanalytics.Segment.prototype.setWordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.Word=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.Word}
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.vanalytics.Word, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Segment.prototype.clearWordsList = function() {
  return this.setWordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Word.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Word} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Word.toObject = function(includeInstance, msg) {
  var f, obj = {
    beginTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    confidence: jspb.Message.getFieldWithDefault(msg, 2, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    spoken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    redacted: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Word}
 */
proto.api.v1alpha1.vanalytics.Word.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Word;
  return proto.api.v1alpha1.vanalytics.Word.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Word} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Word}
 */
proto.api.v1alpha1.vanalytics.Word.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBeginTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfidence(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpoken(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRedacted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Word.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Word} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Word.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeginTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSpoken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRedacted();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint32 begin_time = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.getBeginTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Word} returns this
 */
proto.api.v1alpha1.vanalytics.Word.prototype.setBeginTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 confidence = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Word} returns this
 */
proto.api.v1alpha1.vanalytics.Word.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 duration = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Word} returns this
 */
proto.api.v1alpha1.vanalytics.Word.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string spoken = 4;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.getSpoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.Word} returns this
 */
proto.api.v1alpha1.vanalytics.Word.prototype.setSpoken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool redacted = 5;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Word.prototype.getRedacted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.Word} returns this
 */
proto.api.v1alpha1.vanalytics.Word.prototype.setRedacted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.Silence.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Silence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Silence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && proto.api.v1alpha1.vanalytics.Silence.Duration.toObject(includeInstance, f),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.api.v1alpha1.vanalytics.Silence.Segment.toObject, includeInstance),
    occurrence: (f = msg.getOccurrence()) && proto.api.v1alpha1.vanalytics.Silence.Occurrence.toObject(includeInstance, f),
    threshold: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Silence}
 */
proto.api.v1alpha1.vanalytics.Silence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Silence;
  return proto.api.v1alpha1.vanalytics.Silence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Silence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Silence}
 */
proto.api.v1alpha1.vanalytics.Silence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.Silence.Duration;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Silence.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.Silence.Segment;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Silence.Segment.deserializeBinaryFromReader);
      msg.addSegments(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.Silence.Occurrence;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Silence.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThreshold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Silence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Silence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.Silence.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.Silence.Segment.serializeBinaryToWriter
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.Silence.Occurrence.serializeBinaryToWriter
    );
  }
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Silence.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    max: jspb.Message.getFieldWithDefault(msg, 2, 0),
    percentage: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Duration}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Silence.Duration;
  return proto.api.v1alpha1.vanalytics.Silence.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Duration}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Silence.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPercentage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Duration} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 max = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Duration} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 percentage = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Duration} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.Duration.prototype.setPercentage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Silence.Segment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Segment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.toObject = function(includeInstance, msg) {
  var f, obj = {
    beginTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Segment}
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Silence.Segment;
  return proto.api.v1alpha1.vanalytics.Silence.Segment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Segment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Segment}
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBeginTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Silence.Segment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Segment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeginTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 begin_time = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.prototype.getBeginTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.prototype.setBeginTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 duration = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.Segment.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.Silence.Occurrence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Occurrence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Occurrence}
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.Silence.Occurrence;
  return proto.api.v1alpha1.vanalytics.Silence.Occurrence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Occurrence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Occurrence}
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.Silence.Occurrence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Occurrence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Occurrence} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.Occurrence.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Duration duration = 1;
 * @return {?proto.api.v1alpha1.vanalytics.Silence.Duration}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.getDuration = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Silence.Duration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Silence.Duration, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Silence.Duration|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.Silence.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Segment segments = 2;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.Silence.Segment>}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.Silence.Segment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.Silence.Segment, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.Silence.Segment>} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.Silence.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.Silence.Segment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.Silence.Segment}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.vanalytics.Silence.Segment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
};


/**
 * optional Occurrence occurrence = 3;
 * @return {?proto.api.v1alpha1.vanalytics.Silence.Occurrence}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.getOccurrence = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Silence.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Silence.Occurrence, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Silence.Occurrence|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
*/
proto.api.v1alpha1.vanalytics.Silence.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 threshold = 4;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.Silence} returns this
 */
proto.api.v1alpha1.vanalytics.Silence.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.TalkOver.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TalkOver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurrence: (f = msg.getOccurrence()) && proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.api.v1alpha1.vanalytics.TalkOver.Duration.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.api.v1alpha1.vanalytics.TalkOver.Result.toObject, includeInstance),
    threshold: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver}
 */
proto.api.v1alpha1.vanalytics.TalkOver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TalkOver;
  return proto.api.v1alpha1.vanalytics.TalkOver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver}
 */
proto.api.v1alpha1.vanalytics.TalkOver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver.Occurrence;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver.Duration;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver.Result;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.Result.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThreshold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TalkOver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.Duration.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.Result.serializeBinaryToWriter
    );
  }
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TalkOver.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    max: jspb.Message.getFieldWithDefault(msg, 2, 0),
    percentage: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Duration}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TalkOver.Duration;
  return proto.api.v1alpha1.vanalytics.TalkOver.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Duration}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TalkOver.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPercentage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Duration} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 max = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Duration} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 percentage = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Duration} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Duration.prototype.setPercentage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TalkOver.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    occurrence: (f = msg.getOccurrence()) && proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.api.v1alpha1.vanalytics.TalkOver.Duration.toObject(includeInstance, f),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.api.v1alpha1.vanalytics.TalkOver.Segment.toObject, includeInstance),
    agentUserName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    agentSessionSid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TalkOver.Result;
  return proto.api.v1alpha1.vanalytics.TalkOver.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannel(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver.Occurrence;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver.Duration;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.TalkOver.Segment;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TalkOver.Segment.deserializeBinaryFromReader);
      msg.addSegments(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUserName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TalkOver.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.TalkOver.Segment.serializeBinaryToWriter
    );
  }
  f = message.getAgentUserName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAgentSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int32 channel = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.api.v1alpha1.vanalytics.TalkOver.Occurrence}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.getOccurrence = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TalkOver.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver.Occurrence, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TalkOver.Occurrence|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
*/
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Duration duration = 3;
 * @return {?proto.api.v1alpha1.vanalytics.TalkOver.Duration}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.getDuration = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TalkOver.Duration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver.Duration, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TalkOver.Duration|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
*/
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Segment segments = 4;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.TalkOver.Segment>}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.TalkOver.Segment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver.Segment, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.TalkOver.Segment>} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
*/
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Segment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Segment}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.vanalytics.TalkOver.Segment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
};


/**
 * optional string agent_user_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.getAgentUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.setAgentUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 agent_session_sid = 6;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.getAgentSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Result.prototype.setAgentSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TalkOver.Segment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Segment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.toObject = function(includeInstance, msg) {
  var f, obj = {
    beginTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Segment}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TalkOver.Segment;
  return proto.api.v1alpha1.vanalytics.TalkOver.Segment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Segment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Segment}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBeginTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TalkOver.Segment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Segment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeginTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 begin_time = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.prototype.getBeginTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.prototype.setBeginTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 duration = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Segment} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Segment.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Occurrence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Occurrence}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TalkOver.Occurrence;
  return proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Occurrence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Occurrence}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Occurrence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Occurrence} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.Occurrence.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Occurrence occurrence = 1;
 * @return {?proto.api.v1alpha1.vanalytics.TalkOver.Occurrence}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.getOccurrence = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TalkOver.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver.Occurrence, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TalkOver.Occurrence|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.TalkOver.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Duration duration = 2;
 * @return {?proto.api.v1alpha1.vanalytics.TalkOver.Duration}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.getDuration = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TalkOver.Duration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver.Duration, 2));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TalkOver.Duration|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.TalkOver.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Result results = 3;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.TalkOver.Result>}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.TalkOver.Result>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.TalkOver.Result, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.TalkOver.Result>} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
*/
proto.api.v1alpha1.vanalytics.TalkOver.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.TalkOver.Result=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver.Result}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.vanalytics.TalkOver.Result, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional uint32 threshold = 4;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.TalkOver} returns this
 */
proto.api.v1alpha1.vanalytics.TalkOver.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.FlagSummary.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.FlagSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prioritySum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priorityMax: jspb.Message.getFieldWithDefault(msg, 3, 0),
    needReview: (f = msg.getNeedReview()) && proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.toObject(includeInstance, f),
    flagsList: jspb.Message.toObjectList(msg.getFlagsList(),
    proto.api.v1alpha1.vanalytics.FlagSummary.Flag.toObject, includeInstance),
    reviewStatus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.FlagSummary;
  return proto.api.v1alpha1.vanalytics.FlagSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrioritySum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriorityMax(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.deserializeBinaryFromReader);
      msg.setNeedReview(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.FlagSummary.Flag;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.FlagSummary.Flag.deserializeBinaryFromReader);
      msg.addFlags(value);
      break;
    case 6:
      var value = /** @type {!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus} */ (reader.readEnum());
      msg.setReviewStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.FlagSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPrioritySum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPriorityMax();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNeedReview();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.serializeBinaryToWriter
    );
  }
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.FlagSummary.Flag.serializeBinaryToWriter
    );
  }
  f = message.getReviewStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.toObject = function(includeInstance, msg) {
  var f, obj = {
    prioritySum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priorityMax: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0),
    flagSidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview;
  return proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrioritySum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriorityMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFlagSids(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrioritySum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPriorityMax();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFlagSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional int32 priority_sum = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.getPrioritySum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.setPrioritySum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 priority_max = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.getPriorityMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.setPriorityMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated int64 flag_sids = 4;
 * @return {!Array<number>}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.getFlagSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.setFlagSidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.addFlagSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview.prototype.clearFlagSidsList = function() {
  return this.setFlagSidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.repeatedFields_ = [5,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.FlagSummary.Flag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.api.v1alpha1.vanalytics.FlagSummary.Filter.toObject, includeInstance),
    mustReview: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    mustNotify: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    reviewsList: jspb.Message.toObjectList(msg.getReviewsList(),
    proto.api.v1alpha1.vanalytics.FlagSummary.Review.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.FlagSummary.Flag;
  return proto.api.v1alpha1.vanalytics.FlagSummary.Flag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFlagSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.FlagSummary.Filter;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.FlagSummary.Filter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMustReview(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMustNotify(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.vanalytics.FlagSummary.Review;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.FlagSummary.Review.deserializeBinaryFromReader);
      msg.addReviews(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.FlagSummary.Flag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.FlagSummary.Filter.serializeBinaryToWriter
    );
  }
  f = message.getMustReview();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMustNotify();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getReviewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.api.v1alpha1.vanalytics.FlagSummary.Review.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 flag_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getFlagSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setFlagSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 version = 4;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Filter filters = 5;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Filter>}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Filter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.FlagSummary.Filter, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Filter>} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
*/
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.vanalytics.FlagSummary.Filter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional bool must_review = 6;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getMustReview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setMustReview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool must_notify = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getMustNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setMustNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated Review reviews = 8;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Review>}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.getReviewsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Review>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.FlagSummary.Review, 8));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Review>} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
*/
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.setReviewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Review=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Review}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.addReviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.v1alpha1.vanalytics.FlagSummary.Review, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Flag.prototype.clearReviewsList = function() {
  return this.setReviewsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.FlagSummary.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    joinKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    flagSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    filterSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.FlagSummary.Filter;
  return proto.api.v1alpha1.vanalytics.FlagSummary.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJoinKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFlagSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilterSid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.FlagSummary.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoinKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFlagSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFilterSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string join_key = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.getJoinKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.setJoinKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 flag_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.getFlagSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.setFlagSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 filter_sid = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.getFilterSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.setFilterSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 version = 4;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Filter} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Filter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.FlagSummary.Review.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Review} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.toObject = function(includeInstance, msg) {
  var f, obj = {
    joinKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    flagSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Review}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.FlagSummary.Review;
  return proto.api.v1alpha1.vanalytics.FlagSummary.Review.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Review} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Review}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJoinKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFlagSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.FlagSummary.Review.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Review} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoinKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFlagSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string join_key = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.getJoinKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Review} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.setJoinKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 flag_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.getFlagSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Review} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.setFlagSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Review} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.Review.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 priority_sum = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.getPrioritySum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.setPrioritySum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 priority_max = 3;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.getPriorityMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.setPriorityMax = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional NeedReview need_review = 4;
 * @return {?proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.getNeedReview = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview, 4));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.FlagSummary.NeedReview|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
*/
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.setNeedReview = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.clearNeedReview = function() {
  return this.setNeedReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.hasNeedReview = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Flag flags = 5;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Flag>}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.getFlagsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Flag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.FlagSummary.Flag, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.FlagSummary.Flag>} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
*/
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.setFlagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary.Flag}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.addFlags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.vanalytics.FlagSummary.Flag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.clearFlagsList = function() {
  return this.setFlagsList([]);
};


/**
 * optional TranscriptReviewStatus review_status = 6;
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus}
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.getReviewStatus = function() {
  return /** @type {!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptReviewStatus} value
 * @return {!proto.api.v1alpha1.vanalytics.FlagSummary} returns this
 */
proto.api.v1alpha1.vanalytics.FlagSummary.prototype.setReviewStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.AgentResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.AgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.AgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.AgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.AgentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.AgentResponse}
 */
proto.api.v1alpha1.vanalytics.AgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.AgentResponse;
  return proto.api.v1alpha1.vanalytics.AgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.AgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.AgentResponse}
 */
proto.api.v1alpha1.vanalytics.AgentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.AgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.AgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.AgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.AgentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string values = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.AgentResponse.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.AgentResponse} returns this
 */
proto.api.v1alpha1.vanalytics.AgentResponse.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.AgentResponse} returns this
 */
proto.api.v1alpha1.vanalytics.AgentResponse.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.AgentResponse} returns this
 */
proto.api.v1alpha1.vanalytics.AgentResponse.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sort: (f = msg.getSort()) && proto.api.v1alpha1.vanalytics.Sort.toObject(includeInstance, f),
    transcriptMask: (f = msg.getTranscriptMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    flagSummary: (f = msg.getFlagSummary()) && proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest;
  return proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.vanalytics.Sort;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.Sort.deserializeBinaryFromReader);
      msg.setSort(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setTranscriptMask(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.deserializeBinaryFromReader);
      msg.setFlagSummary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSort();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.vanalytics.Sort.serializeBinaryToWriter
    );
  }
  f = message.getTranscriptMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFlagSummary();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Sort sort = 3;
 * @return {?proto.api.v1alpha1.vanalytics.Sort}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.getSort = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.Sort} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.Sort, 3));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.Sort|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
*/
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.setSort = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.clearSort = function() {
  return this.setSort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.hasSort = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask transcript_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.getTranscriptMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
*/
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.setTranscriptMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.clearTranscriptMask = function() {
  return this.setTranscriptMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.hasTranscriptMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SearchQuery.FlagSummary flag_summary = 5;
 * @return {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.getFlagSummary = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary, 5));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.SearchQuery.FlagSummary|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
*/
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.setFlagSummary = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest} returns this
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.clearFlagSummary = function() {
  return this.setFlagSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.ListFlaggedTranscriptsByOrgIdRequest.prototype.hasFlagSummary = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.api.v1alpha1.vanalytics.TranscriptReviewStatus = {
  TRANSCRIPT_REVIEW_STATUS_TODO: 0,
  TRANSCRIPT_REVIEW_STATUS_DONE: 1,
  TRANSCRIPT_REVIEW_STATUS_NONE: 2
};

goog.object.extend(exports, proto.api.v1alpha1.vanalytics);
