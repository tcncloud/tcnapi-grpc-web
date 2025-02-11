// source: api/commons/wfm.proto
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
var localGlobalThis = require("../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.commons.AdherenceAgentRule', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentRuleAction', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentRuleActionType', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentRuleClause', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentState', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentStateViolation', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentStateViolations', null, global);
goog.exportSymbol('proto.api.commons.AdherenceAgentStates', null, global);
goog.exportSymbol('proto.api.commons.AdherenceDepartmentalRule', null, global);
goog.exportSymbol('proto.api.commons.AdherenceDepartmentalRuleAction', null, global);
goog.exportSymbol('proto.api.commons.AdherenceDepartmentalRuleActionType', null, global);
goog.exportSymbol('proto.api.commons.AdherenceDepartmentalRuleClause', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleCondition', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleNotificationConfig', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleNotificationConfigEntry', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleNotificationMedium', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleRange', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleRequirementType', null, global);
goog.exportSymbol('proto.api.commons.AdherenceRuleUnit', null, global);
goog.exportSymbol('proto.api.commons.AgentLeavePetition', null, global);
goog.exportSymbol('proto.api.commons.AgentLeavePetitionStatus', null, global);
goog.exportSymbol('proto.api.commons.AgentStateSegment', null, global);
goog.exportSymbol('proto.api.commons.AgentStateSequence', null, global);
goog.exportSymbol('proto.api.commons.AvailabilityOption', null, global);
goog.exportSymbol('proto.api.commons.BitmapType', null, global);
goog.exportSymbol('proto.api.commons.BuildDraftStatus', null, global);
goog.exportSymbol('proto.api.commons.CallProfileGroupAvgs', null, global);
goog.exportSymbol('proto.api.commons.CallProfileGroupCalls', null, global);
goog.exportSymbol('proto.api.commons.ClientHistoryCacheInfo', null, global);
goog.exportSymbol('proto.api.commons.ConfigEntity', null, global);
goog.exportSymbol('proto.api.commons.ConfigEntityType', null, global);
goog.exportSymbol('proto.api.commons.ConfigRelationshipType', null, global);
goog.exportSymbol('proto.api.commons.ConstraintRuleType', null, global);
goog.exportSymbol('proto.api.commons.ConstraintTimeUnit', null, global);
goog.exportSymbol('proto.api.commons.DOWPlacementType', null, global);
goog.exportSymbol('proto.api.commons.DatetimeRange', null, global);
goog.exportSymbol('proto.api.commons.DayOfWeek', null, global);
goog.exportSymbol('proto.api.commons.DiagnosticCode', null, global);
goog.exportSymbol('proto.api.commons.DiagnosticLevel', null, global);
goog.exportSymbol('proto.api.commons.DistributionProfile', null, global);
goog.exportSymbol('proto.api.commons.ErrorTrace', null, global);
goog.exportSymbol('proto.api.commons.ForecastingParameters', null, global);
goog.exportSymbol('proto.api.commons.ForecastingParameters.ForecastRangeCase', null, global);
goog.exportSymbol('proto.api.commons.ForecastingParameters.HistoricalDataRangeCase', null, global);
goog.exportSymbol('proto.api.commons.ForecastingParameters.TrainingDataRangeCase', null, global);
goog.exportSymbol('proto.api.commons.HistoryCacheState', null, global);
goog.exportSymbol('proto.api.commons.InitialSetupState', null, global);
goog.exportSymbol('proto.api.commons.InitialSetupStatus', null, global);
goog.exportSymbol('proto.api.commons.OpenTimesOption', null, global);
goog.exportSymbol('proto.api.commons.OptionTypes', null, global);
goog.exportSymbol('proto.api.commons.OptionTypes.DesiredOptionCase', null, global);
goog.exportSymbol('proto.api.commons.PerformanceMetricType', null, global);
goog.exportSymbol('proto.api.commons.ProfileDOW', null, global);
goog.exportSymbol('proto.api.commons.ProfileMOY', null, global);
goog.exportSymbol('proto.api.commons.ProfileTOD', null, global);
goog.exportSymbol('proto.api.commons.ProfileWOMS', null, global);
goog.exportSymbol('proto.api.commons.RealTimeManagementState', null, global);
goog.exportSymbol('proto.api.commons.ReasonCode', null, global);
goog.exportSymbol('proto.api.commons.RegressionForecasterAvgsProcessingType', null, global);
goog.exportSymbol('proto.api.commons.RegressionForecasterModelTypes', null, global);
goog.exportSymbol('proto.api.commons.ScheduleSelector', null, global);
goog.exportSymbol('proto.api.commons.ScheduleShouldInclude', null, global);
goog.exportSymbol('proto.api.commons.ScheduleType', null, global);
goog.exportSymbol('proto.api.commons.SchedulingActivityClassification', null, global);
goog.exportSymbol('proto.api.commons.SchedulingResultMetric', null, global);
goog.exportSymbol('proto.api.commons.SchedulingResultMetricForSkillCollection', null, global);
goog.exportSymbol('proto.api.commons.SchedulingTargetType', null, global);
goog.exportSymbol('proto.api.commons.SkillProfileCategory', null, global);
goog.exportSymbol('proto.api.commons.SkillProfileCategory.CategoryType', null, global);
goog.exportSymbol('proto.api.commons.SkillType', null, global);
goog.exportSymbol('proto.api.commons.SkillType.Enum', null, global);
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
proto.api.commons.SkillType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.SkillType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SkillType.displayName = 'proto.api.commons.SkillType';
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
proto.api.commons.DatetimeRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.DatetimeRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.DatetimeRange.displayName = 'proto.api.commons.DatetimeRange';
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
proto.api.commons.ForecastingParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.ForecastingParameters.oneofGroups_);
};
goog.inherits(proto.api.commons.ForecastingParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ForecastingParameters.displayName = 'proto.api.commons.ForecastingParameters';
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
proto.api.commons.ProfileTOD = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ProfileTOD.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ProfileTOD, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ProfileTOD.displayName = 'proto.api.commons.ProfileTOD';
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
proto.api.commons.ProfileWOMS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ProfileWOMS.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ProfileWOMS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ProfileWOMS.displayName = 'proto.api.commons.ProfileWOMS';
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
proto.api.commons.ProfileDOW = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ProfileDOW, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ProfileDOW.displayName = 'proto.api.commons.ProfileDOW';
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
proto.api.commons.ProfileMOY = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ProfileMOY, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ProfileMOY.displayName = 'proto.api.commons.ProfileMOY';
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
proto.api.commons.DistributionProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.DistributionProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.DistributionProfile.displayName = 'proto.api.commons.DistributionProfile';
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
proto.api.commons.CallProfileGroupCalls = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.CallProfileGroupCalls, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.CallProfileGroupCalls.displayName = 'proto.api.commons.CallProfileGroupCalls';
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
proto.api.commons.CallProfileGroupAvgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.CallProfileGroupAvgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.CallProfileGroupAvgs.displayName = 'proto.api.commons.CallProfileGroupAvgs';
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
proto.api.commons.OptionTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.OptionTypes.oneofGroups_);
};
goog.inherits(proto.api.commons.OptionTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OptionTypes.displayName = 'proto.api.commons.OptionTypes';
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
proto.api.commons.ReasonCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ReasonCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ReasonCode.displayName = 'proto.api.commons.ReasonCode';
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
proto.api.commons.ScheduleSelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ScheduleSelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ScheduleSelector.displayName = 'proto.api.commons.ScheduleSelector';
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
proto.api.commons.SkillProfileCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.SkillProfileCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SkillProfileCategory.displayName = 'proto.api.commons.SkillProfileCategory';
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
proto.api.commons.SchedulingResultMetricForSkillCollection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.SchedulingResultMetricForSkillCollection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SchedulingResultMetricForSkillCollection.displayName = 'proto.api.commons.SchedulingResultMetricForSkillCollection';
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
proto.api.commons.SchedulingResultMetric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.SchedulingResultMetric.repeatedFields_, null);
};
goog.inherits(proto.api.commons.SchedulingResultMetric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SchedulingResultMetric.displayName = 'proto.api.commons.SchedulingResultMetric';
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
proto.api.commons.ClientHistoryCacheInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ClientHistoryCacheInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ClientHistoryCacheInfo.displayName = 'proto.api.commons.ClientHistoryCacheInfo';
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
proto.api.commons.ErrorTrace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ErrorTrace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ErrorTrace.displayName = 'proto.api.commons.ErrorTrace';
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
proto.api.commons.InitialSetupStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.InitialSetupStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.InitialSetupStatus.displayName = 'proto.api.commons.InitialSetupStatus';
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
proto.api.commons.AgentStateSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AgentStateSegment.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AgentStateSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AgentStateSegment.displayName = 'proto.api.commons.AgentStateSegment';
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
proto.api.commons.AgentStateSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AgentStateSequence.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AgentStateSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AgentStateSequence.displayName = 'proto.api.commons.AgentStateSequence';
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
proto.api.commons.AdherenceAgentState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceAgentState.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceAgentState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentState.displayName = 'proto.api.commons.AdherenceAgentState';
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
proto.api.commons.AdherenceAgentStateViolation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceAgentStateViolation.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceAgentStateViolation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentStateViolation.displayName = 'proto.api.commons.AdherenceAgentStateViolation';
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
proto.api.commons.AdherenceAgentStates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceAgentStates.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceAgentStates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentStates.displayName = 'proto.api.commons.AdherenceAgentStates';
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
proto.api.commons.AdherenceAgentStateViolations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceAgentStateViolations.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceAgentStateViolations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentStateViolations.displayName = 'proto.api.commons.AdherenceAgentStateViolations';
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
proto.api.commons.AgentLeavePetition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AgentLeavePetition.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AgentLeavePetition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AgentLeavePetition.displayName = 'proto.api.commons.AgentLeavePetition';
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
proto.api.commons.ConfigEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ConfigEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ConfigEntity.displayName = 'proto.api.commons.ConfigEntity';
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
proto.api.commons.AdherenceRuleNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceRuleNotificationConfig.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceRuleNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceRuleNotificationConfig.displayName = 'proto.api.commons.AdherenceRuleNotificationConfig';
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
proto.api.commons.AdherenceRuleNotificationConfigEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.AdherenceRuleNotificationConfigEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceRuleNotificationConfigEntry.displayName = 'proto.api.commons.AdherenceRuleNotificationConfigEntry';
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
proto.api.commons.AdherenceDepartmentalRuleAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.AdherenceDepartmentalRuleAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceDepartmentalRuleAction.displayName = 'proto.api.commons.AdherenceDepartmentalRuleAction';
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
proto.api.commons.AdherenceDepartmentalRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceDepartmentalRule.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceDepartmentalRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceDepartmentalRule.displayName = 'proto.api.commons.AdherenceDepartmentalRule';
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
proto.api.commons.AdherenceDepartmentalRuleClause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.AdherenceDepartmentalRuleClause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceDepartmentalRuleClause.displayName = 'proto.api.commons.AdherenceDepartmentalRuleClause';
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
proto.api.commons.AdherenceAgentRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.AdherenceAgentRule.repeatedFields_, null);
};
goog.inherits(proto.api.commons.AdherenceAgentRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentRule.displayName = 'proto.api.commons.AdherenceAgentRule';
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
proto.api.commons.AdherenceAgentRuleAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.AdherenceAgentRuleAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentRuleAction.displayName = 'proto.api.commons.AdherenceAgentRuleAction';
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
proto.api.commons.AdherenceAgentRuleClause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.AdherenceAgentRuleClause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AdherenceAgentRuleClause.displayName = 'proto.api.commons.AdherenceAgentRuleClause';
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
proto.api.commons.SkillType.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SkillType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SkillType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SkillType.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.commons.SkillType}
 */
proto.api.commons.SkillType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SkillType;
  return proto.api.commons.SkillType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SkillType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SkillType}
 */
proto.api.commons.SkillType.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.SkillType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SkillType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SkillType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SkillType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.api.commons.SkillType.Enum = {
  AGENT_SKILL: 0,
  HUNT_GROUP: 1,
  AGENT_PBX: 2,
  HUNT_GROUP_PBX: 3,
  PBX: 4,
  AGENT: 5
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
proto.api.commons.DatetimeRange.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.DatetimeRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.DatetimeRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.DatetimeRange.toObject = function(includeInstance, msg) {
  var f, obj = {
startDatetime: (f = msg.getStartDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endDatetime: (f = msg.getEndDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.DatetimeRange}
 */
proto.api.commons.DatetimeRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.DatetimeRange;
  return proto.api.commons.DatetimeRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.DatetimeRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.DatetimeRange}
 */
proto.api.commons.DatetimeRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDatetime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDatetime(value);
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
proto.api.commons.DatetimeRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.DatetimeRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.DatetimeRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.DatetimeRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDatetime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_datetime = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.DatetimeRange.prototype.getStartDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.DatetimeRange} returns this
*/
proto.api.commons.DatetimeRange.prototype.setStartDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.DatetimeRange} returns this
 */
proto.api.commons.DatetimeRange.prototype.clearStartDatetime = function() {
  return this.setStartDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.DatetimeRange.prototype.hasStartDatetime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_datetime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.DatetimeRange.prototype.getEndDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.DatetimeRange} returns this
*/
proto.api.commons.DatetimeRange.prototype.setEndDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.DatetimeRange} returns this
 */
