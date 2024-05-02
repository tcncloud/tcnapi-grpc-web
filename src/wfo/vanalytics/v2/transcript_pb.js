// source: wfo/vanalytics/v2/transcript.proto
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
var api_commons_vanalytics_pb = require('../../../api/commons/vanalytics_pb.js');
goog.object.extend(proto, api_commons_vanalytics_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var wfo_vanalytics_v2_agent_call_log_pb = require('../../../wfo/vanalytics/v2/agent_call_log_pb.js');
goog.object.extend(proto, wfo_vanalytics_v2_agent_call_log_pb);
goog.exportSymbol('proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.AgentResponse', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.Phone', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.Segment', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.Silence', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.Silence.Duration', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.Silence.Occurrence', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.TalkOver', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.TalkOver.Duration', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Call.Thread', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Channel', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.FlagSummary', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.FlagSummary.Filter', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.FlagSummary.Flag', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.FlagSummary.NeedReview', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.FlagSummary.Review', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.FuzzinessAuto', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Highlight', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Match', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Match.FuzzinessCase', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Moment', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.ReviewStatus', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SearchTranscriptsRequest', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SearchTranscriptsResponse', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Sms', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Sms.Phone', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Sms.Segment', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Sms.Thread', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SpanFuzzy', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SpanFuzzy.FuzzinessCase', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SpanNear', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SpanNear.Clause', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SpanNear.Clause.MatchCase', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.SpanTerm', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Transcript', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.Transcript.MetadataCase', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptBoolQuery', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Channel', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Metadata', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Sms', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.StartTime', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Threads', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid', null, global);
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
proto.wfo.vanalytics.v2.Transcript = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wfo.vanalytics.v2.Transcript.oneofGroups_);
};
goog.inherits(proto.wfo.vanalytics.v2.Transcript, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Transcript.displayName = 'proto.wfo.vanalytics.v2.Transcript';
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
proto.wfo.vanalytics.v2.FlagSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.FlagSummary.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FlagSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FlagSummary.displayName = 'proto.wfo.vanalytics.v2.FlagSummary';
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
proto.wfo.vanalytics.v2.FlagSummary.NeedReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.FlagSummary.NeedReview.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FlagSummary.NeedReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FlagSummary.NeedReview.displayName = 'proto.wfo.vanalytics.v2.FlagSummary.NeedReview';
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
proto.wfo.vanalytics.v2.FlagSummary.Flag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.FlagSummary.Flag.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FlagSummary.Flag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FlagSummary.Flag.displayName = 'proto.wfo.vanalytics.v2.FlagSummary.Flag';
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
proto.wfo.vanalytics.v2.FlagSummary.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FlagSummary.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FlagSummary.Filter.displayName = 'proto.wfo.vanalytics.v2.FlagSummary.Filter';
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
proto.wfo.vanalytics.v2.FlagSummary.Review = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FlagSummary.Review, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FlagSummary.Review.displayName = 'proto.wfo.vanalytics.v2.FlagSummary.Review';
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
proto.wfo.vanalytics.v2.Sms = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.Sms.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Sms, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Sms.displayName = 'proto.wfo.vanalytics.v2.Sms';
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
proto.wfo.vanalytics.v2.Sms.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Sms.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Sms.Phone.displayName = 'proto.wfo.vanalytics.v2.Sms.Phone';
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
proto.wfo.vanalytics.v2.Sms.Thread = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.Sms.Thread.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Sms.Thread, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Sms.Thread.displayName = 'proto.wfo.vanalytics.v2.Sms.Thread';
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
proto.wfo.vanalytics.v2.Sms.Segment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Sms.Segment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Sms.Segment.displayName = 'proto.wfo.vanalytics.v2.Sms.Segment';
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
proto.wfo.vanalytics.v2.Call = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.Call.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.displayName = 'proto.wfo.vanalytics.v2.Call';
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
proto.wfo.vanalytics.v2.Call.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.Phone.displayName = 'proto.wfo.vanalytics.v2.Call.Phone';
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
proto.wfo.vanalytics.v2.Call.AgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.Call.AgentResponse.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.AgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.AgentResponse.displayName = 'proto.wfo.vanalytics.v2.Call.AgentResponse';
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
proto.wfo.vanalytics.v2.Call.Thread = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.Call.Thread.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.Thread, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.Thread.displayName = 'proto.wfo.vanalytics.v2.Call.Thread';
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
proto.wfo.vanalytics.v2.Call.Segment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.Segment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.Segment.displayName = 'proto.wfo.vanalytics.v2.Call.Segment';
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
proto.wfo.vanalytics.v2.Call.TalkOver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.TalkOver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.TalkOver.displayName = 'proto.wfo.vanalytics.v2.Call.TalkOver';
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
proto.wfo.vanalytics.v2.Call.TalkOver.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.TalkOver.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.TalkOver.Duration.displayName = 'proto.wfo.vanalytics.v2.Call.TalkOver.Duration';
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
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.displayName = 'proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence';
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
proto.wfo.vanalytics.v2.Call.Silence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.Silence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.Silence.displayName = 'proto.wfo.vanalytics.v2.Call.Silence';
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
proto.wfo.vanalytics.v2.Call.Silence.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.Silence.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.Silence.Duration.displayName = 'proto.wfo.vanalytics.v2.Call.Silence.Duration';
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
proto.wfo.vanalytics.v2.Call.Silence.Occurrence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Call.Silence.Occurrence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Call.Silence.Occurrence.displayName = 'proto.wfo.vanalytics.v2.Call.Silence.Occurrence';
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
proto.wfo.vanalytics.v2.SearchTranscriptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.SearchTranscriptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SearchTranscriptsRequest.displayName = 'proto.wfo.vanalytics.v2.SearchTranscriptsRequest';
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
proto.wfo.vanalytics.v2.Highlight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Highlight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Highlight.displayName = 'proto.wfo.vanalytics.v2.Highlight';
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
proto.wfo.vanalytics.v2.SearchTranscriptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.SearchTranscriptsResponse.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.SearchTranscriptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SearchTranscriptsResponse.displayName = 'proto.wfo.vanalytics.v2.SearchTranscriptsResponse';
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
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.displayName = 'proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit';
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
proto.wfo.vanalytics.v2.TranscriptBoolQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptBoolQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptBoolQuery.displayName = 'proto.wfo.vanalytics.v2.TranscriptBoolQuery';
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
proto.wfo.vanalytics.v2.TranscriptQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw';
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
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Channel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Channel.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Channel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Channel.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Channel';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Metadata';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Sms = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Sms, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Sms.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Sms';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Threads, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Threads';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text';
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid';
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count';
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
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.StartTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.StartTime';
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
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.displayName = 'proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime';
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
proto.wfo.vanalytics.v2.Moment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.Moment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Moment.displayName = 'proto.wfo.vanalytics.v2.Moment';
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
proto.wfo.vanalytics.v2.FuzzinessAuto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FuzzinessAuto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FuzzinessAuto.displayName = 'proto.wfo.vanalytics.v2.FuzzinessAuto';
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
proto.wfo.vanalytics.v2.Match = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wfo.vanalytics.v2.Match.oneofGroups_);
};
goog.inherits(proto.wfo.vanalytics.v2.Match, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.Match.displayName = 'proto.wfo.vanalytics.v2.Match';
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
proto.wfo.vanalytics.v2.SpanNear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.SpanNear.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.SpanNear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SpanNear.displayName = 'proto.wfo.vanalytics.v2.SpanNear';
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
proto.wfo.vanalytics.v2.SpanNear.Clause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wfo.vanalytics.v2.SpanNear.Clause.oneofGroups_);
};
goog.inherits(proto.wfo.vanalytics.v2.SpanNear.Clause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SpanNear.Clause.displayName = 'proto.wfo.vanalytics.v2.SpanNear.Clause';
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
proto.wfo.vanalytics.v2.SpanTerm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.SpanTerm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SpanTerm.displayName = 'proto.wfo.vanalytics.v2.SpanTerm';
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
proto.wfo.vanalytics.v2.SpanFuzzy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wfo.vanalytics.v2.SpanFuzzy.oneofGroups_);
};
goog.inherits(proto.wfo.vanalytics.v2.SpanFuzzy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.SpanFuzzy.displayName = 'proto.wfo.vanalytics.v2.SpanFuzzy';
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.displayName = 'proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest';
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.displayName = 'proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wfo.vanalytics.v2.Transcript.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.wfo.vanalytics.v2.Transcript.MetadataCase = {
  METADATA_NOT_SET: 0,
  CALL: 1,
  SMS: 2
};

/**
 * @return {proto.wfo.vanalytics.v2.Transcript.MetadataCase}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getMetadataCase = function() {
  return /** @type {proto.wfo.vanalytics.v2.Transcript.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.wfo.vanalytics.v2.Transcript.oneofGroups_[0]));
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
proto.wfo.vanalytics.v2.Transcript.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Transcript.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Transcript} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Transcript.toObject = function(includeInstance, msg) {
  var f, obj = {
    call: (f = msg.getCall()) && proto.wfo.vanalytics.v2.Call.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.wfo.vanalytics.v2.Sms.toObject(includeInstance, f),
    channel: jspb.Message.getFieldWithDefault(msg, 12, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deleteTime: (f = msg.getDeleteTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    flagSummary: (f = msg.getFlagSummary()) && proto.wfo.vanalytics.v2.FlagSummary.toObject(includeInstance, f),
    transcriptSid: jspb.Message.getFieldWithDefault(msg, 17, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Transcript}
 */
proto.wfo.vanalytics.v2.Transcript.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Transcript;
  return proto.wfo.vanalytics.v2.Transcript.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Transcript} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Transcript}
 */
proto.wfo.vanalytics.v2.Transcript.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.Call;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.Sms;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Sms.deserializeBinaryFromReader);
      msg.setSms(value);
      break;
    case 12:
      var value = /** @type {!proto.wfo.vanalytics.v2.Channel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 16:
      var value = new proto.wfo.vanalytics.v2.FlagSummary;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FlagSummary.deserializeBinaryFromReader);
      msg.setFlagSummary(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTranscriptSid(value);
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
proto.wfo.vanalytics.v2.Transcript.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Transcript.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Transcript} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Transcript.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.Call.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.Sms.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFlagSummary();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.wfo.vanalytics.v2.FlagSummary.serializeBinaryToWriter
    );
  }
  f = message.getTranscriptSid();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
};


/**
 * optional Call call = 1;
 * @return {?proto.wfo.vanalytics.v2.Call}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getCall = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
*/
proto.wfo.vanalytics.v2.Transcript.prototype.setCall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wfo.vanalytics.v2.Transcript.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.hasCall = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Sms sms = 2;
 * @return {?proto.wfo.vanalytics.v2.Sms}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getSms = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Sms} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Sms, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Sms|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