proto.api.commons.DatetimeRange.prototype.clearEndDatetime = function() {
  return this.setEndDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.DatetimeRange.prototype.hasEndDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.ForecastingParameters.oneofGroups_ = [[6,7],[9,10],[11,12]];

/**
 * @enum {number}
 */
proto.api.commons.ForecastingParameters.HistoricalDataRangeCase = {
  HISTORICAL_DATA_RANGE_NOT_SET: 0,
  HISTORICAL_DATA_RANGE_IN_MONTHS: 6,
  HISTORICAL_DATA_RANGE_START_DATETIME: 7
};

/**
 * @return {proto.api.commons.ForecastingParameters.HistoricalDataRangeCase}
 */
proto.api.commons.ForecastingParameters.prototype.getHistoricalDataRangeCase = function() {
  return /** @type {proto.api.commons.ForecastingParameters.HistoricalDataRangeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.ForecastingParameters.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.api.commons.ForecastingParameters.ForecastRangeCase = {
  FORECAST_RANGE_NOT_SET: 0,
  FORECAST_RANGE_IN_WEEKS: 9,
  FORECAST_DATETIME_RANGE: 10
};

/**
 * @return {proto.api.commons.ForecastingParameters.ForecastRangeCase}
 */
proto.api.commons.ForecastingParameters.prototype.getForecastRangeCase = function() {
  return /** @type {proto.api.commons.ForecastingParameters.ForecastRangeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.ForecastingParameters.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.api.commons.ForecastingParameters.TrainingDataRangeCase = {
  TRAINING_DATA_RANGE_NOT_SET: 0,
  TRAINING_DATA_RANGE_IN_MONTHS: 11,
  TRAINING_DATA_DATETIME_RANGE: 12
};

/**
 * @return {proto.api.commons.ForecastingParameters.TrainingDataRangeCase}
 */
proto.api.commons.ForecastingParameters.prototype.getTrainingDataRangeCase = function() {
  return /** @type {proto.api.commons.ForecastingParameters.TrainingDataRangeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.ForecastingParameters.oneofGroups_[2]));
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
proto.api.commons.ForecastingParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ForecastingParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ForecastingParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ForecastingParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
intervalWidthInMinutes: jspb.Message.getFieldWithDefault(msg, 1, 0),
historicalDataRangeInMonths: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
historicalDataRangeStartDatetime: (f = msg.getHistoricalDataRangeStartDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
forecastTestRangeInWeeks: jspb.Message.getFieldWithDefault(msg, 8, 0),
forecastRangeInWeeks: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
forecastDatetimeRange: (f = msg.getForecastDatetimeRange()) && proto.api.commons.DatetimeRange.toObject(includeInstance, f),
trainingDataRangeInMonths: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
trainingDataDatetimeRange: (f = msg.getTrainingDataDatetimeRange()) && proto.api.commons.DatetimeRange.toObject(includeInstance, f),
averagesCalculationRangeInMonths: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.api.commons.ForecastingParameters}
 */
proto.api.commons.ForecastingParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ForecastingParameters;
  return proto.api.commons.ForecastingParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ForecastingParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ForecastingParameters}
 */
proto.api.commons.ForecastingParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntervalWidthInMinutes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoricalDataRangeInMonths(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setHistoricalDataRangeStartDatetime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setForecastTestRangeInWeeks(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setForecastRangeInWeeks(value);
      break;
    case 10:
      var value = new proto.api.commons.DatetimeRange;
      reader.readMessage(value,proto.api.commons.DatetimeRange.deserializeBinaryFromReader);
      msg.setForecastDatetimeRange(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainingDataRangeInMonths(value);
      break;
    case 12:
      var value = new proto.api.commons.DatetimeRange;
      reader.readMessage(value,proto.api.commons.DatetimeRange.deserializeBinaryFromReader);
      msg.setTrainingDataDatetimeRange(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAveragesCalculationRangeInMonths(value);
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
proto.api.commons.ForecastingParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ForecastingParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ForecastingParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ForecastingParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntervalWidthInMinutes();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHistoricalDataRangeStartDatetime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getForecastTestRangeInWeeks();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getForecastDatetimeRange();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.DatetimeRange.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getTrainingDataDatetimeRange();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.api.commons.DatetimeRange.serializeBinaryToWriter
    );
  }
  f = message.getAveragesCalculationRangeInMonths();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional int32 interval_width_in_minutes = 1;
 * @return {number}
 */
proto.api.commons.ForecastingParameters.prototype.getIntervalWidthInMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.setIntervalWidthInMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 historical_data_range_in_months = 6;
 * @return {number}
 */
proto.api.commons.ForecastingParameters.prototype.getHistoricalDataRangeInMonths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.setHistoricalDataRangeInMonths = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.api.commons.ForecastingParameters.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.clearHistoricalDataRangeInMonths = function() {
  return jspb.Message.setOneofField(this, 6, proto.api.commons.ForecastingParameters.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ForecastingParameters.prototype.hasHistoricalDataRangeInMonths = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp historical_data_range_start_datetime = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ForecastingParameters.prototype.getHistoricalDataRangeStartDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
*/
proto.api.commons.ForecastingParameters.prototype.setHistoricalDataRangeStartDatetime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.api.commons.ForecastingParameters.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.clearHistoricalDataRangeStartDatetime = function() {
  return this.setHistoricalDataRangeStartDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ForecastingParameters.prototype.hasHistoricalDataRangeStartDatetime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 forecast_test_range_in_weeks = 8;
 * @return {number}
 */
proto.api.commons.ForecastingParameters.prototype.getForecastTestRangeInWeeks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.setForecastTestRangeInWeeks = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 forecast_range_in_weeks = 9;
 * @return {number}
 */
proto.api.commons.ForecastingParameters.prototype.getForecastRangeInWeeks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.setForecastRangeInWeeks = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.api.commons.ForecastingParameters.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.clearForecastRangeInWeeks = function() {
  return jspb.Message.setOneofField(this, 9, proto.api.commons.ForecastingParameters.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ForecastingParameters.prototype.hasForecastRangeInWeeks = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DatetimeRange forecast_datetime_range = 10;
 * @return {?proto.api.commons.DatetimeRange}
 */
proto.api.commons.ForecastingParameters.prototype.getForecastDatetimeRange = function() {
  return /** @type{?proto.api.commons.DatetimeRange} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.DatetimeRange, 10));
};


/**
 * @param {?proto.api.commons.DatetimeRange|undefined} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
*/
proto.api.commons.ForecastingParameters.prototype.setForecastDatetimeRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.api.commons.ForecastingParameters.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.clearForecastDatetimeRange = function() {
  return this.setForecastDatetimeRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ForecastingParameters.prototype.hasForecastDatetimeRange = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 training_data_range_in_months = 11;
 * @return {number}
 */
proto.api.commons.ForecastingParameters.prototype.getTrainingDataRangeInMonths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.setTrainingDataRangeInMonths = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.api.commons.ForecastingParameters.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.clearTrainingDataRangeInMonths = function() {
  return jspb.Message.setOneofField(this, 11, proto.api.commons.ForecastingParameters.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ForecastingParameters.prototype.hasTrainingDataRangeInMonths = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DatetimeRange training_data_datetime_range = 12;
 * @return {?proto.api.commons.DatetimeRange}
 */
proto.api.commons.ForecastingParameters.prototype.getTrainingDataDatetimeRange = function() {
  return /** @type{?proto.api.commons.DatetimeRange} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.DatetimeRange, 12));
};


/**
 * @param {?proto.api.commons.DatetimeRange|undefined} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
*/
proto.api.commons.ForecastingParameters.prototype.setTrainingDataDatetimeRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.api.commons.ForecastingParameters.oneofGroups_[2], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.clearTrainingDataDatetimeRange = function() {
  return this.setTrainingDataDatetimeRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ForecastingParameters.prototype.hasTrainingDataDatetimeRange = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 averages_calculation_range_in_months = 13;
 * @return {number}
 */
proto.api.commons.ForecastingParameters.prototype.getAveragesCalculationRangeInMonths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ForecastingParameters} returns this
 */
proto.api.commons.ForecastingParameters.prototype.setAveragesCalculationRangeInMonths = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ProfileTOD.repeatedFields_ = [1,2,3,4,5,6,7];



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
proto.api.commons.ProfileTOD.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ProfileTOD.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ProfileTOD} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileTOD.toObject = function(includeInstance, msg) {
  var f, obj = {
sundayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
mondayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
tuesdayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
wednesdayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
thursdayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
fridayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f,
saturdayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.api.commons.ProfileTOD}
 */
proto.api.commons.ProfileTOD.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ProfileTOD;
  return proto.api.commons.ProfileTOD.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ProfileTOD} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ProfileTOD}
 */
proto.api.commons.ProfileTOD.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSunday(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMonday(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTuesday(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addWednesday(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addThursday(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFriday(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSaturday(values[i]);
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
proto.api.commons.ProfileTOD.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ProfileTOD.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ProfileTOD} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileTOD.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSundayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getMondayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getTuesdayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getWednesdayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
  f = message.getThursdayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      5,
      f
    );
  }
  f = message.getFridayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      6,
      f
    );
  }
  f = message.getSaturdayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      7,
      f
    );
  }
};


/**
 * repeated float sunday = 1;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getSundayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setSundayList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addSunday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearSundayList = function() {
  return this.setSundayList([]);
};


/**
 * repeated float monday = 2;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getMondayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setMondayList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addMonday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearMondayList = function() {
  return this.setMondayList([]);
};


/**
 * repeated float tuesday = 3;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getTuesdayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setTuesdayList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addTuesday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearTuesdayList = function() {
  return this.setTuesdayList([]);
};


/**
 * repeated float wednesday = 4;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getWednesdayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setWednesdayList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addWednesday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearWednesdayList = function() {
  return this.setWednesdayList([]);
};


/**
 * repeated float thursday = 5;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getThursdayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setThursdayList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addThursday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearThursdayList = function() {
  return this.setThursdayList([]);
};


/**
 * repeated float friday = 6;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getFridayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setFridayList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addFriday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearFridayList = function() {
  return this.setFridayList([]);
};


/**
 * repeated float saturday = 7;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileTOD.prototype.getSaturdayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.setSaturdayList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.addSaturday = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileTOD} returns this
 */
proto.api.commons.ProfileTOD.prototype.clearSaturdayList = function() {
  return this.setSaturdayList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ProfileWOMS.repeatedFields_ = [1,2,3,4,5,6,7,8,9,10,11,12];



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
proto.api.commons.ProfileWOMS.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ProfileWOMS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ProfileWOMS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileWOMS.toObject = function(includeInstance, msg) {
  var f, obj = {
januaryList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
februaryList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
marchList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
aprilList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
mayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
juneList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f,
julyList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f,
augustList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 8)) == null ? undefined : f,
septemberList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 9)) == null ? undefined : f,
octoberList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 10)) == null ? undefined : f,
novemberList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 11)) == null ? undefined : f,
decemberList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.api.commons.ProfileWOMS}
 */
proto.api.commons.ProfileWOMS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ProfileWOMS;
  return proto.api.commons.ProfileWOMS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ProfileWOMS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ProfileWOMS}
 */
proto.api.commons.ProfileWOMS.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addJanuary(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFebruary(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMarch(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addApril(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMay(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addJune(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addJuly(values[i]);
      }
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAugust(values[i]);
      }
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSeptember(values[i]);
      }
      break;
    case 10:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOctober(values[i]);
      }
      break;
    case 11:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNovember(values[i]);
      }
      break;
    case 12:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDecember(values[i]);
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
proto.api.commons.ProfileWOMS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ProfileWOMS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ProfileWOMS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileWOMS.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJanuaryList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getFebruaryList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getMarchList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getAprilList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
  f = message.getMayList();
  if (f.length > 0) {
    writer.writePackedFloat(
      5,
      f
    );
  }
  f = message.getJuneList();
  if (f.length > 0) {
    writer.writePackedFloat(
      6,
      f
    );
  }
  f = message.getJulyList();
  if (f.length > 0) {
    writer.writePackedFloat(
      7,
      f
    );
  }
  f = message.getAugustList();
  if (f.length > 0) {
    writer.writePackedFloat(
      8,
      f
    );
  }
  f = message.getSeptemberList();
  if (f.length > 0) {
    writer.writePackedFloat(
      9,
      f
    );
  }
  f = message.getOctoberList();
  if (f.length > 0) {
    writer.writePackedFloat(
      10,
      f
    );
  }
  f = message.getNovemberList();
  if (f.length > 0) {
    writer.writePackedFloat(
      11,
      f
    );
  }
  f = message.getDecemberList();
  if (f.length > 0) {
    writer.writePackedFloat(
      12,
      f
    );
  }
};


/**
 * repeated float january = 1;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getJanuaryList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setJanuaryList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addJanuary = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearJanuaryList = function() {
  return this.setJanuaryList([]);
};


/**
 * repeated float february = 2;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getFebruaryList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setFebruaryList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addFebruary = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearFebruaryList = function() {
  return this.setFebruaryList([]);
};


/**
 * repeated float march = 3;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getMarchList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setMarchList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addMarch = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearMarchList = function() {
  return this.setMarchList([]);
};


/**
 * repeated float april = 4;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getAprilList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setAprilList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addApril = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearAprilList = function() {
  return this.setAprilList([]);
};


/**
 * repeated float may = 5;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getMayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setMayList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addMay = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearMayList = function() {
  return this.setMayList([]);
};


/**
 * repeated float june = 6;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getJuneList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setJuneList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addJune = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearJuneList = function() {
  return this.setJuneList([]);
};


/**
 * repeated float july = 7;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getJulyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setJulyList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addJuly = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearJulyList = function() {
  return this.setJulyList([]);
};


/**
 * repeated float august = 8;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getAugustList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setAugustList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addAugust = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearAugustList = function() {
  return this.setAugustList([]);
};


/**
 * repeated float september = 9;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getSeptemberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setSeptemberList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addSeptember = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearSeptemberList = function() {
  return this.setSeptemberList([]);
};


/**
 * repeated float october = 10;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getOctoberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 10));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setOctoberList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addOctober = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearOctoberList = function() {
  return this.setOctoberList([]);
};


/**
 * repeated float november = 11;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getNovemberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 11));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setNovemberList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addNovember = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearNovemberList = function() {
  return this.setNovemberList([]);
};


/**
 * repeated float december = 12;
 * @return {!Array<number>}
 */
proto.api.commons.ProfileWOMS.prototype.getDecemberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 12));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.setDecemberList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.addDecember = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ProfileWOMS} returns this
 */
proto.api.commons.ProfileWOMS.prototype.clearDecemberList = function() {
  return this.setDecemberList([]);
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
proto.api.commons.ProfileDOW.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ProfileDOW.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ProfileDOW} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileDOW.toObject = function(includeInstance, msg) {
  var f, obj = {
sunday: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
monday: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
tuesday: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
wednesday: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
thursday: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
friday: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
saturday: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.api.commons.ProfileDOW}
 */
proto.api.commons.ProfileDOW.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ProfileDOW;
  return proto.api.commons.ProfileDOW.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ProfileDOW} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ProfileDOW}
 */
proto.api.commons.ProfileDOW.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSunday(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMonday(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTuesday(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWednesday(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setThursday(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFriday(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSaturday(value);
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
proto.api.commons.ProfileDOW.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ProfileDOW.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ProfileDOW} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileDOW.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSunday();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMonday();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTuesday();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getWednesday();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getThursday();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getFriday();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getSaturday();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional float sunday = 1;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getSunday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setSunday = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float monday = 2;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getMonday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setMonday = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float tuesday = 3;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getTuesday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setTuesday = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float wednesday = 4;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getWednesday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setWednesday = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float thursday = 5;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getThursday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setThursday = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float friday = 6;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getFriday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setFriday = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float saturday = 7;
 * @return {number}
 */
proto.api.commons.ProfileDOW.prototype.getSaturday = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileDOW} returns this
 */
proto.api.commons.ProfileDOW.prototype.setSaturday = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
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
proto.api.commons.ProfileMOY.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ProfileMOY.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ProfileMOY} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileMOY.toObject = function(includeInstance, msg) {
  var f, obj = {
january: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
february: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
march: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
april: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
may: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
june: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
july: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
august: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
september: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
october: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
november: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
december: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0)
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
 * @return {!proto.api.commons.ProfileMOY}
 */
proto.api.commons.ProfileMOY.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ProfileMOY;
  return proto.api.commons.ProfileMOY.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ProfileMOY} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ProfileMOY}
 */
proto.api.commons.ProfileMOY.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJanuary(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFebruary(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMarch(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setApril(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMay(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJune(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJuly(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAugust(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSeptember(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOctober(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNovember(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDecember(value);
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
proto.api.commons.ProfileMOY.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ProfileMOY.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ProfileMOY} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ProfileMOY.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJanuary();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getFebruary();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMarch();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getApril();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMay();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getJune();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getJuly();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getAugust();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getSeptember();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getOctober();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getNovember();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getDecember();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
};


/**
 * optional float january = 1;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getJanuary = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setJanuary = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float february = 2;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getFebruary = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setFebruary = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float march = 3;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getMarch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setMarch = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float april = 4;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getApril = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setApril = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float may = 5;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getMay = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setMay = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float june = 6;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getJune = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setJune = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float july = 7;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getJuly = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setJuly = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float august = 8;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getAugust = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setAugust = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float september = 9;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getSeptember = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setSeptember = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float october = 10;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getOctober = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setOctober = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float november = 11;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getNovember = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setNovember = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float december = 12;
 * @return {number}
 */
proto.api.commons.ProfileMOY.prototype.getDecember = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ProfileMOY} returns this
 */
proto.api.commons.ProfileMOY.prototype.setDecember = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
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
proto.api.commons.DistributionProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.DistributionProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.DistributionProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.DistributionProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
profileTod: (f = msg.getProfileTod()) && proto.api.commons.ProfileTOD.toObject(includeInstance, f),
profileWoms: (f = msg.getProfileWoms()) && proto.api.commons.ProfileWOMS.toObject(includeInstance, f),
profileDow: (f = msg.getProfileDow()) && proto.api.commons.ProfileDOW.toObject(includeInstance, f),
profileMoy: (f = msg.getProfileMoy()) && proto.api.commons.ProfileMOY.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.DistributionProfile}
 */
proto.api.commons.DistributionProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.DistributionProfile;
  return proto.api.commons.DistributionProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.DistributionProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.DistributionProfile}
 */
proto.api.commons.DistributionProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.ProfileTOD;
      reader.readMessage(value,proto.api.commons.ProfileTOD.deserializeBinaryFromReader);
      msg.setProfileTod(value);
      break;
    case 2:
      var value = new proto.api.commons.ProfileWOMS;
      reader.readMessage(value,proto.api.commons.ProfileWOMS.deserializeBinaryFromReader);
      msg.setProfileWoms(value);
      break;
    case 3:
      var value = new proto.api.commons.ProfileDOW;
      reader.readMessage(value,proto.api.commons.ProfileDOW.deserializeBinaryFromReader);
      msg.setProfileDow(value);
      break;
    case 4:
      var value = new proto.api.commons.ProfileMOY;
      reader.readMessage(value,proto.api.commons.ProfileMOY.deserializeBinaryFromReader);
      msg.setProfileMoy(value);
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
proto.api.commons.DistributionProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.DistributionProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.DistributionProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.DistributionProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileTod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.ProfileTOD.serializeBinaryToWriter
    );
  }
  f = message.getProfileWoms();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.ProfileWOMS.serializeBinaryToWriter
    );
  }
  f = message.getProfileDow();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.ProfileDOW.serializeBinaryToWriter
    );
  }
  f = message.getProfileMoy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.ProfileMOY.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProfileTOD profile_tod = 1;
 * @return {?proto.api.commons.ProfileTOD}
 */
proto.api.commons.DistributionProfile.prototype.getProfileTod = function() {
  return /** @type{?proto.api.commons.ProfileTOD} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ProfileTOD, 1));
};


/**
 * @param {?proto.api.commons.ProfileTOD|undefined} value
 * @return {!proto.api.commons.DistributionProfile} returns this
*/
proto.api.commons.DistributionProfile.prototype.setProfileTod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.DistributionProfile} returns this
 */
proto.api.commons.DistributionProfile.prototype.clearProfileTod = function() {
  return this.setProfileTod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.DistributionProfile.prototype.hasProfileTod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProfileWOMS profile_woms = 2;
 * @return {?proto.api.commons.ProfileWOMS}
 */
proto.api.commons.DistributionProfile.prototype.getProfileWoms = function() {
  return /** @type{?proto.api.commons.ProfileWOMS} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ProfileWOMS, 2));
};


/**
 * @param {?proto.api.commons.ProfileWOMS|undefined} value
 * @return {!proto.api.commons.DistributionProfile} returns this
*/
proto.api.commons.DistributionProfile.prototype.setProfileWoms = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.DistributionProfile} returns this
 */
proto.api.commons.DistributionProfile.prototype.clearProfileWoms = function() {
  return this.setProfileWoms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.DistributionProfile.prototype.hasProfileWoms = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProfileDOW profile_dow = 3;
 * @return {?proto.api.commons.ProfileDOW}
 */
proto.api.commons.DistributionProfile.prototype.getProfileDow = function() {
  return /** @type{?proto.api.commons.ProfileDOW} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ProfileDOW, 3));
};


/**
 * @param {?proto.api.commons.ProfileDOW|undefined} value
 * @return {!proto.api.commons.DistributionProfile} returns this
*/
proto.api.commons.DistributionProfile.prototype.setProfileDow = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.DistributionProfile} returns this
 */
proto.api.commons.DistributionProfile.prototype.clearProfileDow = function() {
  return this.setProfileDow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.DistributionProfile.prototype.hasProfileDow = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ProfileMOY profile_moy = 4;
 * @return {?proto.api.commons.ProfileMOY}
 */
proto.api.commons.DistributionProfile.prototype.getProfileMoy = function() {
  return /** @type{?proto.api.commons.ProfileMOY} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ProfileMOY, 4));
};


/**
 * @param {?proto.api.commons.ProfileMOY|undefined} value
 * @return {!proto.api.commons.DistributionProfile} returns this
*/
proto.api.commons.DistributionProfile.prototype.setProfileMoy = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.DistributionProfile} returns this
 */
proto.api.commons.DistributionProfile.prototype.clearProfileMoy = function() {
  return this.setProfileMoy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.DistributionProfile.prototype.hasProfileMoy = function() {
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
proto.api.commons.CallProfileGroupCalls.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.CallProfileGroupCalls.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.CallProfileGroupCalls} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CallProfileGroupCalls.toObject = function(includeInstance, msg) {
  var f, obj = {
totalCalls: jspb.Message.getFieldWithDefault(msg, 1, 0),
distributionProfile: (f = msg.getDistributionProfile()) && proto.api.commons.DistributionProfile.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.CallProfileGroupCalls}
 */
proto.api.commons.CallProfileGroupCalls.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.CallProfileGroupCalls;
  return proto.api.commons.CallProfileGroupCalls.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.CallProfileGroupCalls} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.CallProfileGroupCalls}
 */
proto.api.commons.CallProfileGroupCalls.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCalls(value);
      break;
    case 2:
      var value = new proto.api.commons.DistributionProfile;
      reader.readMessage(value,proto.api.commons.DistributionProfile.deserializeBinaryFromReader);
      msg.setDistributionProfile(value);
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
proto.api.commons.CallProfileGroupCalls.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.CallProfileGroupCalls.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.CallProfileGroupCalls} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CallProfileGroupCalls.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalCalls();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDistributionProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.DistributionProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 total_calls = 1;
 * @return {number}
 */
proto.api.commons.CallProfileGroupCalls.prototype.getTotalCalls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.CallProfileGroupCalls} returns this
 */
proto.api.commons.CallProfileGroupCalls.prototype.setTotalCalls = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DistributionProfile distribution_profile = 2;
 * @return {?proto.api.commons.DistributionProfile}
 */
proto.api.commons.CallProfileGroupCalls.prototype.getDistributionProfile = function() {
  return /** @type{?proto.api.commons.DistributionProfile} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.DistributionProfile, 2));
};


/**
 * @param {?proto.api.commons.DistributionProfile|undefined} value
 * @return {!proto.api.commons.CallProfileGroupCalls} returns this
*/
proto.api.commons.CallProfileGroupCalls.prototype.setDistributionProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.CallProfileGroupCalls} returns this
 */
proto.api.commons.CallProfileGroupCalls.prototype.clearDistributionProfile = function() {
  return this.setDistributionProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.CallProfileGroupCalls.prototype.hasDistributionProfile = function() {
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
proto.api.commons.CallProfileGroupAvgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.CallProfileGroupAvgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.CallProfileGroupAvgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CallProfileGroupAvgs.toObject = function(includeInstance, msg) {
  var f, obj = {
minAverage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
maxAverage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
distributionProfile: (f = msg.getDistributionProfile()) && proto.api.commons.DistributionProfile.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.CallProfileGroupAvgs}
 */
proto.api.commons.CallProfileGroupAvgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.CallProfileGroupAvgs;
  return proto.api.commons.CallProfileGroupAvgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.CallProfileGroupAvgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.CallProfileGroupAvgs}
 */
proto.api.commons.CallProfileGroupAvgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinAverage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxAverage(value);
      break;
    case 3:
      var value = new proto.api.commons.DistributionProfile;
      reader.readMessage(value,proto.api.commons.DistributionProfile.deserializeBinaryFromReader);
      msg.setDistributionProfile(value);
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
proto.api.commons.CallProfileGroupAvgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.CallProfileGroupAvgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.CallProfileGroupAvgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CallProfileGroupAvgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinAverage();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMaxAverage();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDistributionProfile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.DistributionProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional float min_average = 1;
 * @return {number}
 */
proto.api.commons.CallProfileGroupAvgs.prototype.getMinAverage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.CallProfileGroupAvgs} returns this
 */
proto.api.commons.CallProfileGroupAvgs.prototype.setMinAverage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float max_average = 2;
 * @return {number}
 */
proto.api.commons.CallProfileGroupAvgs.prototype.getMaxAverage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.CallProfileGroupAvgs} returns this
 */
proto.api.commons.CallProfileGroupAvgs.prototype.setMaxAverage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional DistributionProfile distribution_profile = 3;
 * @return {?proto.api.commons.DistributionProfile}
 */
proto.api.commons.CallProfileGroupAvgs.prototype.getDistributionProfile = function() {
  return /** @type{?proto.api.commons.DistributionProfile} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.DistributionProfile, 3));
};


/**
 * @param {?proto.api.commons.DistributionProfile|undefined} value
 * @return {!proto.api.commons.CallProfileGroupAvgs} returns this
*/
proto.api.commons.CallProfileGroupAvgs.prototype.setDistributionProfile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.CallProfileGroupAvgs} returns this
 */
proto.api.commons.CallProfileGroupAvgs.prototype.clearDistributionProfile = function() {
  return this.setDistributionProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.CallProfileGroupAvgs.prototype.hasDistributionProfile = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.OptionTypes.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.OptionTypes.DesiredOptionCase = {
  DESIRED_OPTION_NOT_SET: 0,
  OPEN_TIMES_OPTION: 1,
  AVAILABILITY_OPTION: 2
};

/**
 * @return {proto.api.commons.OptionTypes.DesiredOptionCase}
 */
proto.api.commons.OptionTypes.prototype.getDesiredOptionCase = function() {
  return /** @type {proto.api.commons.OptionTypes.DesiredOptionCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.OptionTypes.oneofGroups_[0]));
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
proto.api.commons.OptionTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OptionTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OptionTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OptionTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
openTimesOption: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
availabilityOption: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api.commons.OptionTypes}
 */
proto.api.commons.OptionTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OptionTypes;
  return proto.api.commons.OptionTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OptionTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OptionTypes}
 */
proto.api.commons.OptionTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.OpenTimesOption} */ (reader.readEnum());
      msg.setOpenTimesOption(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.AvailabilityOption} */ (reader.readEnum());
      msg.setAvailabilityOption(value);
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
proto.api.commons.OptionTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OptionTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OptionTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OptionTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.api.commons.OpenTimesOption} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.api.commons.AvailabilityOption} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional OpenTimesOption open_times_option = 1;
 * @return {!proto.api.commons.OpenTimesOption}
 */
proto.api.commons.OptionTypes.prototype.getOpenTimesOption = function() {
  return /** @type {!proto.api.commons.OpenTimesOption} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.OpenTimesOption} value
 * @return {!proto.api.commons.OptionTypes} returns this
 */
proto.api.commons.OptionTypes.prototype.setOpenTimesOption = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.OptionTypes.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.OptionTypes} returns this
 */
proto.api.commons.OptionTypes.prototype.clearOpenTimesOption = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.OptionTypes.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OptionTypes.prototype.hasOpenTimesOption = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailabilityOption availability_option = 2;
 * @return {!proto.api.commons.AvailabilityOption}
 */
proto.api.commons.OptionTypes.prototype.getAvailabilityOption = function() {
  return /** @type {!proto.api.commons.AvailabilityOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.AvailabilityOption} value
 * @return {!proto.api.commons.OptionTypes} returns this
 */
proto.api.commons.OptionTypes.prototype.setAvailabilityOption = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.OptionTypes.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.OptionTypes} returns this
 */
proto.api.commons.OptionTypes.prototype.clearAvailabilityOption = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.OptionTypes.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OptionTypes.prototype.hasAvailabilityOption = function() {
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
proto.api.commons.ReasonCode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ReasonCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ReasonCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ReasonCode.toObject = function(includeInstance, msg) {
  var f, obj = {
reasonCodeId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
schedulingActivitySid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
isPlanned: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
isPaid: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
datetimeSetToInactive: (f = msg.getDatetimeSetToInactive()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.ReasonCode}
 */
proto.api.commons.ReasonCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ReasonCode;
  return proto.api.commons.ReasonCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ReasonCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ReasonCode}
 */
proto.api.commons.ReasonCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setReasonCodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSchedulingActivitySid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPlanned(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatetimeSetToInactive(value);
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
proto.api.commons.ReasonCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ReasonCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ReasonCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ReasonCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReasonCodeId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getSchedulingActivitySid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getIsPlanned();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsPaid();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDatetimeSetToInactive();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 reason_code_id = 1;
 * @return {string}
 */
proto.api.commons.ReasonCode.prototype.getReasonCodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.setReasonCodeId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.ReasonCode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 scheduling_activity_sid = 3;
 * @return {string}
 */
proto.api.commons.ReasonCode.prototype.getSchedulingActivitySid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.setSchedulingActivitySid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional bool is_planned = 4;
 * @return {boolean}
 */
proto.api.commons.ReasonCode.prototype.getIsPlanned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.setIsPlanned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_paid = 5;
 * @return {boolean}
 */
proto.api.commons.ReasonCode.prototype.getIsPaid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.setIsPaid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_default = 6;
 * @return {boolean}
 */
proto.api.commons.ReasonCode.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp datetime_set_to_inactive = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ReasonCode.prototype.getDatetimeSetToInactive = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ReasonCode} returns this
*/
proto.api.commons.ReasonCode.prototype.setDatetimeSetToInactive = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ReasonCode} returns this
 */
proto.api.commons.ReasonCode.prototype.clearDatetimeSetToInactive = function() {
  return this.setDatetimeSetToInactive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ReasonCode.prototype.hasDatetimeSetToInactive = function() {
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
proto.api.commons.ScheduleSelector.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ScheduleSelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ScheduleSelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ScheduleSelector.toObject = function(includeInstance, msg) {
  var f, obj = {
scheduleSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
scheduleType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.ScheduleSelector}
 */
proto.api.commons.ScheduleSelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ScheduleSelector;
  return proto.api.commons.ScheduleSelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ScheduleSelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ScheduleSelector}
 */
proto.api.commons.ScheduleSelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduleSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.ScheduleType} */ (reader.readEnum());
      msg.setScheduleType(value);
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
proto.api.commons.ScheduleSelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ScheduleSelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ScheduleSelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ScheduleSelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getScheduleType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 schedule_sid = 1;
 * @return {number}
 */
proto.api.commons.ScheduleSelector.prototype.getScheduleSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ScheduleSelector} returns this
 */
proto.api.commons.ScheduleSelector.prototype.setScheduleSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ScheduleType schedule_type = 2;
 * @return {!proto.api.commons.ScheduleType}
 */
proto.api.commons.ScheduleSelector.prototype.getScheduleType = function() {
  return /** @type {!proto.api.commons.ScheduleType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ScheduleType} value
 * @return {!proto.api.commons.ScheduleSelector} returns this
 */
proto.api.commons.ScheduleSelector.prototype.setScheduleType = function(value) {
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
proto.api.commons.SkillProfileCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SkillProfileCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SkillProfileCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SkillProfileCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
skillProfileCategorySid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
skillProfileCategoryType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.SkillProfileCategory}
 */
proto.api.commons.SkillProfileCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SkillProfileCategory;
  return proto.api.commons.SkillProfileCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SkillProfileCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SkillProfileCategory}
 */
proto.api.commons.SkillProfileCategory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSkillProfileCategorySid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.SkillProfileCategory.CategoryType} */ (reader.readEnum());
      msg.setSkillProfileCategoryType(value);
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
proto.api.commons.SkillProfileCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SkillProfileCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SkillProfileCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SkillProfileCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillProfileCategorySid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getSkillProfileCategoryType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.api.commons.SkillProfileCategory.CategoryType = {
  SINGLE_SKILL_PROFILE: 0,
  SKILL_PROFILE_GROUP: 1
};

/**
 * optional int64 skill_profile_category_sid = 1;
 * @return {string}
 */
proto.api.commons.SkillProfileCategory.prototype.getSkillProfileCategorySid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.SkillProfileCategory} returns this
 */