*/
proto.wfo.vanalytics.v2.Transcript.prototype.setSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wfo.vanalytics.v2.Transcript.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.hasSms = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Channel channel = 12;
 * @return {!proto.wfo.vanalytics.v2.Channel}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getChannel = function() {
  return /** @type {!proto.wfo.vanalytics.v2.Channel} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.wfo.vanalytics.v2.Channel} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
*/
proto.wfo.vanalytics.v2.Transcript.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp delete_time = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getDeleteTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
*/
proto.wfo.vanalytics.v2.Transcript.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional FlagSummary flag_summary = 16;
 * @return {?proto.wfo.vanalytics.v2.FlagSummary}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getFlagSummary = function() {
  return /** @type{?proto.wfo.vanalytics.v2.FlagSummary} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.FlagSummary, 16));
};


/**
 * @param {?proto.wfo.vanalytics.v2.FlagSummary|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
*/
proto.wfo.vanalytics.v2.Transcript.prototype.setFlagSummary = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.clearFlagSummary = function() {
  return this.setFlagSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.hasFlagSummary = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 transcript_sid = 17;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Transcript.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Transcript} returns this
 */
proto.wfo.vanalytics.v2.Transcript.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.FlagSummary.repeatedFields_ = [5];



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
proto.wfo.vanalytics.v2.FlagSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FlagSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FlagSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prioritySum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priorityMax: jspb.Message.getFieldWithDefault(msg, 3, 0),
    needReview: (f = msg.getNeedReview()) && proto.wfo.vanalytics.v2.FlagSummary.NeedReview.toObject(includeInstance, f),
    flagsList: jspb.Message.toObjectList(msg.getFlagsList(),
    proto.wfo.vanalytics.v2.FlagSummary.Flag.toObject, includeInstance),
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
 * @return {!proto.wfo.vanalytics.v2.FlagSummary}
 */
proto.wfo.vanalytics.v2.FlagSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FlagSummary;
  return proto.wfo.vanalytics.v2.FlagSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary}
 */
proto.wfo.vanalytics.v2.FlagSummary.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.wfo.vanalytics.v2.FlagSummary.NeedReview;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FlagSummary.NeedReview.deserializeBinaryFromReader);
      msg.setNeedReview(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.FlagSummary.Flag;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FlagSummary.Flag.deserializeBinaryFromReader);
      msg.addFlags(value);
      break;
    case 6:
      var value = /** @type {!proto.wfo.vanalytics.v2.ReviewStatus} */ (reader.readEnum());
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
proto.wfo.vanalytics.v2.FlagSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FlagSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.serializeBinaryToWriter = function(message, writer) {
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
      proto.wfo.vanalytics.v2.FlagSummary.NeedReview.serializeBinaryToWriter
    );
  }
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.FlagSummary.Flag.serializeBinaryToWriter
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
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.repeatedFields_ = [4];



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
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FlagSummary.NeedReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview}
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FlagSummary.NeedReview;
  return proto.wfo.vanalytics.v2.FlagSummary.NeedReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview}
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FlagSummary.NeedReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.getPrioritySum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.setPrioritySum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 priority_max = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.getPriorityMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.setPriorityMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated int64 flag_sids = 4;
 * @return {!Array<number>}
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.getFlagSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.setFlagSidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.addFlagSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.NeedReview.prototype.clearFlagSidsList = function() {
  return this.setFlagSidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.repeatedFields_ = [5,8];



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
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FlagSummary.Flag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Flag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.wfo.vanalytics.v2.FlagSummary.Filter.toObject, includeInstance),
    mustReview: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    mustNotify: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    reviewsList: jspb.Message.toObjectList(msg.getReviewsList(),
    proto.wfo.vanalytics.v2.FlagSummary.Review.toObject, includeInstance)
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
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FlagSummary.Flag;
  return proto.wfo.vanalytics.v2.FlagSummary.Flag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Flag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.wfo.vanalytics.v2.FlagSummary.Filter;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FlagSummary.Filter.deserializeBinaryFromReader);
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
      var value = new proto.wfo.vanalytics.v2.FlagSummary.Review;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FlagSummary.Review.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FlagSummary.Flag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Flag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.serializeBinaryToWriter = function(message, writer) {
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
      proto.wfo.vanalytics.v2.FlagSummary.Filter.serializeBinaryToWriter
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
      proto.wfo.vanalytics.v2.FlagSummary.Review.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 flag_sid = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getFlagSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setFlagSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 version = 4;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Filter filters = 5;
 * @return {!Array<!proto.wfo.vanalytics.v2.FlagSummary.Filter>}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.FlagSummary.Filter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.FlagSummary.Filter, 5));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.FlagSummary.Filter>} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
*/
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Filter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.wfo.vanalytics.v2.FlagSummary.Filter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional bool must_review = 6;
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getMustReview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setMustReview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool must_notify = 7;
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getMustNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setMustNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated Review reviews = 8;
 * @return {!Array<!proto.wfo.vanalytics.v2.FlagSummary.Review>}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.getReviewsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.FlagSummary.Review>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.FlagSummary.Review, 8));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.FlagSummary.Review>} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
*/
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.setReviewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Review=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Review}
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.addReviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.wfo.vanalytics.v2.FlagSummary.Review, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Flag.prototype.clearReviewsList = function() {
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
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FlagSummary.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter}
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FlagSummary.Filter;
  return proto.wfo.vanalytics.v2.FlagSummary.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter}
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FlagSummary.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.getJoinKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.setJoinKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 flag_sid = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.getFlagSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.setFlagSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 filter_sid = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.getFilterSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.setFilterSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 version = 4;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Filter} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Filter.prototype.setName = function(value) {
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
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FlagSummary.Review.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Review} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Review}
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FlagSummary.Review;
  return proto.wfo.vanalytics.v2.FlagSummary.Review.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Review} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Review}
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FlagSummary.Review.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Review} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.getJoinKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Review} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.setJoinKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 flag_sid = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.getFlagSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Review} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.setFlagSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Review} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.Review.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 priority_sum = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.getPrioritySum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.setPrioritySum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 priority_max = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.getPriorityMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.setPriorityMax = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional NeedReview need_review = 4;
 * @return {?proto.wfo.vanalytics.v2.FlagSummary.NeedReview}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.getNeedReview = function() {
  return /** @type{?proto.wfo.vanalytics.v2.FlagSummary.NeedReview} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.FlagSummary.NeedReview, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.FlagSummary.NeedReview|undefined} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
*/
proto.wfo.vanalytics.v2.FlagSummary.prototype.setNeedReview = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.clearNeedReview = function() {
  return this.setNeedReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.hasNeedReview = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Flag flags = 5;
 * @return {!Array<!proto.wfo.vanalytics.v2.FlagSummary.Flag>}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.getFlagsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.FlagSummary.Flag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.FlagSummary.Flag, 5));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.FlagSummary.Flag>} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
*/
proto.wfo.vanalytics.v2.FlagSummary.prototype.setFlagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.FlagSummary.Flag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.FlagSummary.Flag}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.addFlags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.wfo.vanalytics.v2.FlagSummary.Flag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.clearFlagsList = function() {
  return this.setFlagsList([]);
};


/**
 * optional ReviewStatus review_status = 6;
 * @return {!proto.wfo.vanalytics.v2.ReviewStatus}
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.getReviewStatus = function() {
  return /** @type {!proto.wfo.vanalytics.v2.ReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.wfo.vanalytics.v2.ReviewStatus} value
 * @return {!proto.wfo.vanalytics.v2.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.FlagSummary.prototype.setReviewStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.Sms.repeatedFields_ = [2];



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
proto.wfo.vanalytics.v2.Sms.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Sms.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Sms} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    threadsList: jspb.Message.toObjectList(msg.getThreadsList(),
    proto.wfo.vanalytics.v2.Sms.Thread.toObject, includeInstance),
    phone: (f = msg.getPhone()) && proto.wfo.vanalytics.v2.Sms.Phone.toObject(includeInstance, f),
    callerId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Sms}
 */
proto.wfo.vanalytics.v2.Sms.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Sms;
  return proto.wfo.vanalytics.v2.Sms.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Sms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Sms}
 */
proto.wfo.vanalytics.v2.Sms.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.Sms.Thread;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Sms.Thread.deserializeBinaryFromReader);
      msg.addThreads(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.Sms.Phone;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Sms.Phone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCampaignSid(value);
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
proto.wfo.vanalytics.v2.Sms.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Sms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Sms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getThreadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.Sms.Thread.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.Sms.Phone.serializeBinaryToWriter
    );
  }
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCampaignSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
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
proto.wfo.vanalytics.v2.Sms.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Sms.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Sms.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.wfo.vanalytics.v2.Sms.Phone}
 */
proto.wfo.vanalytics.v2.Sms.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Sms.Phone;
  return proto.wfo.vanalytics.v2.Sms.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Sms.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Sms.Phone}
 */
proto.wfo.vanalytics.v2.Sms.Phone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
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
proto.wfo.vanalytics.v2.Sms.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Sms.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Sms.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string raw = 12;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Sms.Phone.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Sms.Phone} returns this
 */
proto.wfo.vanalytics.v2.Sms.Phone.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.Sms.Thread.repeatedFields_ = [2];



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
proto.wfo.vanalytics.v2.Sms.Thread.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Sms.Thread.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Sms.Thread} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.Thread.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.wfo.vanalytics.v2.Sms.Segment.toObject, includeInstance),
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
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread}
 */
proto.wfo.vanalytics.v2.Sms.Thread.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Sms.Thread;
  return proto.wfo.vanalytics.v2.Sms.Thread.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Sms.Thread} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread}
 */
proto.wfo.vanalytics.v2.Sms.Thread.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.Sms.Segment;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Sms.Segment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.wfo.vanalytics.v2.Sms.Thread.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Sms.Thread.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Sms.Thread} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.Thread.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
      proto.wfo.vanalytics.v2.Sms.Segment.serializeBinaryToWriter
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread} returns this
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Segment segments = 2;
 * @return {!Array<!proto.wfo.vanalytics.v2.Sms.Segment>}
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.Sms.Segment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.Sms.Segment, 2));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.Sms.Segment>} value
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread} returns this
*/
proto.wfo.vanalytics.v2.Sms.Thread.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.Sms.Segment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.Sms.Segment}
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.wfo.vanalytics.v2.Sms.Segment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread} returns this
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread} returns this
 */
proto.wfo.vanalytics.v2.Sms.Thread.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.wfo.vanalytics.v2.Sms.Segment.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Sms.Segment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Sms.Segment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.Segment.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: (f = msg.getOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.Sms.Segment}
 */
proto.wfo.vanalytics.v2.Sms.Segment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Sms.Segment;
  return proto.wfo.vanalytics.v2.Sms.Segment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Sms.Segment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Sms.Segment}
 */
proto.wfo.vanalytics.v2.Sms.Segment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setOffset(value);
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
proto.wfo.vanalytics.v2.Sms.Segment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Sms.Segment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Sms.Segment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Sms.Segment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Sms.Segment.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Sms.Segment} returns this
 */
proto.wfo.vanalytics.v2.Sms.Segment.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Sms.Segment.prototype.getOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Sms.Segment} returns this
*/
proto.wfo.vanalytics.v2.Sms.Segment.prototype.setOffset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Sms.Segment} returns this
 */
proto.wfo.vanalytics.v2.Sms.Segment.prototype.clearOffset = function() {
  return this.setOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Sms.Segment.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Sms.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
 */
proto.wfo.vanalytics.v2.Sms.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated Thread threads = 2;
 * @return {!Array<!proto.wfo.vanalytics.v2.Sms.Thread>}
 */
proto.wfo.vanalytics.v2.Sms.prototype.getThreadsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.Sms.Thread>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.Sms.Thread, 2));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.Sms.Thread>} value
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
*/
proto.wfo.vanalytics.v2.Sms.prototype.setThreadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.Sms.Thread=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.Sms.Thread}
 */
proto.wfo.vanalytics.v2.Sms.prototype.addThreads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.wfo.vanalytics.v2.Sms.Thread, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
 */
proto.wfo.vanalytics.v2.Sms.prototype.clearThreadsList = function() {
  return this.setThreadsList([]);
};


/**
 * optional Phone phone = 3;
 * @return {?proto.wfo.vanalytics.v2.Sms.Phone}
 */
proto.wfo.vanalytics.v2.Sms.prototype.getPhone = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Sms.Phone} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Sms.Phone, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Sms.Phone|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
*/
proto.wfo.vanalytics.v2.Sms.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
 */
proto.wfo.vanalytics.v2.Sms.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Sms.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string caller_id = 4;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Sms.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
 */
proto.wfo.vanalytics.v2.Sms.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 campaign_sid = 5;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Sms.prototype.getCampaignSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Sms} returns this
 */
proto.wfo.vanalytics.v2.Sms.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.Call.repeatedFields_ = [4,11];



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
proto.wfo.vanalytics.v2.Call.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.toObject = function(includeInstance, msg) {
  var f, obj = {
    callSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    callType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    audioTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    threadsList: jspb.Message.toObjectList(msg.getThreadsList(),
    proto.wfo.vanalytics.v2.Call.Thread.toObject, includeInstance),
    silence: (f = msg.getSilence()) && proto.wfo.vanalytics.v2.Call.Silence.toObject(includeInstance, f),
    talkOver: (f = msg.getTalkOver()) && proto.wfo.vanalytics.v2.Call.TalkOver.toObject(includeInstance, f),
    talkTime: (f = msg.getTalkTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    callerId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    groupName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    agentResponseMap: (f = msg.getAgentResponseMap()) ? f.toObject(includeInstance, proto.wfo.vanalytics.v2.Call.AgentResponse.toObject) : [],
    huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    numberFormat: jspb.Message.getFieldWithDefault(msg, 12, ""),
    agentCallLog: (f = msg.getAgentCallLog()) && wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog.toObject(includeInstance, f),
    phone: (f = msg.getPhone()) && proto.wfo.vanalytics.v2.Call.Phone.toObject(includeInstance, f),
    audioBytes: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Call}
 */
proto.wfo.vanalytics.v2.Call.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call;
  return proto.wfo.vanalytics.v2.Call.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call}
 */
proto.wfo.vanalytics.v2.Call.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAudioTime(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.Call.Thread;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.Thread.deserializeBinaryFromReader);
      msg.addThreads(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.Call.Silence;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.Silence.deserializeBinaryFromReader);
      msg.setSilence(value);
      break;
    case 6:
      var value = new proto.wfo.vanalytics.v2.Call.TalkOver;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.TalkOver.deserializeBinaryFromReader);
      msg.setTalkOver(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTalkTime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 10:
      var value = msg.getAgentResponseMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.wfo.vanalytics.v2.Call.AgentResponse.deserializeBinaryFromReader, "", new proto.wfo.vanalytics.v2.Call.AgentResponse());
         });
      break;
    case 11:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
      }
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberFormat(value);
      break;
    case 13:
      var value = new wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog;
      reader.readMessage(value,wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog.deserializeBinaryFromReader);
      msg.setAgentCallLog(value);
      break;
    case 14:
      var value = new proto.wfo.vanalytics.v2.Call.Phone;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.Phone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAudioBytes(value);
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
proto.wfo.vanalytics.v2.Call.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAudioTime();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getThreadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.Call.Thread.serializeBinaryToWriter
    );
  }
  f = message.getSilence();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.Call.Silence.serializeBinaryToWriter
    );
  }
  f = message.getTalkOver();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wfo.vanalytics.v2.Call.TalkOver.serializeBinaryToWriter
    );
  }
  f = message.getTalkTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAgentResponseMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.wfo.vanalytics.v2.Call.AgentResponse.serializeBinaryToWriter);
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      11,
      f
    );
  }
  f = message.getNumberFormat();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAgentCallLog();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.wfo.vanalytics.v2.Call.Phone.serializeBinaryToWriter
    );
  }
  f = message.getAudioBytes();
  if (f !== 0) {
    writer.writeInt64(
      16,
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
proto.wfo.vanalytics.v2.Call.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.wfo.vanalytics.v2.Call.Phone}
 */
proto.wfo.vanalytics.v2.Call.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.Phone;
  return proto.wfo.vanalytics.v2.Call.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.Phone}
 */
proto.wfo.vanalytics.v2.Call.Phone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
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
proto.wfo.vanalytics.v2.Call.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string raw = 12;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Call.Phone.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Call.Phone} returns this
 */
proto.wfo.vanalytics.v2.Call.Phone.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.Call.AgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.AgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.AgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.AgentResponse;
  return proto.wfo.vanalytics.v2.Call.AgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.AgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.Call.AgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.AgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.AgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.Call.AgentResponse.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.Call.AgentResponse.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.Call.Thread.repeatedFields_ = [2];



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
proto.wfo.vanalytics.v2.Call.Thread.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.Thread.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.Thread} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Thread.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.wfo.vanalytics.v2.Call.Segment.toObject, includeInstance),
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
 * @return {!proto.wfo.vanalytics.v2.Call.Thread}
 */
proto.wfo.vanalytics.v2.Call.Thread.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.Thread;
  return proto.wfo.vanalytics.v2.Call.Thread.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.Thread} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.Thread}
 */
proto.wfo.vanalytics.v2.Call.Thread.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.Call.Segment;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.Segment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.wfo.vanalytics.v2.Call.Thread.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.Thread.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.Thread} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Thread.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
      proto.wfo.vanalytics.v2.Call.Segment.serializeBinaryToWriter
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.Thread} returns this
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Segment segments = 2;
 * @return {!Array<!proto.wfo.vanalytics.v2.Call.Segment>}
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.Call.Segment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.Call.Segment, 2));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.Call.Segment>} value
 * @return {!proto.wfo.vanalytics.v2.Call.Thread} returns this
*/
proto.wfo.vanalytics.v2.Call.Thread.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.Call.Segment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.Call.Segment}
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.wfo.vanalytics.v2.Call.Segment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.Call.Thread} returns this
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Call.Thread} returns this
 */
proto.wfo.vanalytics.v2.Call.Thread.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.wfo.vanalytics.v2.Call.Segment.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.Segment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.Segment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Segment.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: (f = msg.getOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.Call.Segment}
 */
proto.wfo.vanalytics.v2.Call.Segment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.Segment;
  return proto.wfo.vanalytics.v2.Call.Segment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.Segment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.Segment}
 */
proto.wfo.vanalytics.v2.Call.Segment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setOffset(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.Call.Segment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.Segment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.Segment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Segment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Call.Segment} returns this
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.getOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.Segment} returns this
*/
proto.wfo.vanalytics.v2.Call.Segment.prototype.setOffset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.Segment} returns this
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.clearOffset = function() {
  return this.setOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.Segment} returns this
*/
proto.wfo.vanalytics.v2.Call.Segment.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.Segment} returns this
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.Segment.prototype.hasDuration = function() {
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
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.TalkOver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.TalkOver.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && proto.wfo.vanalytics.v2.Call.TalkOver.Duration.toObject(includeInstance, f),
    occurrence: (f = msg.getOccurrence()) && proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.toObject(includeInstance, f),
    threshold: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.TalkOver;
  return proto.wfo.vanalytics.v2.Call.TalkOver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.Call.TalkOver.Duration;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.TalkOver.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
      break;
    case 3:
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
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.TalkOver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.TalkOver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.Call.TalkOver.Duration.serializeBinaryToWriter
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.serializeBinaryToWriter
    );
  }
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
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
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.TalkOver.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: (f = msg.getTotal()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    max: (f = msg.getMax()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
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
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.TalkOver.Duration;
  return proto.wfo.vanalytics.v2.Call.TalkOver.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTotal(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.TalkOver.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
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
 * optional google.protobuf.Duration total = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.getTotal = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} returns this
*/
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.setTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.clearTotal = function() {
  return this.setTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.hasTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.getMax = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} returns this
*/
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.setMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.clearMax = function() {
  return this.setMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.hasMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 percentage = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Duration} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Duration.prototype.setPercentage = function(value) {
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
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence;
  return proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Duration duration = 1;
 * @return {?proto.wfo.vanalytics.v2.Call.TalkOver.Duration}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.getDuration = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.TalkOver.Duration} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.TalkOver.Duration, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.TalkOver.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver} returns this
*/
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.getOccurrence = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.TalkOver.Occurrence|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver} returns this
*/
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 threshold = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.Call.TalkOver.prototype.setThreshold = function(value) {
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
proto.wfo.vanalytics.v2.Call.Silence.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.Silence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.Silence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Silence.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && proto.wfo.vanalytics.v2.Call.Silence.Duration.toObject(includeInstance, f),
    occurrence: (f = msg.getOccurrence()) && proto.wfo.vanalytics.v2.Call.Silence.Occurrence.toObject(includeInstance, f),
    threshold: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Call.Silence}
 */
proto.wfo.vanalytics.v2.Call.Silence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.Silence;
  return proto.wfo.vanalytics.v2.Call.Silence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.Silence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence}
 */