proto.api.commons.SkillProfileCategory.prototype.setSkillProfileCategorySid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional CategoryType skill_profile_category_type = 2;
 * @return {!proto.api.commons.SkillProfileCategory.CategoryType}
 */
proto.api.commons.SkillProfileCategory.prototype.getSkillProfileCategoryType = function() {
  return /** @type {!proto.api.commons.SkillProfileCategory.CategoryType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.SkillProfileCategory.CategoryType} value
 * @return {!proto.api.commons.SkillProfileCategory} returns this
 */
proto.api.commons.SkillProfileCategory.prototype.setSkillProfileCategoryType = function(value) {
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
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SchedulingResultMetricForSkillCollection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SchedulingResultMetricForSkillCollection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.toObject = function(includeInstance, msg) {
  var f, obj = {
totalInternalIntervals: jspb.Message.getFieldWithDefault(msg, 1, 0),
totalIntervalsWithFteRequired: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalIntervalsWithFtesRemaining: jspb.Message.getFieldWithDefault(msg, 3, 0),
coverage: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
rootMeanSquare: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
hasResult: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
skillCollection: (f = msg.getSkillCollection()) && proto.api.commons.SkillProfileCategory.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SchedulingResultMetricForSkillCollection;
  return proto.api.commons.SchedulingResultMetricForSkillCollection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SchedulingResultMetricForSkillCollection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalInternalIntervals(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalIntervalsWithFteRequired(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalIntervalsWithFtesRemaining(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCoverage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRootMeanSquare(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasResult(value);
      break;
    case 7:
      var value = new proto.api.commons.SkillProfileCategory;
      reader.readMessage(value,proto.api.commons.SkillProfileCategory.deserializeBinaryFromReader);
      msg.setSkillCollection(value);
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
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SchedulingResultMetricForSkillCollection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SchedulingResultMetricForSkillCollection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalInternalIntervals();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalIntervalsWithFteRequired();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalIntervalsWithFtesRemaining();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCoverage();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getRootMeanSquare();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHasResult();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSkillCollection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.commons.SkillProfileCategory.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 total_internal_intervals = 1;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getTotalInternalIntervals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setTotalInternalIntervals = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_intervals_with_fte_required = 2;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getTotalIntervalsWithFteRequired = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setTotalIntervalsWithFteRequired = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total_intervals_with_ftes_remaining = 3;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getTotalIntervalsWithFtesRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setTotalIntervalsWithFtesRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float coverage = 4;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getCoverage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setCoverage = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float root_mean_square = 5;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getRootMeanSquare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setRootMeanSquare = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool has_result = 6;
 * @return {boolean}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getHasResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setHasResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional SkillProfileCategory skill_collection = 7;
 * @return {?proto.api.commons.SkillProfileCategory}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.getSkillCollection = function() {
  return /** @type{?proto.api.commons.SkillProfileCategory} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.SkillProfileCategory, 7));
};


/**
 * @param {?proto.api.commons.SkillProfileCategory|undefined} value
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
*/
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.setSkillCollection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection} returns this
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.clearSkillCollection = function() {
  return this.setSkillCollection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.SchedulingResultMetricForSkillCollection.prototype.hasSkillCollection = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.SchedulingResultMetric.repeatedFields_ = [7];



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
proto.api.commons.SchedulingResultMetric.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SchedulingResultMetric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SchedulingResultMetric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SchedulingResultMetric.toObject = function(includeInstance, msg) {
  var f, obj = {
totalInternalIntervals: jspb.Message.getFieldWithDefault(msg, 1, 0),
totalIntervalsWithFteRequired: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalIntervalsWithFtesRemaining: jspb.Message.getFieldWithDefault(msg, 3, 0),
coverage: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
rootMeanSquare: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
hasResult: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
metricsBySkillCollectionList: jspb.Message.toObjectList(msg.getMetricsBySkillCollectionList(),
    proto.api.commons.SchedulingResultMetricForSkillCollection.toObject, includeInstance)
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
 * @return {!proto.api.commons.SchedulingResultMetric}
 */
proto.api.commons.SchedulingResultMetric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SchedulingResultMetric;
  return proto.api.commons.SchedulingResultMetric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SchedulingResultMetric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SchedulingResultMetric}
 */
proto.api.commons.SchedulingResultMetric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalInternalIntervals(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalIntervalsWithFteRequired(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalIntervalsWithFtesRemaining(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCoverage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRootMeanSquare(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasResult(value);
      break;
    case 7:
      var value = new proto.api.commons.SchedulingResultMetricForSkillCollection;
      reader.readMessage(value,proto.api.commons.SchedulingResultMetricForSkillCollection.deserializeBinaryFromReader);
      msg.addMetricsBySkillCollection(value);
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
proto.api.commons.SchedulingResultMetric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SchedulingResultMetric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SchedulingResultMetric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SchedulingResultMetric.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalInternalIntervals();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalIntervalsWithFteRequired();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalIntervalsWithFtesRemaining();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCoverage();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getRootMeanSquare();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHasResult();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMetricsBySkillCollectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.commons.SchedulingResultMetricForSkillCollection.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 total_internal_intervals = 1;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetric.prototype.getTotalInternalIntervals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.setTotalInternalIntervals = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_intervals_with_fte_required = 2;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetric.prototype.getTotalIntervalsWithFteRequired = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.setTotalIntervalsWithFteRequired = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total_intervals_with_ftes_remaining = 3;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetric.prototype.getTotalIntervalsWithFtesRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.setTotalIntervalsWithFtesRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float coverage = 4;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetric.prototype.getCoverage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.setCoverage = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float root_mean_square = 5;
 * @return {number}
 */
proto.api.commons.SchedulingResultMetric.prototype.getRootMeanSquare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.setRootMeanSquare = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool has_result = 6;
 * @return {boolean}
 */
proto.api.commons.SchedulingResultMetric.prototype.getHasResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.setHasResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated SchedulingResultMetricForSkillCollection metrics_by_skill_collection = 7;
 * @return {!Array<!proto.api.commons.SchedulingResultMetricForSkillCollection>}
 */
proto.api.commons.SchedulingResultMetric.prototype.getMetricsBySkillCollectionList = function() {
  return /** @type{!Array<!proto.api.commons.SchedulingResultMetricForSkillCollection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.SchedulingResultMetricForSkillCollection, 7));
};


/**
 * @param {!Array<!proto.api.commons.SchedulingResultMetricForSkillCollection>} value
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
*/
proto.api.commons.SchedulingResultMetric.prototype.setMetricsBySkillCollectionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.SchedulingResultMetricForSkillCollection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.SchedulingResultMetricForSkillCollection}
 */
proto.api.commons.SchedulingResultMetric.prototype.addMetricsBySkillCollection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.SchedulingResultMetricForSkillCollection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.SchedulingResultMetric} returns this
 */
proto.api.commons.SchedulingResultMetric.prototype.clearMetricsBySkillCollectionList = function() {
  return this.setMetricsBySkillCollectionList([]);
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
proto.api.commons.ClientHistoryCacheInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ClientHistoryCacheInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ClientHistoryCacheInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ClientHistoryCacheInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
progressPercentage: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.ClientHistoryCacheInfo}
 */
proto.api.commons.ClientHistoryCacheInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ClientHistoryCacheInfo;
  return proto.api.commons.ClientHistoryCacheInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ClientHistoryCacheInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ClientHistoryCacheInfo}
 */
proto.api.commons.ClientHistoryCacheInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.HistoryCacheState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressPercentage(value);
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
proto.api.commons.ClientHistoryCacheInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ClientHistoryCacheInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ClientHistoryCacheInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ClientHistoryCacheInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProgressPercentage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional HistoryCacheState state = 1;
 * @return {!proto.api.commons.HistoryCacheState}
 */
proto.api.commons.ClientHistoryCacheInfo.prototype.getState = function() {
  return /** @type {!proto.api.commons.HistoryCacheState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.HistoryCacheState} value
 * @return {!proto.api.commons.ClientHistoryCacheInfo} returns this
 */
proto.api.commons.ClientHistoryCacheInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 progress_percentage = 2;
 * @return {number}
 */
proto.api.commons.ClientHistoryCacheInfo.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ClientHistoryCacheInfo} returns this
 */
proto.api.commons.ClientHistoryCacheInfo.prototype.setProgressPercentage = function(value) {
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
proto.api.commons.ErrorTrace.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ErrorTrace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ErrorTrace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ErrorTrace.toObject = function(includeInstance, msg) {
  var f, obj = {
grpcTraceBin: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.commons.ErrorTrace}
 */
proto.api.commons.ErrorTrace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ErrorTrace;
  return proto.api.commons.ErrorTrace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ErrorTrace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ErrorTrace}
 */
proto.api.commons.ErrorTrace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrpcTraceBin(value);
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
proto.api.commons.ErrorTrace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ErrorTrace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ErrorTrace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ErrorTrace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrpcTraceBin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string grpc_trace_bin = 1;
 * @return {string}
 */
proto.api.commons.ErrorTrace.prototype.getGrpcTraceBin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ErrorTrace} returns this
 */
proto.api.commons.ErrorTrace.prototype.setGrpcTraceBin = function(value) {
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
proto.api.commons.InitialSetupStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.InitialSetupStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.InitialSetupStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.InitialSetupStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
progressPercentage: jspb.Message.getFieldWithDefault(msg, 2, 0),
message: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.commons.InitialSetupStatus}
 */
proto.api.commons.InitialSetupStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.InitialSetupStatus;
  return proto.api.commons.InitialSetupStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.InitialSetupStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.InitialSetupStatus}
 */
proto.api.commons.InitialSetupStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.InitialSetupState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressPercentage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.api.commons.InitialSetupStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.InitialSetupStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.InitialSetupStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.InitialSetupStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProgressPercentage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional InitialSetupState state = 1;
 * @return {!proto.api.commons.InitialSetupState}
 */
proto.api.commons.InitialSetupStatus.prototype.getState = function() {
  return /** @type {!proto.api.commons.InitialSetupState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.InitialSetupState} value
 * @return {!proto.api.commons.InitialSetupStatus} returns this
 */
proto.api.commons.InitialSetupStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 progress_percentage = 2;
 * @return {number}
 */
proto.api.commons.InitialSetupStatus.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.InitialSetupStatus} returns this
 */
proto.api.commons.InitialSetupStatus.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.api.commons.InitialSetupStatus.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.InitialSetupStatus} returns this
 */
proto.api.commons.InitialSetupStatus.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AgentStateSegment.repeatedFields_ = [2];



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
proto.api.commons.AgentStateSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AgentStateSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AgentStateSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentStateSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
orderInRts: jspb.Message.getFieldWithDefault(msg, 1, 0),
statesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
widthInMinutes: jspb.Message.getFieldWithDefault(msg, 3, 0),
widthInSeconds: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.commons.AgentStateSegment}
 */
proto.api.commons.AgentStateSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AgentStateSegment;
  return proto.api.commons.AgentStateSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AgentStateSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AgentStateSegment}
 */
proto.api.commons.AgentStateSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderInRts(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidthInMinutes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidthInSeconds(value);
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
proto.api.commons.AgentStateSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AgentStateSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AgentStateSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentStateSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderInRts();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getWidthInMinutes();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWidthInSeconds();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 order_in_rts = 1;
 * @return {number}
 */
proto.api.commons.AgentStateSegment.prototype.getOrderInRts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AgentStateSegment} returns this
 */
proto.api.commons.AgentStateSegment.prototype.setOrderInRts = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RealTimeManagementState states = 2;
 * @return {!Array<!proto.api.commons.RealTimeManagementState>}
 */
proto.api.commons.AgentStateSegment.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.api.commons.RealTimeManagementState>} value
 * @return {!proto.api.commons.AgentStateSegment} returns this
 */
proto.api.commons.AgentStateSegment.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.api.commons.RealTimeManagementState} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AgentStateSegment} returns this
 */
proto.api.commons.AgentStateSegment.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AgentStateSegment} returns this
 */
proto.api.commons.AgentStateSegment.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};


/**
 * optional int32 width_in_minutes = 3;
 * @return {number}
 */
proto.api.commons.AgentStateSegment.prototype.getWidthInMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AgentStateSegment} returns this
 */
proto.api.commons.AgentStateSegment.prototype.setWidthInMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 width_in_seconds = 4;
 * @return {number}
 */
proto.api.commons.AgentStateSegment.prototype.getWidthInSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AgentStateSegment} returns this
 */
proto.api.commons.AgentStateSegment.prototype.setWidthInSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AgentStateSequence.repeatedFields_ = [3];



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
proto.api.commons.AgentStateSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AgentStateSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AgentStateSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentStateSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
wfmAgentSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
startDatetime: (f = msg.getStartDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stateSegmentsList: jspb.Message.toObjectList(msg.getStateSegmentsList(),
    proto.api.commons.AgentStateSegment.toObject, includeInstance)
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
 * @return {!proto.api.commons.AgentStateSequence}
 */
proto.api.commons.AgentStateSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AgentStateSequence;
  return proto.api.commons.AgentStateSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AgentStateSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AgentStateSequence}
 */
proto.api.commons.AgentStateSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWfmAgentSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDatetime(value);
      break;
    case 3:
      var value = new proto.api.commons.AgentStateSegment;
      reader.readMessage(value,proto.api.commons.AgentStateSegment.deserializeBinaryFromReader);
      msg.addStateSegments(value);
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
proto.api.commons.AgentStateSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AgentStateSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AgentStateSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentStateSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWfmAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartDatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStateSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.commons.AgentStateSegment.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 wfm_agent_sid = 1;
 * @return {number}
 */
proto.api.commons.AgentStateSequence.prototype.getWfmAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AgentStateSequence} returns this
 */