proto.wfo.vanalytics.v2.Call.Silence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.Call.Silence.Duration;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.Silence.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.Call.Silence.Occurrence;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Call.Silence.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
      break;
    case 3:
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
proto.wfo.vanalytics.v2.Call.Silence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.Silence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.Silence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Silence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.Call.Silence.Duration.serializeBinaryToWriter
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.Call.Silence.Occurrence.serializeBinaryToWriter
    );
  }
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
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
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.Silence.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.Silence.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: (f = msg.getTotal()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    max: (f = msg.getMax()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
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
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.Silence.Duration;
  return proto.wfo.vanalytics.v2.Call.Silence.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.Silence.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTotal(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.Silence.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.Silence.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
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
 * optional google.protobuf.Duration total = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.getTotal = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration} returns this
*/
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.setTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.clearTotal = function() {
  return this.setTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.hasTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.getMax = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration} returns this
*/
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.setMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.clearMax = function() {
  return this.setMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.hasMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 percentage = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Duration} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.Duration.prototype.setPercentage = function(value) {
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
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Call.Silence.Occurrence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Call.Silence.Occurrence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Occurrence}
 */
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Call.Silence.Occurrence;
  return proto.wfo.vanalytics.v2.Call.Silence.Occurrence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Call.Silence.Occurrence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Occurrence}
 */
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Call.Silence.Occurrence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Call.Silence.Occurrence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence.Occurrence} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.Occurrence.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Duration duration = 1;
 * @return {?proto.wfo.vanalytics.v2.Call.Silence.Duration}
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.getDuration = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.Silence.Duration} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.Silence.Duration, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.Silence.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence} returns this
*/
proto.wfo.vanalytics.v2.Call.Silence.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.wfo.vanalytics.v2.Call.Silence.Occurrence}
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.getOccurrence = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.Silence.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.Silence.Occurrence, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.Silence.Occurrence|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence} returns this
*/
proto.wfo.vanalytics.v2.Call.Silence.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 threshold = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.Call.Silence.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 call_sid = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 2;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.wfo.vanalytics.v2.Call.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 audio_time = 3;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.prototype.getAudioTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setAudioTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Thread threads = 4;
 * @return {!Array<!proto.wfo.vanalytics.v2.Call.Thread>}
 */
proto.wfo.vanalytics.v2.Call.prototype.getThreadsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.Call.Thread>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.Call.Thread, 4));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.Call.Thread>} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
*/
proto.wfo.vanalytics.v2.Call.prototype.setThreadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.Call.Thread=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.Call.Thread}
 */
proto.wfo.vanalytics.v2.Call.prototype.addThreads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.wfo.vanalytics.v2.Call.Thread, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearThreadsList = function() {
  return this.setThreadsList([]);
};


/**
 * optional Silence silence = 5;
 * @return {?proto.wfo.vanalytics.v2.Call.Silence}
 */
proto.wfo.vanalytics.v2.Call.prototype.getSilence = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.Silence} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.Silence, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.Silence|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
*/
proto.wfo.vanalytics.v2.Call.prototype.setSilence = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearSilence = function() {
  return this.setSilence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.prototype.hasSilence = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TalkOver talk_over = 6;
 * @return {?proto.wfo.vanalytics.v2.Call.TalkOver}
 */
proto.wfo.vanalytics.v2.Call.prototype.getTalkOver = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.TalkOver} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.TalkOver, 6));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.TalkOver|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
*/
proto.wfo.vanalytics.v2.Call.prototype.setTalkOver = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearTalkOver = function() {
  return this.setTalkOver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.prototype.hasTalkOver = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration talk_time = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.Call.prototype.getTalkTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
*/
proto.wfo.vanalytics.v2.Call.prototype.setTalkTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearTalkTime = function() {
  return this.setTalkTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.prototype.hasTalkTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string caller_id = 8;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Call.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string group_name = 9;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Call.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, AgentResponse> agent_response = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.wfo.vanalytics.v2.Call.AgentResponse>}
 */
proto.wfo.vanalytics.v2.Call.prototype.getAgentResponseMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.wfo.vanalytics.v2.Call.AgentResponse>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.wfo.vanalytics.v2.Call.AgentResponse));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearAgentResponseMap = function() {
  this.getAgentResponseMap().clear();
  return this;
};


/**
 * repeated int64 hunt_group_sids = 11;
 * @return {!Array<number>}
 */
proto.wfo.vanalytics.v2.Call.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};


/**
 * optional string number_format = 12;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Call.prototype.getNumberFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setNumberFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional AgentCallLog agent_call_log = 13;
 * @return {?proto.wfo.vanalytics.v2.AgentCallLog}
 */
proto.wfo.vanalytics.v2.Call.prototype.getAgentCallLog = function() {
  return /** @type{?proto.wfo.vanalytics.v2.AgentCallLog} */ (
    jspb.Message.getWrapperField(this, wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog, 13));
};


/**
 * @param {?proto.wfo.vanalytics.v2.AgentCallLog|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
*/
proto.wfo.vanalytics.v2.Call.prototype.setAgentCallLog = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearAgentCallLog = function() {
  return this.setAgentCallLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.prototype.hasAgentCallLog = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Phone phone = 14;
 * @return {?proto.wfo.vanalytics.v2.Call.Phone}
 */
proto.wfo.vanalytics.v2.Call.prototype.getPhone = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Call.Phone} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Call.Phone, 14));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Call.Phone|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
*/
proto.wfo.vanalytics.v2.Call.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Call.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int64 audio_bytes = 16;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Call.prototype.getAudioBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Call} returns this
 */
proto.wfo.vanalytics.v2.Call.prototype.setAudioBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
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
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SearchTranscriptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    orderBy: jspb.Message.getFieldWithDefault(msg, 3, ""),
    readMask: (f = msg.getReadMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    boolQuery: (f = msg.getBoolQuery()) && proto.wfo.vanalytics.v2.TranscriptBoolQuery.toObject(includeInstance, f),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    highlight: (f = msg.getHighlight()) && proto.wfo.vanalytics.v2.Highlight.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SearchTranscriptsRequest;
  return proto.wfo.vanalytics.v2.SearchTranscriptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setReadMask(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.TranscriptBoolQuery;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptBoolQuery.deserializeBinaryFromReader);
      msg.setBoolQuery(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 7:
      var value = new proto.wfo.vanalytics.v2.Highlight;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Highlight.deserializeBinaryFromReader);
      msg.setHighlight(value);
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
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SearchTranscriptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReadMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getBoolQuery();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.TranscriptBoolQuery.serializeBinaryToWriter
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHighlight();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wfo.vanalytics.v2.Highlight.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string order_by = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask read_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.getReadMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
*/
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.setReadMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.clearReadMask = function() {
  return this.setReadMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.hasReadMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TranscriptBoolQuery bool_query = 5;
 * @return {?proto.wfo.vanalytics.v2.TranscriptBoolQuery}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.getBoolQuery = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptBoolQuery} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptBoolQuery, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptBoolQuery|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
*/
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.setBoolQuery = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.clearBoolQuery = function() {
  return this.setBoolQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.hasBoolQuery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Highlight highlight = 7;
 * @return {?proto.wfo.vanalytics.v2.Highlight}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.getHighlight = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Highlight} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Highlight, 7));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Highlight|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
*/
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.setHighlight = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.clearHighlight = function() {
  return this.setHighlight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsRequest.prototype.hasHighlight = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.wfo.vanalytics.v2.Highlight.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Highlight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Highlight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Highlight.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    suffix: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.wfo.vanalytics.v2.Highlight}
 */
proto.wfo.vanalytics.v2.Highlight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Highlight;
  return proto.wfo.vanalytics.v2.Highlight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Highlight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Highlight}
 */
proto.wfo.vanalytics.v2.Highlight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuffix(value);
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
proto.wfo.vanalytics.v2.Highlight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Highlight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Highlight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Highlight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuffix();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Highlight.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Highlight} returns this
 */
proto.wfo.vanalytics.v2.Highlight.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string suffix = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Highlight.prototype.getSuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Highlight} returns this
 */
proto.wfo.vanalytics.v2.Highlight.prototype.setSuffix = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SearchTranscriptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hitsList: jspb.Message.toObjectList(msg.getHitsList(),
    proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SearchTranscriptsResponse;
  return proto.wfo.vanalytics.v2.SearchTranscriptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit;
      reader.readMessage(value,proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.deserializeBinaryFromReader);
      msg.addHits(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SearchTranscriptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
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
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcript: (f = msg.getTranscript()) && proto.wfo.vanalytics.v2.Transcript.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit;
  return proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.Transcript;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Transcript.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscript();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.Transcript.serializeBinaryToWriter
    );
  }
};


/**
 * optional Transcript transcript = 1;
 * @return {?proto.wfo.vanalytics.v2.Transcript}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.prototype.getTranscript = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Transcript} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Transcript, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Transcript|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit} returns this
*/
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.prototype.setTranscript = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.prototype.clearTranscript = function() {
  return this.setTranscript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit.prototype.hasTranscript = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Hit hits = 1;
 * @return {!Array<!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit>}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.getHitsList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit, 1));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit>} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse} returns this
*/
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.setHitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.addHits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wfo.vanalytics.v2.SearchTranscriptsResponse.Hit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.clearHitsList = function() {
  return this.setHitsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.SearchTranscriptsResponse} returns this
 */
proto.wfo.vanalytics.v2.SearchTranscriptsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.wfo.vanalytics.v2.TranscriptBoolQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptBoolQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptBoolQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcript: (f = msg.getTranscript()) && proto.wfo.vanalytics.v2.TranscriptQuery.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptBoolQuery}
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptBoolQuery;
  return proto.wfo.vanalytics.v2.TranscriptBoolQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptBoolQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptBoolQuery}
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptBoolQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptBoolQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptBoolQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscript();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional TranscriptQuery transcript = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery}
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.prototype.getTranscript = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptBoolQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptBoolQuery.prototype.setTranscript = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptBoolQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.prototype.clearTranscript = function() {
  return this.setTranscript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptBoolQuery.prototype.hasTranscript = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSid: (f = msg.getTranscriptSid()) && proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.toObject(includeInstance, f),
    channel: (f = msg.getChannel()) && proto.wfo.vanalytics.v2.TranscriptQuery.Channel.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.toObject(includeInstance, f),
    threads: (f = msg.getThreads()) && proto.wfo.vanalytics.v2.TranscriptQuery.Threads.toObject(includeInstance, f),
    flagSummary: (f = msg.getFlagSummary()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.toObject(includeInstance, f),
    startTime: (f = msg.getStartTime()) && proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.toObject(includeInstance, f),
    deleteTime: (f = msg.getDeleteTime()) && proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.toObject(includeInstance, f),
    phone: (f = msg.getPhone()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery;
  return proto.wfo.vanalytics.v2.TranscriptQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.deserializeBinaryFromReader);
      msg.setTranscriptSid(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Channel;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Channel.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Metadata;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.deserializeBinaryFromReader);
      msg.setThreads(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.deserializeBinaryFromReader);
      msg.setFlagSummary(value);
      break;
    case 6:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.StartTime;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 7:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 8:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Channel.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getThreads();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.serializeBinaryToWriter
    );
  }
  f = message.getFlagSummary();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.serializeBinaryToWriter
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.serializeBinaryToWriter
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
    cc: (f = msg.getCc()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.toObject(includeInstance, f),
    ndc: (f = msg.getNdc()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.toObject(includeInstance, f),
    prefix: (f = msg.getPrefix()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.toObject(includeInstance, f),
    city: (f = msg.getCity()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.toObject(includeInstance, f),
    iso2: (f = msg.getIso2()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.toObject(includeInstance, f),
    regionCode: (f = msg.getRegionCode()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.toObject(includeInstance, f),
    regionName: (f = msg.getRegionName()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.toObject(includeInstance, f),
    timeZone: (f = msg.getTimeZone()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.toObject(includeInstance, f),
    type: (f = msg.getType()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.toObject(includeInstance, f),
    utc: (f = msg.getUtc()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.toObject(includeInstance, f),
    raw: (f = msg.getRaw()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.deserializeBinaryFromReader);
      msg.setCc(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.deserializeBinaryFromReader);
      msg.setNdc(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.deserializeBinaryFromReader);
      msg.setPrefix(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.deserializeBinaryFromReader);
      msg.setCity(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.deserializeBinaryFromReader);
      msg.setIso2(value);
      break;
    case 6:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.deserializeBinaryFromReader);
      msg.setRegionCode(value);
      break;
    case 7:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.deserializeBinaryFromReader);
      msg.setRegionName(value);
      break;
    case 8:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.deserializeBinaryFromReader);
      msg.setTimeZone(value);
      break;
    case 9:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 10:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.deserializeBinaryFromReader);
      msg.setUtc(value);
      break;
    case 11:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 12:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.deserializeBinaryFromReader);
      msg.setRaw(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.serializeBinaryToWriter
    );
  }
  f = message.getNdc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.serializeBinaryToWriter
    );
  }
  f = message.getPrefix();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.serializeBinaryToWriter
    );
  }
  f = message.getCity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.serializeBinaryToWriter
    );
  }
  f = message.getIso2();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.serializeBinaryToWriter
    );
  }
  f = message.getRegionCode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.serializeBinaryToWriter
    );
  }
  f = message.getRegionName();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.serializeBinaryToWriter
    );
  }
  f = message.getTimeZone();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.serializeBinaryToWriter
    );
  }
  f = message.getUtc();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.serializeBinaryToWriter
    );
  }
  f = message.getRaw();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.toObject = function(includeInstance, msg) {
  var f, obj = {
    anyList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float any = 1;
 * @return {!Array<number>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc.prototype.clearAnyList = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipCodeProximity: (f = msg.getZipCodeProximity()) && proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipCodeProximity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.serializeBinaryToWriter
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zip_code = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string distance = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.getDistance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity.prototype.setDistance = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ZipCodeProximity zip_code_proximity = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.prototype.getZipCodeProximity = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.ZipCodeProximity|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.prototype.setZipCodeProximity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.prototype.clearZipCodeProximity = function() {
  return this.setZipCodeProximity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location.prototype.hasZipCodeProximity = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * optional Cc cc = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getCc = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Cc|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setCc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearCc = function() {
  return this.setCc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasCc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ndc ndc = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getNdc = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Ndc|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setNdc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearNdc = function() {
  return this.setNdc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasNdc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Prefix prefix = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getPrefix = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Prefix|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setPrefix = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearPrefix = function() {
  return this.setPrefix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasPrefix = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional City city = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getCity = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.City|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setCity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearCity = function() {
  return this.setCity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasCity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Iso2 iso2 = 5;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getIso2 = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Iso2|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setIso2 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearIso2 = function() {
  return this.setIso2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasIso2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RegionCode region_code = 6;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getRegionCode = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode, 6));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionCode|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setRegionCode = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearRegionCode = function() {
  return this.setRegionCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasRegionCode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RegionName region_name = 7;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getRegionName = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName, 7));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.RegionName|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setRegionName = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearRegionName = function() {
  return this.setRegionName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasRegionName = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TimeZone time_zone = 8;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getTimeZone = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone, 8));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.TimeZone|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setTimeZone = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearTimeZone = function() {
  return this.setTimeZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasTimeZone = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Type type = 9;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getType = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type, 9));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Type|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Utc utc = 10;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getUtc = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc, 10));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Utc|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setUtc = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearUtc = function() {
  return this.setUtc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasUtc = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Location location = 11;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getLocation = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location, 11));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Location|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Raw raw = 12;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.getRaw = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw, 12));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone.Raw|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.setRaw = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Phone} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.clearRaw = function() {
  return this.setRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Phone.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid;
  return proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Channel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Channel;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Channel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.wfo.vanalytics.v2.Channel>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Channel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.serializeBinaryToWriter = function(message, writer) {
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
 * repeated Channel any = 1;
 * @return {!Array<!proto.wfo.vanalytics.v2.Channel>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.prototype.getAnyList = function() {
  return /** @type {!Array<!proto.wfo.vanalytics.v2.Channel>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.Channel>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.wfo.vanalytics.v2.Channel} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Channel} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Channel.prototype.clearAnyList = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    call: (f = msg.getCall()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.wfo.vanalytics.v2.TranscriptQuery.Sms.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Metadata;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Sms;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Sms.deserializeBinaryFromReader);
      msg.setSms(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Sms.serializeBinaryToWriter
    );
  }
};


/**
 * optional Call call = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.getCall = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.setCall = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.hasCall = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Sms sms = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Sms}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.getSms = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Sms} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Sms, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Sms|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.setSms = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Metadata.prototype.hasSms = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.toObject = function(includeInstance, msg) {
  var f, obj = {
    callSid: (f = msg.getCallSid()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.toObject(includeInstance, f),
    audioTime: (f = msg.getAudioTime()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.toObject(includeInstance, f),
    callType: (f = msg.getCallType()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.toObject(includeInstance, f),
    silence: (f = msg.getSilence()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.toObject(includeInstance, f),
    talkOver: (f = msg.getTalkOver()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.toObject(includeInstance, f),
    talkTime: (f = msg.getTalkTime()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.toObject(includeInstance, f),
    callerId: (f = msg.getCallerId()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.toObject(includeInstance, f),
    groupName: (f = msg.getGroupName()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.toObject(includeInstance, f),
    agentResponse: (f = msg.getAgentResponse()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.toObject(includeInstance, f),
    huntGroupSids: (f = msg.getHuntGroupSids()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.toObject(includeInstance, f),
    agentCallLog: (f = msg.getAgentCallLog()) && wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.deserializeBinaryFromReader);
      msg.setCallSid(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.deserializeBinaryFromReader);
      msg.setAudioTime(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.deserializeBinaryFromReader);
      msg.setCallType(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.deserializeBinaryFromReader);
      msg.setSilence(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.deserializeBinaryFromReader);
      msg.setTalkOver(value);
      break;
    case 6:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.deserializeBinaryFromReader);
      msg.setTalkTime(value);
      break;
    case 7:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.deserializeBinaryFromReader);
      msg.setCallerId(value);
      break;
    case 8:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.deserializeBinaryFromReader);
      msg.setGroupName(value);
      break;
    case 9:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.deserializeBinaryFromReader);
      msg.setAgentResponse(value);
      break;
    case 10:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.deserializeBinaryFromReader);
      msg.setHuntGroupSids(value);
      break;
    case 12:
      var value = new wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery;
      reader.readMessage(value,wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery.deserializeBinaryFromReader);
      msg.setAgentCallLog(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.serializeBinaryToWriter
    );
  }
  f = message.getAudioTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.serializeBinaryToWriter
    );
  }
  f = message.getCallType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.serializeBinaryToWriter
    );
  }
  f = message.getSilence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.serializeBinaryToWriter
    );
  }
  f = message.getTalkOver();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.serializeBinaryToWriter
    );
  }
  f = message.getTalkTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.serializeBinaryToWriter
    );
  }
  f = message.getCallerId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.serializeBinaryToWriter
    );
  }
  f = message.getGroupName();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.serializeBinaryToWriter
    );
  }
  f = message.getAgentResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.serializeBinaryToWriter
    );
  }
  f = message.getHuntGroupSids();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.serializeBinaryToWriter
    );
  }
  f = message.getAgentCallLog();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.repeatedFields_ = [1,2];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    andList: jspb.Message.toObjectList(msg.getAndList(),
    proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.toObject, includeInstance),
    orList: jspb.Message.toObjectList(msg.getOrList(),
    proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.toObject, includeInstance),
    not: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    key: (f = msg.getKey()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.toObject(includeInstance, f),
    values: (f = msg.getValues()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.toObject(includeInstance, f),
    numbers: (f = msg.getNumbers()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.deserializeBinaryFromReader);
      msg.addAnd(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.deserializeBinaryFromReader);
      msg.addOr(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNot(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.deserializeBinaryFromReader);
      msg.setValues(value);
      break;
    case 6:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAndList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.serializeBinaryToWriter
    );
  }
  f = message.getOrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.serializeBinaryToWriter
    );
  }
  f = message.getNot();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.serializeBinaryToWriter
    );
  }
  f = message.getValues();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.serializeBinaryToWriter
    );
  }
  f = message.getNumbers();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.clearInList = function() {
  return this.setInList([]);
};


/**
 * optional string starts_with = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.getStartsWith = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.setStartsWith = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contains = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.getContains = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values.prototype.setContains = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.getInList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.clearInList = function() {
  return this.setInList([]);
};


/**
 * optional google.protobuf.DoubleValue gte = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.hasGte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue lte = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.hasLte = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue gt = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.hasGt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue lt = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.hasLt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue eq = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.getEq = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.setEq = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.clearEq = function() {
  return this.setEq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers.prototype.hasEq = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.getInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.setInList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.addIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.clearInList = function() {
  return this.setInList([]);
};


/**
 * optional string starts_with = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.getStartsWith = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.setStartsWith = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contains = 3;
 * @return {string}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.getContains = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key.prototype.setContains = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated AgentResponse and = 1;
 * @return {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.getAndList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse, 1));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.setAndList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.addAnd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.clearAndList = function() {
  return this.setAndList([]);
};


/**
 * repeated AgentResponse or = 2;
 * @return {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.getOrList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse, 2));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.setOrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.addOr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.clearOrList = function() {
  return this.setOrList([]);
};


/**
 * optional bool not = 3;
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.getNot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.setNot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Key key = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.getKey = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Key|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.hasKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Values values = 5;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.getValues = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Values|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.setValues = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.clearValues = function() {
  return this.setValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.hasValues = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Numbers numbers = 6;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.getNumbers = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers, 6));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.Numbers|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.setNumbers = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.clearNumbers = function() {
  return this.setNumbers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse.prototype.hasNumbers = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.CallType.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.serializeBinaryToWriter = function(message, writer) {
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
 * repeated api.commons.CallType.Enum any = 1;
 * @return {!Array<!proto.api.commons.CallType.Enum>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.prototype.getAnyList = function() {
  return /** @type {!Array<!proto.api.commons.CallType.Enum>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.CallType.Enum>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId.prototype.clearAnyList = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value lte = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value gt = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value lt = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration gte = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration lte = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration gt = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration lt = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.toObject = function(includeInstance, msg) {
  var f, obj = {
    durationTotal: (f = msg.getDurationTotal()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.toObject(includeInstance, f),
    durationMax: (f = msg.getDurationMax()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.toObject(includeInstance, f),
    occurrenceTotal: (f = msg.getOccurrenceTotal()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.toObject(includeInstance, f),
    durationPercentage: (f = msg.getDurationPercentage()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.deserializeBinaryFromReader);
      msg.setDurationTotal(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.deserializeBinaryFromReader);
      msg.setDurationMax(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.deserializeBinaryFromReader);
      msg.setOccurrenceTotal(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDurationTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.serializeBinaryToWriter
    );
  }
  f = message.getDurationMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.serializeBinaryToWriter
    );
  }
  f = message.getOccurrenceTotal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.serializeBinaryToWriter
    );
  }
  f = message.getDurationPercentage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.serializeBinaryToWriter
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration gte = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration lte = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration gt = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration lt = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration gte = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration lte = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration gt = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration lt = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value gte = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt32Value lte = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value gt = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.UInt32Value lt = 4;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 4));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value gte = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt32Value lte = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value gt = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.UInt32Value lt = 4;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 4));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DurationTotal duration_total = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.getDurationTotal = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationTotal|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.setDurationTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.clearDurationTotal = function() {
  return this.setDurationTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.hasDurationTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DurationMax duration_max = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.getDurationMax = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationMax|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.setDurationMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.clearDurationMax = function() {
  return this.setDurationMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.hasDurationMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OccurrenceTotal occurrence_total = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.getOccurrenceTotal = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.OccurrenceTotal|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.setOccurrenceTotal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.clearOccurrenceTotal = function() {
  return this.setOccurrenceTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.hasOccurrenceTotal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DurationPercentage duration_percentage = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.getDurationPercentage = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.DurationPercentage|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.setDurationPercentage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.clearDurationPercentage = function() {
  return this.setDurationPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver.prototype.hasDurationPercentage = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.toObject = function(includeInstance, msg) {
  var f, obj = {
    durationTotal: (f = msg.getDurationTotal()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.toObject(includeInstance, f),
    durationMax: (f = msg.getDurationMax()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.toObject(includeInstance, f),
    occurrenceTotal: (f = msg.getOccurrenceTotal()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.toObject(includeInstance, f),
    durationPercentage: (f = msg.getDurationPercentage()) && proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.deserializeBinaryFromReader);
      msg.setDurationTotal(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.deserializeBinaryFromReader);
      msg.setDurationMax(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.deserializeBinaryFromReader);
      msg.setOccurrenceTotal(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDurationTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.serializeBinaryToWriter
    );
  }
  f = message.getDurationMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.serializeBinaryToWriter
    );
  }
  f = message.getOccurrenceTotal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.serializeBinaryToWriter
    );
  }
  f = message.getDurationPercentage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.serializeBinaryToWriter
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration gte = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration lte = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration gt = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration lt = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration gte = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration lte = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration gt = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration lt = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value gte = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt32Value lte = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value gt = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.UInt32Value lt = 4;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 4));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal.prototype.hasLt = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value gte = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt32Value lte = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value gt = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.UInt32Value lt = 4;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 4));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DurationTotal duration_total = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.getDurationTotal = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationTotal|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.setDurationTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.clearDurationTotal = function() {
  return this.setDurationTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.hasDurationTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DurationMax duration_max = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.getDurationMax = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationMax|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.setDurationMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.clearDurationMax = function() {
  return this.setDurationMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.hasDurationMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OccurrenceTotal occurrence_total = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.getOccurrenceTotal = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.OccurrenceTotal|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.setOccurrenceTotal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.clearOccurrenceTotal = function() {
  return this.setOccurrenceTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.hasOccurrenceTotal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DurationPercentage duration_percentage = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.getDurationPercentage = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.DurationPercentage|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.setDurationPercentage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.clearDurationPercentage = function() {
  return this.setDurationPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence.prototype.hasDurationPercentage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CallSid call_sid = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getCallSid = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallSid|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setCallSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearCallSid = function() {
  return this.setCallSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasCallSid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioTime audio_time = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getAudioTime = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AudioTime|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setAudioTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearAudioTime = function() {
  return this.setAudioTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasAudioTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CallType call_type = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getCallType = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallType|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setCallType = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearCallType = function() {
  return this.setCallType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasCallType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Silence silence = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getSilence = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.Silence|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setSilence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearSilence = function() {
  return this.setSilence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasSilence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TalkOver talk_over = 5;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getTalkOver = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkOver|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setTalkOver = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearTalkOver = function() {
  return this.setTalkOver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasTalkOver = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TalkTime talk_time = 6;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getTalkTime = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime, 6));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.TalkTime|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setTalkTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearTalkTime = function() {
  return this.setTalkTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasTalkTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CallerId caller_id = 7;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getCallerId = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId, 7));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.CallerId|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setCallerId = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearCallerId = function() {
  return this.setCallerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasCallerId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GroupName group_name = 8;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getGroupName = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName, 8));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.GroupName|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setGroupName = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearGroupName = function() {
  return this.setGroupName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasGroupName = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AgentResponse agent_response = 9;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getAgentResponse = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse, 9));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.AgentResponse|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setAgentResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearAgentResponse = function() {
  return this.setAgentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasAgentResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional HuntGroupSids hunt_group_sids = 10;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getHuntGroupSids = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids, 10));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Call.HuntGroupSids|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setHuntGroupSids = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearHuntGroupSids = function() {
  return this.setHuntGroupSids(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasHuntGroupSids = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AgentCallLogQuery agent_call_log = 12;
 * @return {?proto.wfo.vanalytics.v2.AgentCallLogQuery}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.getAgentCallLog = function() {
  return /** @type{?proto.wfo.vanalytics.v2.AgentCallLogQuery} */ (
    jspb.Message.getWrapperField(this, wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery, 12));
};


/**
 * @param {?proto.wfo.vanalytics.v2.AgentCallLogQuery|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.setAgentCallLog = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Call} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.clearAgentCallLog = function() {
  return this.setAgentCallLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Call.prototype.hasAgentCallLog = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Sms.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: (f = msg.getConversationSid()) && proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Sms;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Sms.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.deserializeBinaryFromReader);
      msg.setConversationSid(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Sms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<string>} */ (reader.isDelimited() ? reader.readPackedInt64String() : [reader.readInt64String()]);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedInt64String(
      1,
      f
    );
  }
};


/**
 * repeated int64 any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * optional ConversationSid conversation_sid = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.prototype.getConversationSid = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Sms.ConversationSid|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.prototype.setConversationSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Sms} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.prototype.clearConversationSid = function() {
  return this.setConversationSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Sms.prototype.hasConversationSid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.repeatedFields_ = [1,2];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.toObject = function(includeInstance, msg) {
  var f, obj = {
    andList: jspb.Message.toObjectList(msg.getAndList(),
    proto.wfo.vanalytics.v2.TranscriptQuery.Threads.toObject, includeInstance),
    orList: jspb.Message.toObjectList(msg.getOrList(),
    proto.wfo.vanalytics.v2.TranscriptQuery.Threads.toObject, includeInstance),
    id: (f = msg.getId()) && proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.toObject(includeInstance, f),
    userId: (f = msg.getUserId()) && proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.deserializeBinaryFromReader);
      msg.addAnd(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.deserializeBinaryFromReader);
      msg.addOr(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 6:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAndList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.serializeBinaryToWriter
    );
  }
  f = message.getOrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string any = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.prototype.getAnyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnyList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 any = 1;
 * @return {!Array<number>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id.prototype.clearAnyList = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
    match: (f = msg.getMatch()) && proto.wfo.vanalytics.v2.Match.toObject(includeInstance, f),
    spanNear: (f = msg.getSpanNear()) && proto.wfo.vanalytics.v2.SpanNear.toObject(includeInstance, f),
    timespan: (f = msg.getTimespan()) && proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.toObject(includeInstance, f),
    not: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.Match;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Match.deserializeBinaryFromReader);
      msg.setMatch(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.SpanNear;
      reader.readMessage(value,proto.wfo.vanalytics.v2.SpanNear.deserializeBinaryFromReader);
      msg.setSpanNear(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.deserializeBinaryFromReader);
      msg.setTimespan(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNot(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.Match.serializeBinaryToWriter
    );
  }
  f = message.getSpanNear();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.SpanNear.serializeBinaryToWriter
    );
  }
  f = message.getTimespan();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.serializeBinaryToWriter
    );
  }
  f = message.getNot();
  if (f) {
    writer.writeBool(
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.toObject = function(includeInstance, msg) {
  var f, obj = {
    head: (f = msg.getHead()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    tail: (f = msg.getTail()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan;
  return proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setHead(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTail(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration head = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.getHead = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.setHead = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.clearHead = function() {
  return this.setHead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.hasHead = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration tail = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.getTail = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.setTail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.clearTail = function() {
  return this.setTail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan.prototype.hasTail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Match match = 1;
 * @return {?proto.wfo.vanalytics.v2.Match}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.getMatch = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Match} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Match, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Match|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.setMatch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.clearMatch = function() {
  return this.setMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.hasMatch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SpanNear span_near = 2;
 * @return {?proto.wfo.vanalytics.v2.SpanNear}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.getSpanNear = function() {
  return /** @type{?proto.wfo.vanalytics.v2.SpanNear} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.SpanNear, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.SpanNear|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.setSpanNear = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.clearSpanNear = function() {
  return this.setSpanNear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.hasSpanNear = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Timespan timespan = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.getTimespan = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.Timespan|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.setTimespan = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.clearTimespan = function() {
  return this.setTimespan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.hasTimespan = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool not = 4;
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.getNot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text.prototype.setNot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Threads and = 1;
 * @return {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Threads>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.getAndList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Threads>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads, 1));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Threads>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.setAndList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.addAnd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wfo.vanalytics.v2.TranscriptQuery.Threads, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.clearAndList = function() {
  return this.setAndList([]);
};


/**
 * repeated Threads or = 2;
 * @return {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Threads>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.getOrList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Threads>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads, 2));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.TranscriptQuery.Threads>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.setOrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.addOr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.wfo.vanalytics.v2.TranscriptQuery.Threads, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.clearOrList = function() {
  return this.setOrList([]);
};


/**
 * optional Id id = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.getId = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Id|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.hasId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Text text = 5;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.getText = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.Text|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UserId user_id = 6;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.getUserId = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId, 6));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads.UserId|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.setUserId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.Threads} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.Threads.prototype.hasUserId = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    needReview: (f = msg.getNeedReview()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.toObject(includeInstance, f),
    reviewStatus: (f = msg.getReviewStatus()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.toObject(includeInstance, f),
    flags: (f = msg.getFlags()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.toObject(includeInstance, f),
    count: (f = msg.getCount()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.deserializeBinaryFromReader);
      msg.setNeedReview(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.deserializeBinaryFromReader);
      msg.setReviewStatus(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.deserializeBinaryFromReader);
      msg.setFlags(value);
      break;
    case 4:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.serializeBinaryToWriter
    );
  }
  f = message.getReviewStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.serializeBinaryToWriter
    );
  }
  f = message.getFlags();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.serializeBinaryToWriter
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagSids: (f = msg.getFlagSids()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagSids();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * optional FlagSids flag_sids = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.prototype.getFlagSids = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.FlagSids|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.prototype.setFlagSids = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.prototype.clearFlagSids = function() {
  return this.setFlagSids(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview.prototype.hasFlagSids = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.wfo.vanalytics.v2.ReviewStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.serializeBinaryToWriter = function(message, writer) {
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
 * repeated ReviewStatus any = 1;
 * @return {!Array<!proto.wfo.vanalytics.v2.ReviewStatus>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.prototype.getAnyList = function() {
  return /** @type {!Array<!proto.wfo.vanalytics.v2.ReviewStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.ReviewStatus>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.wfo.vanalytics.v2.ReviewStatus} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus.prototype.clearAnyList = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagSid: (f = msg.getFlagSid()) && proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.repeatedFields_ = [1,2];



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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.getAnyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.setAnyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.addAny = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.clearAnyList = function() {
  return this.setAnyList([]);
};


/**
 * repeated int64 all = 2;
 * @return {!Array<number>}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.getAllList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.setAllList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.addAll = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid.prototype.clearAllList = function() {
  return this.setAllList([]);
};


/**
 * optional FlagSid flag_sid = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.prototype.getFlagSid = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.FlagSid|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.prototype.setFlagSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.prototype.clearFlagSid = function() {
  return this.setFlagSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags.prototype.hasFlagSid = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count;
  return proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value lte = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value gt = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value lt = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int32Value eq = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.getEq = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.setEq = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.clearEq = function() {
  return this.setEq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count.prototype.hasEq = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NeedReview need_review = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.getNeedReview = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.NeedReview|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.setNeedReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.clearNeedReview = function() {
  return this.setNeedReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.hasNeedReview = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReviewStatus review_status = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.getReviewStatus = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.ReviewStatus|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.setReviewStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.clearReviewStatus = function() {
  return this.setReviewStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.hasReviewStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Flags flags = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.getFlags = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Flags|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.setFlags = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.clearFlags = function() {
  return this.setFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.hasFlags = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Count count = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.getCount = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.Count|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.setCount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.clearCount = function() {
  return this.setCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary.prototype.hasCount = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    moment: (f = msg.getMoment()) && proto.wfo.vanalytics.v2.Moment.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.StartTime;
  return proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLt(value);
      break;
    case 5:
      var value = new proto.wfo.vanalytics.v2.Moment;
      reader.readMessage(value,proto.wfo.vanalytics.v2.Moment.deserializeBinaryFromReader);
      msg.setMoment(value);
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
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMoment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.wfo.vanalytics.v2.Moment.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp gte = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp lte = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp gt = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp lt = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Moment moment = 5;
 * @return {?proto.wfo.vanalytics.v2.Moment}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.getMoment = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Moment} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.Moment, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Moment|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.setMoment = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.clearMoment = function() {
  return this.setMoment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.StartTime.prototype.hasMoment = function() {
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
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    gte: (f = msg.getGte()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lte: (f = msg.getLte()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    gt: (f = msg.getGt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lt: (f = msg.getLt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime;
  return proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGte(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLte(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGte();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLte();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp gte = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.getGte = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.setGte = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.clearGte = function() {
  return this.setGte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.hasGte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp lte = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.getLte = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.setLte = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.clearLte = function() {
  return this.setLte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.hasLte = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp gt = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.getGt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.setGt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.clearGt = function() {
  return this.setGt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.hasGt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp lt = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.getLt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.setLt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.clearLt = function() {
  return this.setLt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime.prototype.hasLt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TranscriptSid transcript_sid = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getTranscriptSid = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.TranscriptSid|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearTranscriptSid = function() {
  return this.setTranscriptSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasTranscriptSid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Channel channel = 2;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Channel}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getChannel = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Channel} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Channel, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Channel|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Metadata}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getMetadata = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Metadata, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Metadata|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Threads threads = 4;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getThreads = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Threads} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Threads, 4));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Threads|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setThreads = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearThreads = function() {
  return this.setThreads(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasThreads = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FlagSummary flag_summary = 5;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getFlagSummary = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary, 5));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.FlagSummary|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setFlagSummary = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearFlagSummary = function() {
  return this.setFlagSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasFlagSummary = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StartTime start_time = 6;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.StartTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getStartTime = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.StartTime} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.StartTime, 6));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.StartTime|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DeleteTime delete_time = 7;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getDeleteTime = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime, 7));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.DeleteTime|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Phone phone = 8;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.getPhone = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery.Phone} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery.Phone, 8));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery.Phone|undefined} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
*/
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.TranscriptQuery} returns this
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.TranscriptQuery.prototype.hasPhone = function() {
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
proto.wfo.vanalytics.v2.Moment.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Moment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Moment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Moment.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeZone: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Moment}
 */