proto.api.commons.AgentStateSequence.prototype.setWfmAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_datetime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AgentStateSequence.prototype.getStartDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AgentStateSequence} returns this
*/
proto.api.commons.AgentStateSequence.prototype.setStartDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentStateSequence} returns this
 */
proto.api.commons.AgentStateSequence.prototype.clearStartDatetime = function() {
  return this.setStartDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentStateSequence.prototype.hasStartDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated AgentStateSegment state_segments = 3;
 * @return {!Array<!proto.api.commons.AgentStateSegment>}
 */
proto.api.commons.AgentStateSequence.prototype.getStateSegmentsList = function() {
  return /** @type{!Array<!proto.api.commons.AgentStateSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.AgentStateSegment, 3));
};


/**
 * @param {!Array<!proto.api.commons.AgentStateSegment>} value
 * @return {!proto.api.commons.AgentStateSequence} returns this
*/
proto.api.commons.AgentStateSequence.prototype.setStateSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.AgentStateSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AgentStateSegment}
 */
proto.api.commons.AgentStateSequence.prototype.addStateSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.AgentStateSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AgentStateSequence} returns this
 */
proto.api.commons.AgentStateSequence.prototype.clearStateSegmentsList = function() {
  return this.setStateSegmentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceAgentState.repeatedFields_ = [3];



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
proto.api.commons.AdherenceAgentState.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentState.toObject = function(includeInstance, msg) {
  var f, obj = {
wfmAgentSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
startDatetime: (f = msg.getStartDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
admStatesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
pauseCode: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.commons.AdherenceAgentState}
 */
proto.api.commons.AdherenceAgentState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentState;
  return proto.api.commons.AdherenceAgentState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentState}
 */
proto.api.commons.AdherenceAgentState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWfmAgentSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDatetime(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAdmStates(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPauseCode(value);
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
proto.api.commons.AdherenceAgentState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWfmAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartDatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAdmStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getPauseCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 wfm_agent_sid = 1;
 * @return {number}
 */
proto.api.commons.AdherenceAgentState.prototype.getWfmAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AdherenceAgentState} returns this
 */
proto.api.commons.AdherenceAgentState.prototype.setWfmAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_datetime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AdherenceAgentState.prototype.getStartDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AdherenceAgentState} returns this
*/
proto.api.commons.AdherenceAgentState.prototype.setStartDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceAgentState} returns this
 */
proto.api.commons.AdherenceAgentState.prototype.clearStartDatetime = function() {
  return this.setStartDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceAgentState.prototype.hasStartDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated RealTimeManagementState adm_states = 3;
 * @return {!Array<!proto.api.commons.RealTimeManagementState>}
 */
proto.api.commons.AdherenceAgentState.prototype.getAdmStatesList = function() {
  return /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.RealTimeManagementState>} value
 * @return {!proto.api.commons.AdherenceAgentState} returns this
 */
proto.api.commons.AdherenceAgentState.prototype.setAdmStatesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.RealTimeManagementState} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentState} returns this
 */
proto.api.commons.AdherenceAgentState.prototype.addAdmStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentState} returns this
 */
proto.api.commons.AdherenceAgentState.prototype.clearAdmStatesList = function() {
  return this.setAdmStatesList([]);
};


/**
 * optional string pause_code = 4;
 * @return {string}
 */
proto.api.commons.AdherenceAgentState.prototype.getPauseCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentState} returns this
 */
proto.api.commons.AdherenceAgentState.prototype.setPauseCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceAgentStateViolation.repeatedFields_ = [3,5,8];



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
proto.api.commons.AdherenceAgentStateViolation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentStateViolation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentStateViolation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentStateViolation.toObject = function(includeInstance, msg) {
  var f, obj = {
wfmAgentSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
startDatetime: (f = msg.getStartDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
expectedRtmStatesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
expectedPauseCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
actualRtmStatesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
actualPauseCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
violationDurationSeconds: jspb.Message.getFieldWithDefault(msg, 7, 0),
expectedPauseCodesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
adherenceAgentStateViolationId: jspb.Message.getFieldWithDefault(msg, 9, "0")
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
 * @return {!proto.api.commons.AdherenceAgentStateViolation}
 */
proto.api.commons.AdherenceAgentStateViolation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentStateViolation;
  return proto.api.commons.AdherenceAgentStateViolation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentStateViolation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentStateViolation}
 */
proto.api.commons.AdherenceAgentStateViolation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWfmAgentSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDatetime(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addExpectedRtmStates(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpectedPauseCode(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addActualRtmStates(values[i]);
      }
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActualPauseCode(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setViolationDurationSeconds(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addExpectedPauseCodes(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceAgentStateViolationId(value);
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
proto.api.commons.AdherenceAgentStateViolation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentStateViolation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentStateViolation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentStateViolation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWfmAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartDatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpectedRtmStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getExpectedPauseCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getActualRtmStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getActualPauseCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getViolationDurationSeconds();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getExpectedPauseCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getAdherenceAgentStateViolationId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      9,
      f
    );
  }
};


/**
 * optional int64 wfm_agent_sid = 1;
 * @return {number}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getWfmAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setWfmAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_datetime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getStartDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
*/
proto.api.commons.AdherenceAgentStateViolation.prototype.setStartDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.clearStartDatetime = function() {
  return this.setStartDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.hasStartDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated RealTimeManagementState expected_rtm_states = 3;
 * @return {!Array<!proto.api.commons.RealTimeManagementState>}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getExpectedRtmStatesList = function() {
  return /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.RealTimeManagementState>} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setExpectedRtmStatesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.RealTimeManagementState} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.addExpectedRtmStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.clearExpectedRtmStatesList = function() {
  return this.setExpectedRtmStatesList([]);
};


/**
 * optional string expected_pause_code = 4;
 * @return {string}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getExpectedPauseCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setExpectedPauseCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated RealTimeManagementState actual_rtm_states = 5;
 * @return {!Array<!proto.api.commons.RealTimeManagementState>}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getActualRtmStatesList = function() {
  return /** @type {!Array<!proto.api.commons.RealTimeManagementState>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.api.commons.RealTimeManagementState>} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setActualRtmStatesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.api.commons.RealTimeManagementState} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.addActualRtmStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.clearActualRtmStatesList = function() {
  return this.setActualRtmStatesList([]);
};


/**
 * optional string actual_pause_code = 6;
 * @return {string}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getActualPauseCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setActualPauseCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 violation_duration_seconds = 7;
 * @return {number}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getViolationDurationSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setViolationDurationSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated string expected_pause_codes = 8;
 * @return {!Array<string>}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getExpectedPauseCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setExpectedPauseCodesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.addExpectedPauseCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.clearExpectedPauseCodesList = function() {
  return this.setExpectedPauseCodesList([]);
};


/**
 * optional int64 adherence_agent_state_violation_id = 9;
 * @return {string}
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.getAdherenceAgentStateViolationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentStateViolation} returns this
 */
proto.api.commons.AdherenceAgentStateViolation.prototype.setAdherenceAgentStateViolationId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceAgentStates.repeatedFields_ = [1];



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
proto.api.commons.AdherenceAgentStates.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentStates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentStates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentStates.toObject = function(includeInstance, msg) {
  var f, obj = {
agentStatesList: jspb.Message.toObjectList(msg.getAgentStatesList(),
    proto.api.commons.AdherenceAgentState.toObject, includeInstance)
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
 * @return {!proto.api.commons.AdherenceAgentStates}
 */
proto.api.commons.AdherenceAgentStates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentStates;
  return proto.api.commons.AdherenceAgentStates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentStates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentStates}
 */
proto.api.commons.AdherenceAgentStates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.AdherenceAgentState;
      reader.readMessage(value,proto.api.commons.AdherenceAgentState.deserializeBinaryFromReader);
      msg.addAgentStates(value);
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
proto.api.commons.AdherenceAgentStates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentStates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentStates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentStates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.AdherenceAgentState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AdherenceAgentState agent_states = 1;
 * @return {!Array<!proto.api.commons.AdherenceAgentState>}
 */
proto.api.commons.AdherenceAgentStates.prototype.getAgentStatesList = function() {
  return /** @type{!Array<!proto.api.commons.AdherenceAgentState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.AdherenceAgentState, 1));
};


/**
 * @param {!Array<!proto.api.commons.AdherenceAgentState>} value
 * @return {!proto.api.commons.AdherenceAgentStates} returns this
*/
proto.api.commons.AdherenceAgentStates.prototype.setAgentStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.AdherenceAgentState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentState}
 */
proto.api.commons.AdherenceAgentStates.prototype.addAgentStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.AdherenceAgentState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentStates} returns this
 */
proto.api.commons.AdherenceAgentStates.prototype.clearAgentStatesList = function() {
  return this.setAgentStatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceAgentStateViolations.repeatedFields_ = [1];



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
proto.api.commons.AdherenceAgentStateViolations.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentStateViolations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentStateViolations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentStateViolations.toObject = function(includeInstance, msg) {
  var f, obj = {
violationsList: jspb.Message.toObjectList(msg.getViolationsList(),
    proto.api.commons.AdherenceAgentStateViolation.toObject, includeInstance)
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
 * @return {!proto.api.commons.AdherenceAgentStateViolations}
 */
proto.api.commons.AdherenceAgentStateViolations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentStateViolations;
  return proto.api.commons.AdherenceAgentStateViolations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentStateViolations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentStateViolations}
 */
proto.api.commons.AdherenceAgentStateViolations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.AdherenceAgentStateViolation;
      reader.readMessage(value,proto.api.commons.AdherenceAgentStateViolation.deserializeBinaryFromReader);
      msg.addViolations(value);
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
proto.api.commons.AdherenceAgentStateViolations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentStateViolations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentStateViolations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentStateViolations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViolationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.AdherenceAgentStateViolation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AdherenceAgentStateViolation violations = 1;
 * @return {!Array<!proto.api.commons.AdherenceAgentStateViolation>}
 */
proto.api.commons.AdherenceAgentStateViolations.prototype.getViolationsList = function() {
  return /** @type{!Array<!proto.api.commons.AdherenceAgentStateViolation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.AdherenceAgentStateViolation, 1));
};


/**
 * @param {!Array<!proto.api.commons.AdherenceAgentStateViolation>} value
 * @return {!proto.api.commons.AdherenceAgentStateViolations} returns this
*/
proto.api.commons.AdherenceAgentStateViolations.prototype.setViolationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.AdherenceAgentStateViolation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentStateViolation}
 */
proto.api.commons.AdherenceAgentStateViolations.prototype.addViolations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.AdherenceAgentStateViolation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentStateViolations} returns this
 */
proto.api.commons.AdherenceAgentStateViolations.prototype.clearViolationsList = function() {
  return this.setViolationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AgentLeavePetition.repeatedFields_ = [6];



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
proto.api.commons.AgentLeavePetition.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AgentLeavePetition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AgentLeavePetition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentLeavePetition.toObject = function(includeInstance, msg) {
  var f, obj = {
agentLeavePetitionId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
wfmAgentSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
petitionStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
petitionComment: jspb.Message.getFieldWithDefault(msg, 4, ""),
responseComment: jspb.Message.getFieldWithDefault(msg, 5, ""),
requestedDatetimeRangesList: jspb.Message.toObjectList(msg.getRequestedDatetimeRangesList(),
    proto.api.commons.DatetimeRange.toObject, includeInstance),
createdTime: (f = msg.getCreatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
archivedTime: (f = msg.getArchivedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
resolvedTime: (f = msg.getResolvedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
resolvedByUserId: jspb.Message.getFieldWithDefault(msg, 10, ""),
requestedHoursOff: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0)
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
 * @return {!proto.api.commons.AgentLeavePetition}
 */
proto.api.commons.AgentLeavePetition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AgentLeavePetition;
  return proto.api.commons.AgentLeavePetition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AgentLeavePetition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AgentLeavePetition}
 */
proto.api.commons.AgentLeavePetition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAgentLeavePetitionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWfmAgentSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.AgentLeavePetitionStatus} */ (reader.readEnum());
      msg.setPetitionStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPetitionComment(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseComment(value);
      break;
    case 6:
      var value = new proto.api.commons.DatetimeRange;
      reader.readMessage(value,proto.api.commons.DatetimeRange.deserializeBinaryFromReader);
      msg.addRequestedDatetimeRanges(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setArchivedTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setResolvedTime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolvedByUserId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRequestedHoursOff(value);
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
proto.api.commons.AgentLeavePetition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AgentLeavePetition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AgentLeavePetition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentLeavePetition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentLeavePetitionId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getWfmAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPetitionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPetitionComment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResponseComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequestedDatetimeRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.DatetimeRange.serializeBinaryToWriter
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getArchivedTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResolvedTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResolvedByUserId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRequestedHoursOff();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
};


/**
 * optional int64 agent_leave_petition_id = 1;
 * @return {string}
 */
proto.api.commons.AgentLeavePetition.prototype.getAgentLeavePetitionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setAgentLeavePetitionId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 wfm_agent_sid = 2;
 * @return {number}
 */
proto.api.commons.AgentLeavePetition.prototype.getWfmAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setWfmAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AgentLeavePetitionStatus petition_status = 3;
 * @return {!proto.api.commons.AgentLeavePetitionStatus}
 */
proto.api.commons.AgentLeavePetition.prototype.getPetitionStatus = function() {
  return /** @type {!proto.api.commons.AgentLeavePetitionStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.AgentLeavePetitionStatus} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setPetitionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string petition_comment = 4;
 * @return {string}
 */
proto.api.commons.AgentLeavePetition.prototype.getPetitionComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setPetitionComment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string response_comment = 5;
 * @return {string}
 */
proto.api.commons.AgentLeavePetition.prototype.getResponseComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setResponseComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated DatetimeRange requested_datetime_ranges = 6;
 * @return {!Array<!proto.api.commons.DatetimeRange>}
 */
proto.api.commons.AgentLeavePetition.prototype.getRequestedDatetimeRangesList = function() {
  return /** @type{!Array<!proto.api.commons.DatetimeRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.DatetimeRange, 6));
};


/**
 * @param {!Array<!proto.api.commons.DatetimeRange>} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
*/
proto.api.commons.AgentLeavePetition.prototype.setRequestedDatetimeRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.DatetimeRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.DatetimeRange}
 */
proto.api.commons.AgentLeavePetition.prototype.addRequestedDatetimeRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.DatetimeRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.clearRequestedDatetimeRangesList = function() {
  return this.setRequestedDatetimeRangesList([]);
};


/**
 * optional google.protobuf.Timestamp created_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AgentLeavePetition.prototype.getCreatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
*/
proto.api.commons.AgentLeavePetition.prototype.setCreatedTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.clearCreatedTime = function() {
  return this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentLeavePetition.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp archived_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AgentLeavePetition.prototype.getArchivedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
*/
proto.api.commons.AgentLeavePetition.prototype.setArchivedTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.clearArchivedTime = function() {
  return this.setArchivedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentLeavePetition.prototype.hasArchivedTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp resolved_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AgentLeavePetition.prototype.getResolvedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
*/
proto.api.commons.AgentLeavePetition.prototype.setResolvedTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.clearResolvedTime = function() {
  return this.setResolvedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentLeavePetition.prototype.hasResolvedTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string resolved_by_user_id = 10;
 * @return {string}
 */
proto.api.commons.AgentLeavePetition.prototype.getResolvedByUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setResolvedByUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional float requested_hours_off = 11;
 * @return {number}
 */
proto.api.commons.AgentLeavePetition.prototype.getRequestedHoursOff = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AgentLeavePetition} returns this
 */
proto.api.commons.AgentLeavePetition.prototype.setRequestedHoursOff = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
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
proto.api.commons.ConfigEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ConfigEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ConfigEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConfigEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
entitySid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
entityType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.ConfigEntity}
 */
proto.api.commons.ConfigEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ConfigEntity;
  return proto.api.commons.ConfigEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ConfigEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ConfigEntity}
 */
proto.api.commons.ConfigEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setEntitySid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.ConfigEntityType} */ (reader.readEnum());
      msg.setEntityType(value);
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
proto.api.commons.ConfigEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ConfigEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ConfigEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConfigEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitySid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getEntityType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 entity_sid = 1;
 * @return {string}
 */
proto.api.commons.ConfigEntity.prototype.getEntitySid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConfigEntity} returns this
 */
proto.api.commons.ConfigEntity.prototype.setEntitySid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional ConfigEntityType entity_type = 2;
 * @return {!proto.api.commons.ConfigEntityType}
 */
proto.api.commons.ConfigEntity.prototype.getEntityType = function() {
  return /** @type {!proto.api.commons.ConfigEntityType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ConfigEntityType} value
 * @return {!proto.api.commons.ConfigEntity} returns this
 */
proto.api.commons.ConfigEntity.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceRuleNotificationConfig.repeatedFields_ = [3];



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
proto.api.commons.AdherenceRuleNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceRuleNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceRuleNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceRuleNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
adherenceRuleNotificationConfigId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.api.commons.AdherenceRuleNotificationConfigEntry.toObject, includeInstance)
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
 * @return {!proto.api.commons.AdherenceRuleNotificationConfig}
 */
proto.api.commons.AdherenceRuleNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceRuleNotificationConfig;
  return proto.api.commons.AdherenceRuleNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceRuleNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceRuleNotificationConfig}
 */
proto.api.commons.AdherenceRuleNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceRuleNotificationConfigId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.api.commons.AdherenceRuleNotificationConfigEntry;
      reader.readMessage(value,proto.api.commons.AdherenceRuleNotificationConfigEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.api.commons.AdherenceRuleNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceRuleNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceRuleNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceRuleNotificationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdherenceRuleNotificationConfigId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.commons.AdherenceRuleNotificationConfigEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 adherence_rule_notification_config_id = 1;
 * @return {string}
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.getAdherenceRuleNotificationConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfig} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.setAdherenceRuleNotificationConfigId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfig} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AdherenceRuleNotificationConfigEntry entries = 3;
 * @return {!Array<!proto.api.commons.AdherenceRuleNotificationConfigEntry>}
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.api.commons.AdherenceRuleNotificationConfigEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.AdherenceRuleNotificationConfigEntry, 3));
};


/**
 * @param {!Array<!proto.api.commons.AdherenceRuleNotificationConfigEntry>} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfig} returns this
*/
proto.api.commons.AdherenceRuleNotificationConfig.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.AdherenceRuleNotificationConfigEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry}
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.AdherenceRuleNotificationConfigEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceRuleNotificationConfig} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfig.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
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
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceRuleNotificationConfigEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceRuleNotificationConfigEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
adherenceRuleNotificationConfigEntryId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
adherenceRuleNotificationConfigId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
recipientUserId: jspb.Message.getFieldWithDefault(msg, 3, ""),
notificationMedium: jspb.Message.getFieldWithDefault(msg, 4, 0),
secondsToWaitForNoResponse: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceRuleNotificationConfigEntry;
  return proto.api.commons.AdherenceRuleNotificationConfigEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceRuleNotificationConfigEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceRuleNotificationConfigEntryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceRuleNotificationConfigId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientUserId(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.AdherenceRuleNotificationMedium} */ (reader.readEnum());
      msg.setNotificationMedium(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSecondsToWaitForNoResponse(value);
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
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceRuleNotificationConfigEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceRuleNotificationConfigEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdherenceRuleNotificationConfigEntryId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAdherenceRuleNotificationConfigId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getRecipientUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNotificationMedium();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSecondsToWaitForNoResponse();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 adherence_rule_notification_config_entry_id = 1;
 * @return {string}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.getAdherenceRuleNotificationConfigEntryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.setAdherenceRuleNotificationConfigEntryId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 adherence_rule_notification_config_id = 2;
 * @return {string}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.getAdherenceRuleNotificationConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.setAdherenceRuleNotificationConfigId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string recipient_user_id = 3;
 * @return {string}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.getRecipientUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.setRecipientUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AdherenceRuleNotificationMedium notification_medium = 4;
 * @return {!proto.api.commons.AdherenceRuleNotificationMedium}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.getNotificationMedium = function() {
  return /** @type {!proto.api.commons.AdherenceRuleNotificationMedium} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleNotificationMedium} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.setNotificationMedium = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 seconds_to_wait_for_no_response = 5;
 * @return {number}
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.getSecondsToWaitForNoResponse = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AdherenceRuleNotificationConfigEntry} returns this
 */
proto.api.commons.AdherenceRuleNotificationConfigEntry.prototype.setSecondsToWaitForNoResponse = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.api.commons.AdherenceDepartmentalRuleAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceDepartmentalRuleAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceDepartmentalRuleAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceDepartmentalRuleAction.toObject = function(includeInstance, msg) {
  var f, obj = {
actionType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.commons.AdherenceDepartmentalRuleAction}
 */
proto.api.commons.AdherenceDepartmentalRuleAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceDepartmentalRuleAction;
  return proto.api.commons.AdherenceDepartmentalRuleAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceDepartmentalRuleAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceDepartmentalRuleAction}
 */
proto.api.commons.AdherenceDepartmentalRuleAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.AdherenceDepartmentalRuleActionType} */ (reader.readEnum());
      msg.setActionType(value);
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
proto.api.commons.AdherenceDepartmentalRuleAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceDepartmentalRuleAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceDepartmentalRuleAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceDepartmentalRuleAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AdherenceDepartmentalRuleActionType action_type = 1;
 * @return {!proto.api.commons.AdherenceDepartmentalRuleActionType}
 */
proto.api.commons.AdherenceDepartmentalRuleAction.prototype.getActionType = function() {
  return /** @type {!proto.api.commons.AdherenceDepartmentalRuleActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.AdherenceDepartmentalRuleActionType} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleAction} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleAction.prototype.setActionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceDepartmentalRule.repeatedFields_ = [9];



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
proto.api.commons.AdherenceDepartmentalRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceDepartmentalRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceDepartmentalRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceDepartmentalRule.toObject = function(includeInstance, msg) {
  var f, obj = {
adherenceDepartmentalRuleId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
selectedEntity: (f = msg.getSelectedEntity()) && proto.api.commons.ConfigEntity.toObject(includeInstance, f),
ruleRequirementType: jspb.Message.getFieldWithDefault(msg, 4, 0),
adherenceRuleNotificationConfigId: jspb.Message.getFieldWithDefault(msg, 5, "0"),
ruleRange: jspb.Message.getFieldWithDefault(msg, 6, 0),
customRange: (f = msg.getCustomRange()) && proto.api.commons.DatetimeRange.toObject(includeInstance, f),
ruleClausesList: jspb.Message.toObjectList(msg.getRuleClausesList(),
    proto.api.commons.AdherenceDepartmentalRuleClause.toObject, includeInstance)
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
 * @return {!proto.api.commons.AdherenceDepartmentalRule}
 */
proto.api.commons.AdherenceDepartmentalRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceDepartmentalRule;
  return proto.api.commons.AdherenceDepartmentalRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceDepartmentalRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceDepartmentalRule}
 */
proto.api.commons.AdherenceDepartmentalRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceDepartmentalRuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.api.commons.ConfigEntity;
      reader.readMessage(value,proto.api.commons.ConfigEntity.deserializeBinaryFromReader);
      msg.setSelectedEntity(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.AdherenceRuleRequirementType} */ (reader.readEnum());
      msg.setRuleRequirementType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceRuleNotificationConfigId(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.AdherenceRuleRange} */ (reader.readEnum());
      msg.setRuleRange(value);
      break;
    case 7:
      var value = new proto.api.commons.DatetimeRange;
      reader.readMessage(value,proto.api.commons.DatetimeRange.deserializeBinaryFromReader);
      msg.setCustomRange(value);
      break;
    case 9:
      var value = new proto.api.commons.AdherenceDepartmentalRuleClause;
      reader.readMessage(value,proto.api.commons.AdherenceDepartmentalRuleClause.deserializeBinaryFromReader);
      msg.addRuleClauses(value);
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
proto.api.commons.AdherenceDepartmentalRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceDepartmentalRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceDepartmentalRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceDepartmentalRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdherenceDepartmentalRuleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getSelectedEntity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.ConfigEntity.serializeBinaryToWriter
    );
  }
  f = message.getRuleRequirementType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAdherenceRuleNotificationConfigId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
  f = message.getRuleRange();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCustomRange();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.commons.DatetimeRange.serializeBinaryToWriter
    );
  }
  f = message.getRuleClausesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.commons.AdherenceDepartmentalRuleClause.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 adherence_departmental_rule_id = 1;
 * @return {string}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getAdherenceDepartmentalRuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.setAdherenceDepartmentalRuleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ConfigEntity selected_entity = 3;
 * @return {?proto.api.commons.ConfigEntity}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getSelectedEntity = function() {
  return /** @type{?proto.api.commons.ConfigEntity} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ConfigEntity, 3));
};


/**
 * @param {?proto.api.commons.ConfigEntity|undefined} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
*/
proto.api.commons.AdherenceDepartmentalRule.prototype.setSelectedEntity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.clearSelectedEntity = function() {
  return this.setSelectedEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.hasSelectedEntity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdherenceRuleRequirementType rule_requirement_type = 4;
 * @return {!proto.api.commons.AdherenceRuleRequirementType}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getRuleRequirementType = function() {
  return /** @type {!proto.api.commons.AdherenceRuleRequirementType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleRequirementType} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.setRuleRequirementType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 adherence_rule_notification_config_id = 5;
 * @return {string}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getAdherenceRuleNotificationConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.setAdherenceRuleNotificationConfigId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional AdherenceRuleRange rule_range = 6;
 * @return {!proto.api.commons.AdherenceRuleRange}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getRuleRange = function() {
  return /** @type {!proto.api.commons.AdherenceRuleRange} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleRange} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.setRuleRange = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional DatetimeRange custom_range = 7;
 * @return {?proto.api.commons.DatetimeRange}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getCustomRange = function() {
  return /** @type{?proto.api.commons.DatetimeRange} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.DatetimeRange, 7));
};


/**
 * @param {?proto.api.commons.DatetimeRange|undefined} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
*/
proto.api.commons.AdherenceDepartmentalRule.prototype.setCustomRange = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.clearCustomRange = function() {
  return this.setCustomRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.hasCustomRange = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated AdherenceDepartmentalRuleClause rule_clauses = 9;
 * @return {!Array<!proto.api.commons.AdherenceDepartmentalRuleClause>}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.getRuleClausesList = function() {
  return /** @type{!Array<!proto.api.commons.AdherenceDepartmentalRuleClause>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.AdherenceDepartmentalRuleClause, 9));
};


/**
 * @param {!Array<!proto.api.commons.AdherenceDepartmentalRuleClause>} value
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
*/
proto.api.commons.AdherenceDepartmentalRule.prototype.setRuleClausesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.AdherenceDepartmentalRuleClause=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause}
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.addRuleClauses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.AdherenceDepartmentalRuleClause, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceDepartmentalRule} returns this
 */
proto.api.commons.AdherenceDepartmentalRule.prototype.clearRuleClausesList = function() {
  return this.setRuleClausesList([]);
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
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceDepartmentalRuleClause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceDepartmentalRuleClause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceDepartmentalRuleClause.toObject = function(includeInstance, msg) {
  var f, obj = {
adherenceDepartmentalRuleClauseId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
adherenceDepartmentalRuleId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
action: (f = msg.getAction()) && proto.api.commons.AdherenceDepartmentalRuleAction.toObject(includeInstance, f),
condition: jspb.Message.getFieldWithDefault(msg, 4, 0),
amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
unit: jspb.Message.getFieldWithDefault(msg, 6, 0),
perAmount: (f = msg.getPerAmount()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
perUnit: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceDepartmentalRuleClause;
  return proto.api.commons.AdherenceDepartmentalRuleClause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceDepartmentalRuleClause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceDepartmentalRuleClauseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceDepartmentalRuleId(value);
      break;
    case 3:
      var value = new proto.api.commons.AdherenceDepartmentalRuleAction;
      reader.readMessage(value,proto.api.commons.AdherenceDepartmentalRuleAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.AdherenceRuleCondition} */ (reader.readEnum());
      msg.setCondition(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.AdherenceRuleUnit} */ (reader.readEnum());
      msg.setUnit(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setPerAmount(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.AdherenceRuleUnit} */ (reader.readEnum());
      msg.setPerUnit(value);
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
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceDepartmentalRuleClause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceDepartmentalRuleClause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceDepartmentalRuleClause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdherenceDepartmentalRuleClauseId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAdherenceDepartmentalRuleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.AdherenceDepartmentalRuleAction.serializeBinaryToWriter
    );
  }
  f = message.getCondition();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPerAmount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getPerUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional int64 adherence_departmental_rule_clause_id = 1;
 * @return {string}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getAdherenceDepartmentalRuleClauseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setAdherenceDepartmentalRuleClauseId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 adherence_departmental_rule_id = 2;
 * @return {string}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getAdherenceDepartmentalRuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setAdherenceDepartmentalRuleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional AdherenceDepartmentalRuleAction action = 3;
 * @return {?proto.api.commons.AdherenceDepartmentalRuleAction}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getAction = function() {
  return /** @type{?proto.api.commons.AdherenceDepartmentalRuleAction} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.AdherenceDepartmentalRuleAction, 3));
};


/**
 * @param {?proto.api.commons.AdherenceDepartmentalRuleAction|undefined} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
*/
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.hasAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdherenceRuleCondition condition = 4;
 * @return {!proto.api.commons.AdherenceRuleCondition}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getCondition = function() {
  return /** @type {!proto.api.commons.AdherenceRuleCondition} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleCondition} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setCondition = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 amount = 5;
 * @return {number}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional AdherenceRuleUnit unit = 6;
 * @return {!proto.api.commons.AdherenceRuleUnit}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getUnit = function() {
  return /** @type {!proto.api.commons.AdherenceRuleUnit} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleUnit} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Int32Value per_amount = 7;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getPerAmount = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 7));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
*/
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setPerAmount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.clearPerAmount = function() {
  return this.setPerAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.hasPerAmount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AdherenceRuleUnit per_unit = 8;
 * @return {!proto.api.commons.AdherenceRuleUnit}
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.getPerUnit = function() {
  return /** @type {!proto.api.commons.AdherenceRuleUnit} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleUnit} value
 * @return {!proto.api.commons.AdherenceDepartmentalRuleClause} returns this
 */
proto.api.commons.AdherenceDepartmentalRuleClause.prototype.setPerUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.AdherenceAgentRule.repeatedFields_ = [7];



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
proto.api.commons.AdherenceAgentRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentRule.toObject = function(includeInstance, msg) {
  var f, obj = {
adherenceAgentRuleId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
selectedEntity: (f = msg.getSelectedEntity()) && proto.api.commons.ConfigEntity.toObject(includeInstance, f),
ruleRequirementType: jspb.Message.getFieldWithDefault(msg, 4, 0),
adherenceRuleNotificationConfigId: jspb.Message.getFieldWithDefault(msg, 5, "0"),
ruleClausesList: jspb.Message.toObjectList(msg.getRuleClausesList(),
    proto.api.commons.AdherenceAgentRuleClause.toObject, includeInstance)
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
 * @return {!proto.api.commons.AdherenceAgentRule}
 */
proto.api.commons.AdherenceAgentRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentRule;
  return proto.api.commons.AdherenceAgentRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentRule}
 */
proto.api.commons.AdherenceAgentRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceAgentRuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.api.commons.ConfigEntity;
      reader.readMessage(value,proto.api.commons.ConfigEntity.deserializeBinaryFromReader);
      msg.setSelectedEntity(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.AdherenceRuleRequirementType} */ (reader.readEnum());
      msg.setRuleRequirementType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceRuleNotificationConfigId(value);
      break;
    case 7:
      var value = new proto.api.commons.AdherenceAgentRuleClause;
      reader.readMessage(value,proto.api.commons.AdherenceAgentRuleClause.deserializeBinaryFromReader);
      msg.addRuleClauses(value);
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
proto.api.commons.AdherenceAgentRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdherenceAgentRuleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getSelectedEntity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.ConfigEntity.serializeBinaryToWriter
    );
  }
  f = message.getRuleRequirementType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAdherenceRuleNotificationConfigId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
  f = message.getRuleClausesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.commons.AdherenceAgentRuleClause.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 adherence_agent_rule_id = 1;
 * @return {string}
 */
proto.api.commons.AdherenceAgentRule.prototype.getAdherenceAgentRuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
 */
proto.api.commons.AdherenceAgentRule.prototype.setAdherenceAgentRuleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.AdherenceAgentRule.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
 */
proto.api.commons.AdherenceAgentRule.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ConfigEntity selected_entity = 3;
 * @return {?proto.api.commons.ConfigEntity}
 */
proto.api.commons.AdherenceAgentRule.prototype.getSelectedEntity = function() {
  return /** @type{?proto.api.commons.ConfigEntity} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ConfigEntity, 3));
};


/**
 * @param {?proto.api.commons.ConfigEntity|undefined} value
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
*/
proto.api.commons.AdherenceAgentRule.prototype.setSelectedEntity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
 */
proto.api.commons.AdherenceAgentRule.prototype.clearSelectedEntity = function() {
  return this.setSelectedEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceAgentRule.prototype.hasSelectedEntity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdherenceRuleRequirementType rule_requirement_type = 4;
 * @return {!proto.api.commons.AdherenceRuleRequirementType}
 */
proto.api.commons.AdherenceAgentRule.prototype.getRuleRequirementType = function() {
  return /** @type {!proto.api.commons.AdherenceRuleRequirementType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleRequirementType} value
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
 */
proto.api.commons.AdherenceAgentRule.prototype.setRuleRequirementType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 adherence_rule_notification_config_id = 5;
 * @return {string}
 */
proto.api.commons.AdherenceAgentRule.prototype.getAdherenceRuleNotificationConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
 */
proto.api.commons.AdherenceAgentRule.prototype.setAdherenceRuleNotificationConfigId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * repeated AdherenceAgentRuleClause rule_clauses = 7;
 * @return {!Array<!proto.api.commons.AdherenceAgentRuleClause>}
 */
proto.api.commons.AdherenceAgentRule.prototype.getRuleClausesList = function() {
  return /** @type{!Array<!proto.api.commons.AdherenceAgentRuleClause>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.AdherenceAgentRuleClause, 7));
};


/**
 * @param {!Array<!proto.api.commons.AdherenceAgentRuleClause>} value
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
*/
proto.api.commons.AdherenceAgentRule.prototype.setRuleClausesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.AdherenceAgentRuleClause=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.AdherenceAgentRuleClause}
 */
proto.api.commons.AdherenceAgentRule.prototype.addRuleClauses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.AdherenceAgentRuleClause, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.AdherenceAgentRule} returns this
 */
proto.api.commons.AdherenceAgentRule.prototype.clearRuleClausesList = function() {
  return this.setRuleClausesList([]);
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
proto.api.commons.AdherenceAgentRuleAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentRuleAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentRuleAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentRuleAction.toObject = function(includeInstance, msg) {
  var f, obj = {
actionType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.commons.AdherenceAgentRuleAction}
 */
proto.api.commons.AdherenceAgentRuleAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentRuleAction;
  return proto.api.commons.AdherenceAgentRuleAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentRuleAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentRuleAction}
 */
proto.api.commons.AdherenceAgentRuleAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.AdherenceAgentRuleActionType} */ (reader.readEnum());
      msg.setActionType(value);
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
proto.api.commons.AdherenceAgentRuleAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentRuleAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentRuleAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentRuleAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AdherenceAgentRuleActionType action_type = 1;
 * @return {!proto.api.commons.AdherenceAgentRuleActionType}
 */
proto.api.commons.AdherenceAgentRuleAction.prototype.getActionType = function() {
  return /** @type {!proto.api.commons.AdherenceAgentRuleActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.AdherenceAgentRuleActionType} value
 * @return {!proto.api.commons.AdherenceAgentRuleAction} returns this
 */
proto.api.commons.AdherenceAgentRuleAction.prototype.setActionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.commons.AdherenceAgentRuleClause.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AdherenceAgentRuleClause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AdherenceAgentRuleClause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentRuleClause.toObject = function(includeInstance, msg) {
  var f, obj = {
adherenceAgentRuleClauseId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
adherenceAgentRuleId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
action: (f = msg.getAction()) && proto.api.commons.AdherenceAgentRuleAction.toObject(includeInstance, f),
condition: jspb.Message.getFieldWithDefault(msg, 4, 0),
amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
unit: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.api.commons.AdherenceAgentRuleClause}
 */
proto.api.commons.AdherenceAgentRuleClause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AdherenceAgentRuleClause;
  return proto.api.commons.AdherenceAgentRuleClause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AdherenceAgentRuleClause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AdherenceAgentRuleClause}
 */
proto.api.commons.AdherenceAgentRuleClause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceAgentRuleClauseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAdherenceAgentRuleId(value);
      break;
    case 3:
      var value = new proto.api.commons.AdherenceAgentRuleAction;
      reader.readMessage(value,proto.api.commons.AdherenceAgentRuleAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.AdherenceRuleCondition} */ (reader.readEnum());
      msg.setCondition(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.AdherenceRuleUnit} */ (reader.readEnum());
      msg.setUnit(value);
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
proto.api.commons.AdherenceAgentRuleClause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AdherenceAgentRuleClause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AdherenceAgentRuleClause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AdherenceAgentRuleClause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdherenceAgentRuleClauseId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAdherenceAgentRuleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.AdherenceAgentRuleAction.serializeBinaryToWriter
    );
  }
  f = message.getCondition();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional int64 adherence_agent_rule_clause_id = 1;
 * @return {string}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.getAdherenceAgentRuleClauseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.setAdherenceAgentRuleClauseId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 adherence_agent_rule_id = 2;
 * @return {string}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.getAdherenceAgentRuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.setAdherenceAgentRuleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional AdherenceAgentRuleAction action = 3;
 * @return {?proto.api.commons.AdherenceAgentRuleAction}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.getAction = function() {
  return /** @type{?proto.api.commons.AdherenceAgentRuleAction} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.AdherenceAgentRuleAction, 3));
};


/**
 * @param {?proto.api.commons.AdherenceAgentRuleAction|undefined} value
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
*/
proto.api.commons.AdherenceAgentRuleClause.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.hasAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdherenceRuleCondition condition = 4;
 * @return {!proto.api.commons.AdherenceRuleCondition}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.getCondition = function() {
  return /** @type {!proto.api.commons.AdherenceRuleCondition} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleCondition} value
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.setCondition = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 amount = 5;
 * @return {number}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional AdherenceRuleUnit unit = 6;
 * @return {!proto.api.commons.AdherenceRuleUnit}
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.getUnit = function() {
  return /** @type {!proto.api.commons.AdherenceRuleUnit} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.AdherenceRuleUnit} value
 * @return {!proto.api.commons.AdherenceAgentRuleClause} returns this
 */
proto.api.commons.AdherenceAgentRuleClause.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.api.commons.RegressionForecasterModelTypes = {
  RANDOM_FOREST: 0,
  ADABOOST: 1,
  GRADIENT_BOOSTING: 2,
  LINEAR_REGRESSION: 3,
  LINEAR_AVG: 4,
  SEGMENTED_LINEAR: 5,
  MLP: 6,
  AUTO: 7
};

/**
 * @enum {number}
 */
proto.api.commons.RegressionForecasterAvgsProcessingType = {
  FORECAST: 0,
  AVERAGES: 1,
  FIXED_AVERAGES: 2
};

/**
 * @enum {number}
 */
proto.api.commons.ConstraintTimeUnit = {
  MINUTES: 0,
  HOURS: 1,
  SHIFTS: 2,
  DAYS: 3,
  WEEKS: 4,
  MONTHS: 5,
  YEARS: 6
};

/**
 * @enum {number}
 */
proto.api.commons.ConfigEntityType = {
  CALL_CENTER_NODE: 0,
  CLIENT_NODE: 1,
  LOCATION_NODE: 2,
  PROGRAM_NODE: 3,
  AGENT_GROUP: 4,
  SHIFT_TEMPLATE: 5,
  WFM_AGENT: 6,
  PLACEMENT_RULE: 7,
  CONSTRAINT_RULE: 8,
  NON_SKILL_ACTIVITY: 9,
  AGENT_AVAILABILITY: 10,
  OPEN_TIMES: 11,
  SCHEDULING_ACTIVITY: 12,
  SKILL_PROFICIENCY: 13,
  SCHEDULE_SCENARIO: 14,
  SKILL: 15,
  TOUR_PATTERN: 16,
  TOUR_WEEK_PATTERN: 17,
  TOUR_SHIFT_INSTANCE_CONFIG: 18,
  TOUR_SHIFT_SEGMENT_CONFIG: 19,
  TOUR_AGENT_COLLECTION: 20
};

/**
 * @enum {number}
 */
proto.api.commons.ConstraintRuleType = {
  MIN_CONSEC_ON: 0,
  MAX_CONSEC_ON: 1,
  MIN_CONSEC_OFF: 2,
  MAX_CONSEC_OFF: 3,
  MIN_TOTAL_ON: 4,
  MAX_TOTAL_ON: 5,
  MIN_TOTAL_OFF: 6,
  MAX_TOTAL_OFF: 7,
  MIN_SKILL_LEVEL: 8
};

/**
 * @enum {number}
 */
proto.api.commons.DOWPlacementType = {
  MUST_NOT: 0,
  MAY: 1,
  MUST: 2
};

/**
 * @enum {number}
 */
proto.api.commons.OpenTimesOption = {
  CLOSED: 0,
  OPEN: 1
};

/**
 * @enum {number}
 */
proto.api.commons.AvailabilityOption = {
  AVAILABLE: 0,
  NOT_AVAILABLE: 1,
  PREFER_NOT_AVAILABLE: 2
};

/**
 * @enum {number}
 */
proto.api.commons.DayOfWeek = {
  MON: 0,
  TUE: 1,
  WED: 2,
  THU: 3,
  FRI: 4,
  SAT: 5,
  SUN: 6
};

/**
 * @enum {number}
 */
proto.api.commons.ConfigRelationshipType = {
  IS_ASSOCIATED_WITH: 0,
  IS_NOT_ASSOCIATED_WITH: 1,
  IS_MEMBER_OF: 2
};

/**
 * @enum {number}
 */
proto.api.commons.DiagnosticLevel = {
  INFORMATION: 0,
  SUGGESTION: 1,
  WARNING: 2,
  DIAGNOSTIC_ERROR: 3,
  INTERNAL_ERROR: 4
};

/**
 * @enum {number}
 */
proto.api.commons.DiagnosticCode = {
  GENERAL: 0,
  OK: 1,
  NO_SKILLS_IN_DICTIONARY: 2,
  AGENT_HAS_NO_SKILL_PROFICIENCIES: 3,
  AGENT_HAS_NO_SKILLS: 4,
  NO_SCHEDULING_ACTIVITIES_FOR_CONSTRAINT_RULES: 5,
  SCHEDULING_ACTIVITY_FOR_CONSTRAINT_RULE_NOT_FOUND: 6,
  SHIFT_TEMPLATE_CANNOT_BE_NONE: 7,
  SHIFT_TEMPLATE_HAS_NO_PLACEMENT_RULES: 8,
  NO_ONCALL_IN_SHIFT_TEMPLATE_PLACEMENT_RULES: 9,
  MIN_GT_MAX_DURATION_IN_SHIFT_TEMPLATE_PLACEMENT_RULES: 10,
  MIN_GT_MAX_AGENTS_IN_SHIFT_TEMPLATE: 11,
  NO_PLACEMENT_RULES_FOR_SHIFT_TEMPLATE: 12,
  ACTIVITIES_SHORTER_THAN_SHIFT: 13,
  NOT_ENOUGH_AGENTS_FOR_SHIFT: 14,
  PROGRAM_HAS_NO_AGENT_GROUPS: 15,
  PROGRAM_HAS_NO_SHIFT_TEMPLATES: 16,
  LOCATION_HAS_NO_PROGRAMS: 17,
  CLIENT_HAS_NO_LOCATIONS: 18,
  CALL_CENTER_HAS_NO_CLIENTS: 19,
  PROGRAM_HAS_INVALID_PARENT_LOCATION: 20,
  LOCATION_HAS_INVALID_PARENT_CLIENT: 21,
  CLIENT_HAS_INVALID_PARENT_CALL_CENTER: 22,
  AGENT_GROUP_HAS_INVALID_PARENT_NODE: 23,
  SHIFT_TEMPLATE_HAS_INVALID_PARENT_PROGRAM: 24,
  NO_SKILL_PROFICIENCY_FOR_MIN_SKILL_PROFICIENCY_CONSTRAINT_RULE: 25,
  TOO_MANY_AGENTS_WITH_LOCKED_SHIFTS_FOR_MIN_AGENTS: 26,
  AGENT_DOES_NOT_BELONG_TO_AN_AGENT_GROUP: 27,
  INVALID_CONSTRAINT_VAL_UNITS: 28,
  CONSTRAINT_GENERAL_FAILURE: 29,
  CANDIDATE_SHIFT_COLLISION_DETECTED: 30,
  CANDIDATE_SHIFT_AGENT_NOT_AVAILABLE: 31,
  CANDIDATE_CLOSED: 32,
  CONSTRAINT_ACTIVITY_NOT_FOUND: 33,
  CONSTRAINT_AGENT_DOES_NOT_HAVE_PROFICIENCY: 34,
  CONSTRAINT_AGENT_PROFICIENCY_TOO_LOW: 35,
  CONSTRAINT_MAX_TOTAL_ON_FAILURE: 36,
  CONSTRAINT_MIN_TOTAL_ON_FAILURE: 37,
  CONSTRAINT_MAX_TOTAL_OFF_FAILURE: 38,
  CONSTRAINT_MIN_TOTAL_OFF_FAILURE: 39,
  CONSTRAINT_MAX_CONSEC_ON_FAILURE: 40,
  CONSTRAINT_MIN_CONSEC_ON_FAILURE: 41,
  CONSTRAINT_MAX_CONSEC_OFF_FAILURE: 42,
  CONSTRAINT_MIN_CONSEC_OFF_FAILURE: 43,
  CONSTRAINT_CANNOT_HAVE_DAY_WEEK_MONTH_YEAR_SHIFT__PER_SHIFT: 44,
  CONSTRAINT_CANNOT_HAVE_DAY_WEEK_MONTH_YEAR__PER_MINUTES_HOURS: 45,
  CONSTRAINT_CONSECUTIVE_SHIFTS_RULE_NOT_ALLOWED: 46,
  CONSTRAINT_WITH_LARGER_PERIOD_PER_SMALL_PERIOD_NOT_ALLOWED: 47,
  CONSTRAINT_MIN_MAX_OFF_TIME_FOR_SHIFTS_NOT_ALLOWED: 48,
  CONSTRAINT_CANNOT_HAVE_CONSECUTIVE_TIME_PER_MULTIPLE_SHIFTS: 49,
  CANNOT_GENERATE_TOUR_PATTERNS_FOR_NON_TOUR_SHIFT_TEMPLATE: 50,
  TOUR_PATTERNS_NEEDED_TO_SCHEDULE_TOUR: 51,
  SHIFT_TEMPLATE_ACTIVITY_PLACEMENT_MIN_MAX_MUST_BE_MULTIPLE_OF_5_MINUTES: 52,
  NO_SHIFT_TEMPLATE_ACTIVITY_PLACEMENT_SEQUENCES_MATCH_SHIFT_MIN_MAX_WIDTH: 53,
  INVALID_TOUR_PATTERN: 54,
  INVALID_TOUR_AGENT_COLLECTION: 55,
  INVALID_TOUR_SHIFT_INSTANCE_CONFIG: 56,
  INVALID_TOUR_SHIFT_SEGMENT_CONFIG: 57,
  TOUR_SHIFT_SEGMENT_CONFIG_OVERLAP: 58,
  TOUR_SHIFT_SEGMENT_CONFIG_DOES_NOT_FIT: 59,
  TOUR_SHIFT_INSTANCE_CONFIG_OVERLAP: 60,
  WEEK_PATTERN_NUMBERS_NOT_UNIQUE_IN_TOUR_WEEK_PATTERNS: 61,
  WFM_AGENT_SIDS_NOT_UNIQUE_IN_TOUR_AGENT_COLLECTIONS: 62,
  FIST_WEEK_PATTERN_NUMBERS_NOT_UNIQUE_IN_TOUR_AGENT_COLLECTIONS: 63,
  FIRST_WEEK_PATTERN_NUMBERS_NOT_FOUND_IN_TOUR_WEEK_PATTERNS: 64,
  SHIFT_TEMPLATE_HAS_NO_ASSOCIATED_SCHEDULING_AGENT_GROUPS: 65,
  ATTEMPT_TO_BUILD_SCHEDULES_FOR_INVALID_PARENT_NODE: 66,
  SCHEDULABLE_AGENTS_DO_NOT_MEET_TEMPLATE_MINIMUM: 67,
  SCHEDULABLE_AGENTS_DO_NOT_MEET_TEMPLATE_MAXIMUM: 68,
  NO_OPEN_TIMES_SET_OR_INHERITED_BY_PROGRAM: 69,
  TOUR_AGENT_COLLECTIONS_NEEDED_TO_SCHEDULE_TOUR: 70,
  NO_PREDICTED_CALLS_IN_SCHEDULING_RANGE: 71,
  SHIFT_TEMPLATE_MIN_WIDTH_DOW_MISMATCH: 72
};

/**
 * @enum {number}
 */
proto.api.commons.PerformanceMetricType = {
  FTE_REQUIRED_VS_ACHIEVED_SIMPLE: 0,
  FTE_REQUIRED_VS_ACHIEVED_EXTENDED: 1,
  SERVICE_LEVEL_ANALYSIS: 2,
  SERVICE_LEVEL_MATRIX: 3,
  CONTACT_HANDLING_METRICS: 4,
  LOAD_FORECAST: 5
};

/**
 * @enum {number}
 */
proto.api.commons.ScheduleShouldInclude = {
  ONLY_SHIFT_INSTANCES: 0,
  ONLY_PERFORMANCE_METRICS: 1,
  SHIFT_INSTANCES_AND_PERFORMANCE_METRICS: 2
};

/**
 * @enum {number}
 */
proto.api.commons.ScheduleType = {
  DRAFT: 0,
  PUBLISHED: 1
};

/**
 * @enum {number}
 */
proto.api.commons.SchedulingTargetType = {
  COVERAGE: 0,
  SERVICE_LEVEL: 1
};

/**
 * @enum {number}
 */
proto.api.commons.BuildDraftStatus = {
  NO_BUILD: 0,
  IN_PROGRESS: 1,
  SUCCEEDED: 2,
  FAILED: 3,
  CANCELED: 4
};

/**
 * @enum {number}
 */
proto.api.commons.BitmapType = {
  COMPLETE: 0,
  ONLY_WEEKMAPS: 1,
  ONLY_CALENDAR_ITEMS: 2
};

/**
 * @enum {number}
 */
proto.api.commons.HistoryCacheState = {
  NOT_LOADED: 0,
  LOADING: 1,
  LOADING_COMPLETE: 2,
  LOADING_FAILED: 3
};

/**
 * @enum {number}
 */
proto.api.commons.InitialSetupState = {
  NOT_SETUP: 0,
  SETTING_UP: 1,
  SETUP_COMPLETE: 2,
  FAILURE: 3
};

/**
 * @enum {number}
 */
proto.api.commons.RealTimeManagementState = {
  UNSPECIFIED: 0,
  LOGGED_IN: 1,
  CALL_ON_HOLD: 4,
  OUTBOUND_CALL: 5,
  TRANSFER: 7,
  CONFERENCE: 8,
  READY: 9,
  NOT_READY: 10,
  WRAP_UP: 11,
  LOGGED_OUT: 13,
  PAUSE: 14
};

/**
 * @enum {number}
 */
proto.api.commons.AgentLeavePetitionStatus = {
  UNSPECIFIED_PETITION_STATUS: 0,
  PENDING_PETITION: 1,
  APPROVED_PETITION: 2,
  DENIED_PETITION: 3,
  CANCELLED_PETITION: 4
};

/**
 * @enum {number}
 */
proto.api.commons.SchedulingActivityClassification = {
  STANDARD_SCHEDULING_ACTIVITY: 0,
  ON_CALL_ACTIVITY: 1,
  TIME_OFF_ACTIVITY: 2,
  MEETING_ACTIVITY: 3
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceRuleNotificationMedium = {
  ADHERENCE_RULE_NOTIFICATION_MEDIUM_IN_PRODUCT: 0,
  ADHERENCE_RULE_NOTIFICATION_MEDIUM_EMAIL: 1
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceRuleRequirementType = {
  ADHERENCE_RULE_REQUIREMENT_TYPE_NOT_USED: 0,
  ADHERENCE_RULE_REQUIREMENT_TYPE_OPTIONAL: 1,
  ADHERENCE_RULE_REQUIREMENT_TYPE_MANDATORY: 2
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceRuleRange = {
  ADHERENCE_RULE_RANGE_START_OF_DAY: 0,
  ADHERENCE_RULE_RANGE_START_OF_WEEK: 1,
  ADHERENCE_RULE_RANGE_START_OF_MONTH: 2,
  ADHERENCE_RULE_RANGE_REST_OF_DAY: 3,
  ADHERENCE_RULE_RANGE_CUSTOM_DATE_RANGE: 4
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceDepartmentalRuleActionType = {
  ADHERENCE_DEPARTMENTAL_RULE_ACTION_TYPE_CALLS_ANSWERED: 0
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceRuleCondition = {
  ADHERENCE_RULE_CONDITION_GREATER_THAN: 0,
  ADHERENCE_RULE_CONDITION_GREATER_THAN_EQUAL: 1,
  ADHERENCE_RULE_CONDITION_LESS_THAN: 2,
  ADHERENCE_RULE_CONDITION_LESS_THAN_EQUAL: 3
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceRuleUnit = {
  ADHERENCE_RULE_UNIT_SECONDS: 0,
  ADHERENCE_RULE_UNIT_MINUTES: 1,
  ADHERENCE_RULE_UNIT_CALLS: 2,
  ADHERENCE_RULE_UNIT_PERCENTAGE: 3
};

/**
 * @enum {number}
 */
proto.api.commons.AdherenceAgentRuleActionType = {
  ADHERENCE_AGENT_RULE_ACTION_TYPE_WRAP_UP: 0,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_WAITING: 1,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_MANUAL_DIAL: 2,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_PREVIEW_DIAL: 3,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_ANSWER_CALLS: 4,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_ON_CALL: 5,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_ON_HOLD: 6,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_SHIFT_START: 7,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_SHIFT_START_LATE: 8,
  ADHERENCE_AGENT_RULE_ACTION_TYPE_SHIFT_END_EARLY: 9
};

goog.object.extend(exports, proto.api.commons);