proto.wfo.vanalytics.v2.Moment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Moment;
  return proto.wfo.vanalytics.v2.Moment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Moment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Moment}
 */
proto.wfo.vanalytics.v2.Moment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.Interval} */ (reader.readEnum());
      msg.setInterval(value);
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
proto.wfo.vanalytics.v2.Moment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Moment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Moment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Moment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string time_zone = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Moment.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Moment} returns this
 */
proto.wfo.vanalytics.v2.Moment.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.Interval interval = 2;
 * @return {!proto.api.commons.Interval}
 */
proto.wfo.vanalytics.v2.Moment.prototype.getInterval = function() {
  return /** @type {!proto.api.commons.Interval} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.Interval} value
 * @return {!proto.wfo.vanalytics.v2.Moment} returns this
 */
proto.wfo.vanalytics.v2.Moment.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.wfo.vanalytics.v2.FuzzinessAuto.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FuzzinessAuto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FuzzinessAuto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.toObject = function(includeInstance, msg) {
  var f, obj = {
    low: jspb.Message.getFieldWithDefault(msg, 1, 0),
    high: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.wfo.vanalytics.v2.FuzzinessAuto}
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FuzzinessAuto;
  return proto.wfo.vanalytics.v2.FuzzinessAuto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FuzzinessAuto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FuzzinessAuto}
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLow(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHigh(value);
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
proto.wfo.vanalytics.v2.FuzzinessAuto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FuzzinessAuto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FuzzinessAuto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLow();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 low = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FuzzinessAuto} returns this
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.prototype.setLow = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 high = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.FuzzinessAuto} returns this
 */
proto.wfo.vanalytics.v2.FuzzinessAuto.prototype.setHigh = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wfo.vanalytics.v2.Match.oneofGroups_ = [[15,16]];

/**
 * @enum {number}
 */
proto.wfo.vanalytics.v2.Match.FuzzinessCase = {
  FUZZINESS_NOT_SET: 0,
  FUZZINESS_AUTO: 15,
  FUZZINESS_VALUE: 16
};

/**
 * @return {proto.wfo.vanalytics.v2.Match.FuzzinessCase}
 */
proto.wfo.vanalytics.v2.Match.prototype.getFuzzinessCase = function() {
  return /** @type {proto.wfo.vanalytics.v2.Match.FuzzinessCase} */(jspb.Message.computeOneofCase(this, proto.wfo.vanalytics.v2.Match.oneofGroups_[0]));
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
proto.wfo.vanalytics.v2.Match.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.Match.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.Match} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Match.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fuzzinessAuto: (f = msg.getFuzzinessAuto()) && proto.wfo.vanalytics.v2.FuzzinessAuto.toObject(includeInstance, f),
    fuzzinessValue: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.wfo.vanalytics.v2.Match}
 */
proto.wfo.vanalytics.v2.Match.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.Match;
  return proto.wfo.vanalytics.v2.Match.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.Match} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.Match}
 */
proto.wfo.vanalytics.v2.Match.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 15:
      var value = new proto.wfo.vanalytics.v2.FuzzinessAuto;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FuzzinessAuto.deserializeBinaryFromReader);
      msg.setFuzzinessAuto(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFuzzinessValue(value);
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
proto.wfo.vanalytics.v2.Match.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.Match.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.Match} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.Match.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFuzzinessAuto();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.wfo.vanalytics.v2.FuzzinessAuto.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeUint32(
      16,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Match.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Match} returns this
 */
proto.wfo.vanalytics.v2.Match.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.wfo.vanalytics.v2.Match.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.Match} returns this
 */
proto.wfo.vanalytics.v2.Match.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional FuzzinessAuto fuzziness_auto = 15;
 * @return {?proto.wfo.vanalytics.v2.FuzzinessAuto}
 */
proto.wfo.vanalytics.v2.Match.prototype.getFuzzinessAuto = function() {
  return /** @type{?proto.wfo.vanalytics.v2.FuzzinessAuto} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.FuzzinessAuto, 15));
};


/**
 * @param {?proto.wfo.vanalytics.v2.FuzzinessAuto|undefined} value
 * @return {!proto.wfo.vanalytics.v2.Match} returns this
*/
proto.wfo.vanalytics.v2.Match.prototype.setFuzzinessAuto = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.wfo.vanalytics.v2.Match.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Match} returns this
 */
proto.wfo.vanalytics.v2.Match.prototype.clearFuzzinessAuto = function() {
  return this.setFuzzinessAuto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Match.prototype.hasFuzzinessAuto = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint32 fuzziness_value = 16;
 * @return {number}
 */
proto.wfo.vanalytics.v2.Match.prototype.getFuzzinessValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.Match} returns this
 */
proto.wfo.vanalytics.v2.Match.prototype.setFuzzinessValue = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.wfo.vanalytics.v2.Match.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.Match} returns this
 */
proto.wfo.vanalytics.v2.Match.prototype.clearFuzzinessValue = function() {
  return jspb.Message.setOneofField(this, 16, proto.wfo.vanalytics.v2.Match.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.Match.prototype.hasFuzzinessValue = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.SpanNear.repeatedFields_ = [3];



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
proto.wfo.vanalytics.v2.SpanNear.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SpanNear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SpanNear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanNear.toObject = function(includeInstance, msg) {
  var f, obj = {
    slop: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inOrder: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    clausesList: jspb.Message.toObjectList(msg.getClausesList(),
    proto.wfo.vanalytics.v2.SpanNear.Clause.toObject, includeInstance)
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
 * @return {!proto.wfo.vanalytics.v2.SpanNear}
 */
proto.wfo.vanalytics.v2.SpanNear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SpanNear;
  return proto.wfo.vanalytics.v2.SpanNear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SpanNear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SpanNear}
 */
proto.wfo.vanalytics.v2.SpanNear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSlop(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInOrder(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.SpanNear.Clause;
      reader.readMessage(value,proto.wfo.vanalytics.v2.SpanNear.Clause.deserializeBinaryFromReader);
      msg.addClauses(value);
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
proto.wfo.vanalytics.v2.SpanNear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SpanNear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SpanNear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanNear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlop();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInOrder();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getClausesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.SpanNear.Clause.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.MatchCase = {
  MATCH_NOT_SET: 0,
  SPAN_NEAR: 1,
  SPAN_FUZZY: 2,
  SPAN_TERM: 3
};

/**
 * @return {proto.wfo.vanalytics.v2.SpanNear.Clause.MatchCase}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.getMatchCase = function() {
  return /** @type {proto.wfo.vanalytics.v2.SpanNear.Clause.MatchCase} */(jspb.Message.computeOneofCase(this, proto.wfo.vanalytics.v2.SpanNear.Clause.oneofGroups_[0]));
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
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SpanNear.Clause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SpanNear.Clause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.toObject = function(includeInstance, msg) {
  var f, obj = {
    spanNear: (f = msg.getSpanNear()) && proto.wfo.vanalytics.v2.SpanNear.toObject(includeInstance, f),
    spanFuzzy: (f = msg.getSpanFuzzy()) && proto.wfo.vanalytics.v2.SpanFuzzy.toObject(includeInstance, f),
    spanTerm: (f = msg.getSpanTerm()) && proto.wfo.vanalytics.v2.SpanTerm.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SpanNear.Clause;
  return proto.wfo.vanalytics.v2.SpanNear.Clause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SpanNear.Clause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.SpanNear;
      reader.readMessage(value,proto.wfo.vanalytics.v2.SpanNear.deserializeBinaryFromReader);
      msg.setSpanNear(value);
      break;
    case 2:
      var value = new proto.wfo.vanalytics.v2.SpanFuzzy;
      reader.readMessage(value,proto.wfo.vanalytics.v2.SpanFuzzy.deserializeBinaryFromReader);
      msg.setSpanFuzzy(value);
      break;
    case 3:
      var value = new proto.wfo.vanalytics.v2.SpanTerm;
      reader.readMessage(value,proto.wfo.vanalytics.v2.SpanTerm.deserializeBinaryFromReader);
      msg.setSpanTerm(value);
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
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SpanNear.Clause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SpanNear.Clause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpanNear();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.SpanNear.serializeBinaryToWriter
    );
  }
  f = message.getSpanFuzzy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.wfo.vanalytics.v2.SpanFuzzy.serializeBinaryToWriter
    );
  }
  f = message.getSpanTerm();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.wfo.vanalytics.v2.SpanTerm.serializeBinaryToWriter
    );
  }
};


/**
 * optional SpanNear span_near = 1;
 * @return {?proto.wfo.vanalytics.v2.SpanNear}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.getSpanNear = function() {
  return /** @type{?proto.wfo.vanalytics.v2.SpanNear} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.SpanNear, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.SpanNear|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause} returns this
*/
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.setSpanNear = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.wfo.vanalytics.v2.SpanNear.Clause.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause} returns this
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.clearSpanNear = function() {
  return this.setSpanNear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.hasSpanNear = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SpanFuzzy span_fuzzy = 2;
 * @return {?proto.wfo.vanalytics.v2.SpanFuzzy}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.getSpanFuzzy = function() {
  return /** @type{?proto.wfo.vanalytics.v2.SpanFuzzy} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.SpanFuzzy, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.SpanFuzzy|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause} returns this
*/
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.setSpanFuzzy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.wfo.vanalytics.v2.SpanNear.Clause.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause} returns this
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.clearSpanFuzzy = function() {
  return this.setSpanFuzzy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.hasSpanFuzzy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SpanTerm span_term = 3;
 * @return {?proto.wfo.vanalytics.v2.SpanTerm}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.getSpanTerm = function() {
  return /** @type{?proto.wfo.vanalytics.v2.SpanTerm} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.SpanTerm, 3));
};


/**
 * @param {?proto.wfo.vanalytics.v2.SpanTerm|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause} returns this
*/
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.setSpanTerm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.wfo.vanalytics.v2.SpanNear.Clause.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause} returns this
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.clearSpanTerm = function() {
  return this.setSpanTerm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SpanNear.Clause.prototype.hasSpanTerm = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 slop = 1;
 * @return {number}
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.getSlop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.SpanNear} returns this
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.setSlop = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool in_order = 2;
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.getInOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wfo.vanalytics.v2.SpanNear} returns this
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.setInOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Clause clauses = 3;
 * @return {!Array<!proto.wfo.vanalytics.v2.SpanNear.Clause>}
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.getClausesList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.SpanNear.Clause>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.SpanNear.Clause, 3));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.SpanNear.Clause>} value
 * @return {!proto.wfo.vanalytics.v2.SpanNear} returns this
*/
proto.wfo.vanalytics.v2.SpanNear.prototype.setClausesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.SpanNear.Clause=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.SpanNear.Clause}
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.addClauses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.wfo.vanalytics.v2.SpanNear.Clause, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.SpanNear} returns this
 */
proto.wfo.vanalytics.v2.SpanNear.prototype.clearClausesList = function() {
  return this.setClausesList([]);
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
proto.wfo.vanalytics.v2.SpanTerm.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SpanTerm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SpanTerm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanTerm.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.SpanTerm}
 */
proto.wfo.vanalytics.v2.SpanTerm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SpanTerm;
  return proto.wfo.vanalytics.v2.SpanTerm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SpanTerm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SpanTerm}
 */
proto.wfo.vanalytics.v2.SpanTerm.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.SpanTerm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SpanTerm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SpanTerm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanTerm.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.SpanTerm.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.SpanTerm} returns this
 */
proto.wfo.vanalytics.v2.SpanTerm.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wfo.vanalytics.v2.SpanFuzzy.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.FuzzinessCase = {
  FUZZINESS_NOT_SET: 0,
  FUZZINESS_AUTO: 10,
  FUZZINESS_VALUE: 11
};

/**
 * @return {proto.wfo.vanalytics.v2.SpanFuzzy.FuzzinessCase}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.getFuzzinessCase = function() {
  return /** @type {proto.wfo.vanalytics.v2.SpanFuzzy.FuzzinessCase} */(jspb.Message.computeOneofCase(this, proto.wfo.vanalytics.v2.SpanFuzzy.oneofGroups_[0]));
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
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.SpanFuzzy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.SpanFuzzy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanFuzzy.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fuzzinessAuto: (f = msg.getFuzzinessAuto()) && proto.wfo.vanalytics.v2.FuzzinessAuto.toObject(includeInstance, f),
    fuzzinessValue: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.SpanFuzzy;
  return proto.wfo.vanalytics.v2.SpanFuzzy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.SpanFuzzy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new proto.wfo.vanalytics.v2.FuzzinessAuto;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FuzzinessAuto.deserializeBinaryFromReader);
      msg.setFuzzinessAuto(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFuzzinessValue(value);
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
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.SpanFuzzy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.SpanFuzzy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.SpanFuzzy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFuzzinessAuto();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.wfo.vanalytics.v2.FuzzinessAuto.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy} returns this
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FuzzinessAuto fuzziness_auto = 10;
 * @return {?proto.wfo.vanalytics.v2.FuzzinessAuto}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.getFuzzinessAuto = function() {
  return /** @type{?proto.wfo.vanalytics.v2.FuzzinessAuto} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.FuzzinessAuto, 10));
};


/**
 * @param {?proto.wfo.vanalytics.v2.FuzzinessAuto|undefined} value
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy} returns this
*/
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.setFuzzinessAuto = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.wfo.vanalytics.v2.SpanFuzzy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy} returns this
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.clearFuzzinessAuto = function() {
  return this.setFuzzinessAuto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.hasFuzzinessAuto = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 fuzziness_value = 11;
 * @return {number}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.getFuzzinessValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy} returns this
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.setFuzzinessValue = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.wfo.vanalytics.v2.SpanFuzzy.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.SpanFuzzy} returns this
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.clearFuzzinessValue = function() {
  return jspb.Message.setOneofField(this, 11, proto.wfo.vanalytics.v2.SpanFuzzy.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.SpanFuzzy.prototype.hasFuzzinessValue = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.wfo.vanalytics.v2.TranscriptQuery.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest}
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest;
  return proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest}
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptQuery;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptQuery.deserializeBinaryFromReader);
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional TranscriptQuery query = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptQuery}
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.prototype.getQuery = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptQuery} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptQuery, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptQuery|undefined} value
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest} returns this
*/
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest} returns this
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsRequest.prototype.hasQuery = function() {
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse}
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse;
  return proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse}
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse} returns this
 */
proto.wfo.vanalytics.v2.BulkDeleteTranscriptsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.wfo.vanalytics.v2.Channel = {
  CHANNEL_CALL: 0,
  CHANNEL_SMS: 1
};

/**
 * @enum {number}
 */
proto.wfo.vanalytics.v2.ReviewStatus = {
  REVIEW_STATUS_TODO: 0,
  REVIEW_STATUS_DONE: 1,
  REVIEW_STATUS_NONE: 2
};

goog.object.extend(exports, proto.wfo.vanalytics.v2);
