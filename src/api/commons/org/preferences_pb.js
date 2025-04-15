// source: api/commons/org/preferences.proto
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

var api_commons_ana_pb = require('../../../api/commons/ana_pb.js');
goog.object.extend(proto, api_commons_ana_pb);
var api_commons_classifier_pb = require('../../../api/commons/classifier_pb.js');
goog.object.extend(proto, api_commons_classifier_pb);
var api_commons_country_pb = require('../../../api/commons/country_pb.js');
goog.object.extend(proto, api_commons_country_pb);
var api_commons_enums_pb = require('../../../api/commons/enums_pb.js');
goog.object.extend(proto, api_commons_enums_pb);
var api_commons_lms_pb = require('../../../api/commons/lms_pb.js');
goog.object.extend(proto, api_commons_lms_pb);
var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_org_preferences_pb = require('../../../api/commons/org_preferences_pb.js');
goog.object.extend(proto, api_commons_org_preferences_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.commons.org.AdminClientPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.AgentPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.AuthenticationPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings', null, global);
goog.exportSymbol('proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings', null, global);
goog.exportSymbol('proto.api.commons.org.BargeInFiltering', null, global);
goog.exportSymbol('proto.api.commons.org.BargeInFiltering.AgentStatus', null, global);
goog.exportSymbol('proto.api.commons.org.BargeInFiltering.HuntGroup', null, global);
goog.exportSymbol('proto.api.commons.org.BroadcastPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.BroadcastTime', null, global);
goog.exportSymbol('proto.api.commons.org.BusinessHours', null, global);
goog.exportSymbol('proto.api.commons.org.BusinessPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.CertificateInfo', null, global);
goog.exportSymbol('proto.api.commons.org.CompliancePreferences', null, global);
goog.exportSymbol('proto.api.commons.org.ContactAreaCode', null, global);
goog.exportSymbol('proto.api.commons.org.ContactAreaCode.AreaCodeCase', null, global);
goog.exportSymbol('proto.api.commons.org.ContactFieldDescription', null, global);
goog.exportSymbol('proto.api.commons.org.ContactPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.CountryHoliday', null, global);
goog.exportSymbol('proto.api.commons.org.CustomDialOrder', null, global);
goog.exportSymbol('proto.api.commons.org.CustomImportFormat', null, global);
goog.exportSymbol('proto.api.commons.org.DashboardPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.DashboardQueuePreferences', null, global);
goog.exportSymbol('proto.api.commons.org.DayInterval', null, global);
goog.exportSymbol('proto.api.commons.org.DialOrder', null, global);
goog.exportSymbol('proto.api.commons.org.DialOrder.TypeCase', null, global);
goog.exportSymbol('proto.api.commons.org.DialOrderField', null, global);
goog.exportSymbol('proto.api.commons.org.EmailSmsPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.EndOfDayPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.FileNameSegment', null, global);
goog.exportSymbol('proto.api.commons.org.FileNamingConvention', null, global);
goog.exportSymbol('proto.api.commons.org.FilterPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.ImportFormat', null, global);
goog.exportSymbol('proto.api.commons.org.ImportFormat.FormatCase', null, global);
goog.exportSymbol('proto.api.commons.org.IncludedCallTypes', null, global);
goog.exportSymbol('proto.api.commons.org.MonthDayDate', null, global);
goog.exportSymbol('proto.api.commons.org.ObservedHoliday', null, global);
goog.exportSymbol('proto.api.commons.org.ObservedHoliday.DaytypeCase', null, global);
goog.exportSymbol('proto.api.commons.org.ObservedHolidays', null, global);
goog.exportSymbol('proto.api.commons.org.OrganizationPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.PhonePreferences', null, global);
goog.exportSymbol('proto.api.commons.org.ProgrammedDates', null, global);
goog.exportSymbol('proto.api.commons.org.ProgrammedDay', null, global);
goog.exportSymbol('proto.api.commons.org.ProgrammedDay.DaytypeCase', null, global);
goog.exportSymbol('proto.api.commons.org.Range', null, global);
goog.exportSymbol('proto.api.commons.org.RecordingPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.RecordingsFileNamingConvention', null, global);
goog.exportSymbol('proto.api.commons.org.RecordingsZipFileNamingConvention', null, global);
goog.exportSymbol('proto.api.commons.org.ReportFilter', null, global);
goog.exportSymbol('proto.api.commons.org.ReportFilter.ChoiceCase', null, global);
goog.exportSymbol('proto.api.commons.org.SchedulePreferences', null, global);
goog.exportSymbol('proto.api.commons.org.ScheduleRuleField', null, global);
goog.exportSymbol('proto.api.commons.org.Scorecards', null, global);
goog.exportSymbol('proto.api.commons.org.Scorecards.EvaluationInterval', null, global);
goog.exportSymbol('proto.api.commons.org.ScorecardsPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.TimeOfDay', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalytics', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalytics.Notify', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalytics.Number', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalytics.Number.Kind', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalytics.Redact', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalytics.Redact.WhereCase', null, global);
goog.exportSymbol('proto.api.commons.org.VoiceAnalyticsPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.WebhookPreferences', null, global);
goog.exportSymbol('proto.api.commons.org.ZipCodeField', null, global);
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
proto.api.commons.org.OrganizationPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.OrganizationPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.OrganizationPreferences.displayName = 'proto.api.commons.org.OrganizationPreferences';
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
proto.api.commons.org.AgentPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.AgentPreferences.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.AgentPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AgentPreferences.displayName = 'proto.api.commons.org.AgentPreferences';
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
proto.api.commons.org.ContactPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ContactPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ContactPreferences.displayName = 'proto.api.commons.org.ContactPreferences';
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
proto.api.commons.org.ImportFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.ImportFormat.oneofGroups_);
};
goog.inherits(proto.api.commons.org.ImportFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ImportFormat.displayName = 'proto.api.commons.org.ImportFormat';
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
proto.api.commons.org.CustomImportFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CustomImportFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CustomImportFormat.displayName = 'proto.api.commons.org.CustomImportFormat';
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
proto.api.commons.org.ContactAreaCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.ContactAreaCode.oneofGroups_);
};
goog.inherits(proto.api.commons.org.ContactAreaCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ContactAreaCode.displayName = 'proto.api.commons.org.ContactAreaCode';
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
proto.api.commons.org.ContactFieldDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ContactFieldDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ContactFieldDescription.displayName = 'proto.api.commons.org.ContactFieldDescription';
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
proto.api.commons.org.AuthenticationPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.AuthenticationPreferences.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.AuthenticationPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AuthenticationPreferences.displayName = 'proto.api.commons.org.AuthenticationPreferences';
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
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.displayName = 'proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings';
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
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.displayName = 'proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings';
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
proto.api.commons.org.WebhookPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.WebhookPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.WebhookPreferences.displayName = 'proto.api.commons.org.WebhookPreferences';
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
proto.api.commons.org.DashboardPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DashboardPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DashboardPreferences.displayName = 'proto.api.commons.org.DashboardPreferences';
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
proto.api.commons.org.IncludedCallTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.IncludedCallTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.IncludedCallTypes.displayName = 'proto.api.commons.org.IncludedCallTypes';
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
proto.api.commons.org.BargeInFiltering = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.BargeInFiltering, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BargeInFiltering.displayName = 'proto.api.commons.org.BargeInFiltering';
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
proto.api.commons.org.BargeInFiltering.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.BargeInFiltering.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BargeInFiltering.HuntGroup.displayName = 'proto.api.commons.org.BargeInFiltering.HuntGroup';
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
proto.api.commons.org.BargeInFiltering.AgentStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.BargeInFiltering.AgentStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BargeInFiltering.AgentStatus.displayName = 'proto.api.commons.org.BargeInFiltering.AgentStatus';
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
proto.api.commons.org.DashboardQueuePreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DashboardQueuePreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DashboardQueuePreferences.displayName = 'proto.api.commons.org.DashboardQueuePreferences';
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
proto.api.commons.org.PhonePreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.PhonePreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.PhonePreferences.displayName = 'proto.api.commons.org.PhonePreferences';
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
proto.api.commons.org.DialOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.DialOrder.oneofGroups_);
};
goog.inherits(proto.api.commons.org.DialOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DialOrder.displayName = 'proto.api.commons.org.DialOrder';
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
proto.api.commons.org.CustomDialOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CustomDialOrder.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CustomDialOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CustomDialOrder.displayName = 'proto.api.commons.org.CustomDialOrder';
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
proto.api.commons.org.DialOrderField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DialOrderField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DialOrderField.displayName = 'proto.api.commons.org.DialOrderField';
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
proto.api.commons.org.CompliancePreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CompliancePreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CompliancePreferences.displayName = 'proto.api.commons.org.CompliancePreferences';
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
proto.api.commons.org.ScheduleRuleField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ScheduleRuleField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ScheduleRuleField.displayName = 'proto.api.commons.org.ScheduleRuleField';
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
proto.api.commons.org.ZipCodeField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ZipCodeField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ZipCodeField.displayName = 'proto.api.commons.org.ZipCodeField';
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
proto.api.commons.org.BroadcastPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.BroadcastPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BroadcastPreferences.displayName = 'proto.api.commons.org.BroadcastPreferences';
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
proto.api.commons.org.BroadcastTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.BroadcastTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BroadcastTime.displayName = 'proto.api.commons.org.BroadcastTime';
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
proto.api.commons.org.SchedulePreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.SchedulePreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.SchedulePreferences.displayName = 'proto.api.commons.org.SchedulePreferences';
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
proto.api.commons.org.EmailSmsPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.EmailSmsPreferences.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.EmailSmsPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.EmailSmsPreferences.displayName = 'proto.api.commons.org.EmailSmsPreferences';
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
proto.api.commons.org.BusinessPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.BusinessPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BusinessPreferences.displayName = 'proto.api.commons.org.BusinessPreferences';
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
proto.api.commons.org.ScorecardsPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ScorecardsPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ScorecardsPreferences.displayName = 'proto.api.commons.org.ScorecardsPreferences';
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
proto.api.commons.org.Scorecards = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.Scorecards, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.Scorecards.displayName = 'proto.api.commons.org.Scorecards';
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
proto.api.commons.org.VoiceAnalyticsPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.VoiceAnalyticsPreferences.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.VoiceAnalyticsPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.VoiceAnalyticsPreferences.displayName = 'proto.api.commons.org.VoiceAnalyticsPreferences';
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
proto.api.commons.org.VoiceAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.VoiceAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.VoiceAnalytics.displayName = 'proto.api.commons.org.VoiceAnalytics';
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
proto.api.commons.org.VoiceAnalytics.Redact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.VoiceAnalytics.Redact.oneofGroups_);
};
goog.inherits(proto.api.commons.org.VoiceAnalytics.Redact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.VoiceAnalytics.Redact.displayName = 'proto.api.commons.org.VoiceAnalytics.Redact';
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
proto.api.commons.org.VoiceAnalytics.Number = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.VoiceAnalytics.Number, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.VoiceAnalytics.Number.displayName = 'proto.api.commons.org.VoiceAnalytics.Number';
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
proto.api.commons.org.VoiceAnalytics.Notify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.VoiceAnalytics.Notify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.VoiceAnalytics.Notify.displayName = 'proto.api.commons.org.VoiceAnalytics.Notify';
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
proto.api.commons.org.EndOfDayPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.EndOfDayPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.EndOfDayPreferences.displayName = 'proto.api.commons.org.EndOfDayPreferences';
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
proto.api.commons.org.FilterPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.FilterPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.FilterPreferences.displayName = 'proto.api.commons.org.FilterPreferences';
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
proto.api.commons.org.ReportFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.ReportFilter.oneofGroups_);
};
goog.inherits(proto.api.commons.org.ReportFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ReportFilter.displayName = 'proto.api.commons.org.ReportFilter';
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
proto.api.commons.org.RecordingPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.RecordingPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.RecordingPreferences.displayName = 'proto.api.commons.org.RecordingPreferences';
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
proto.api.commons.org.RecordingsFileNamingConvention = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.RecordingsFileNamingConvention, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.RecordingsFileNamingConvention.displayName = 'proto.api.commons.org.RecordingsFileNamingConvention';
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
proto.api.commons.org.RecordingsZipFileNamingConvention = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.RecordingsZipFileNamingConvention, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.RecordingsZipFileNamingConvention.displayName = 'proto.api.commons.org.RecordingsZipFileNamingConvention';
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
proto.api.commons.org.FileNamingConvention = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.FileNamingConvention.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.FileNamingConvention, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.FileNamingConvention.displayName = 'proto.api.commons.org.FileNamingConvention';
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
proto.api.commons.org.FileNameSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.FileNameSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.FileNameSegment.displayName = 'proto.api.commons.org.FileNameSegment';
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
proto.api.commons.org.AdminClientPreferences = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.AdminClientPreferences.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.AdminClientPreferences, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AdminClientPreferences.displayName = 'proto.api.commons.org.AdminClientPreferences';
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
proto.api.commons.org.BusinessHours = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.BusinessHours.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.BusinessHours, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.BusinessHours.displayName = 'proto.api.commons.org.BusinessHours';
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
proto.api.commons.org.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.Range.displayName = 'proto.api.commons.org.Range';
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
proto.api.commons.org.TimeOfDay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TimeOfDay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TimeOfDay.displayName = 'proto.api.commons.org.TimeOfDay';
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
proto.api.commons.org.DayInterval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DayInterval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DayInterval.displayName = 'proto.api.commons.org.DayInterval';
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
proto.api.commons.org.MonthDayDate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.MonthDayDate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.MonthDayDate.displayName = 'proto.api.commons.org.MonthDayDate';
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
proto.api.commons.org.CountryHoliday = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CountryHoliday.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CountryHoliday, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CountryHoliday.displayName = 'proto.api.commons.org.CountryHoliday';
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
proto.api.commons.org.ProgrammedDay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.ProgrammedDay.oneofGroups_);
};
goog.inherits(proto.api.commons.org.ProgrammedDay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ProgrammedDay.displayName = 'proto.api.commons.org.ProgrammedDay';
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
proto.api.commons.org.ProgrammedDates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.ProgrammedDates.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.ProgrammedDates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ProgrammedDates.displayName = 'proto.api.commons.org.ProgrammedDates';
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
proto.api.commons.org.ObservedHolidays = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.ObservedHolidays.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.ObservedHolidays, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ObservedHolidays.displayName = 'proto.api.commons.org.ObservedHolidays';
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
proto.api.commons.org.ObservedHoliday = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.ObservedHoliday.oneofGroups_);
};
goog.inherits(proto.api.commons.org.ObservedHoliday, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ObservedHoliday.displayName = 'proto.api.commons.org.ObservedHoliday';
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
proto.api.commons.org.CertificateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CertificateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CertificateInfo.displayName = 'proto.api.commons.org.CertificateInfo';
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
proto.api.commons.org.OrganizationPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.OrganizationPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.OrganizationPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.OrganizationPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultCountry: jspb.Message.getFieldWithDefault(msg, 10, 0),
timeZone: jspb.Message.getFieldWithDefault(msg, 11, 0),
displayLanguage: jspb.Message.getFieldWithDefault(msg, 12, 0),
localePreferences: (f = msg.getLocalePreferences()) && api_commons_org_preferences_pb.LocalePreferences.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.OrganizationPreferences}
 */
proto.api.commons.org.OrganizationPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.OrganizationPreferences;
  return proto.api.commons.org.OrganizationPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.OrganizationPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.OrganizationPreferences}
 */
proto.api.commons.org.OrganizationPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setDefaultCountry(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimeZone(value);
      break;
    case 12:
      var value = /** @type {!proto.api.commons.DisplayLanguage} */ (reader.readEnum());
      msg.setDisplayLanguage(value);
      break;
    case 13:
      var value = new api_commons_org_preferences_pb.LocalePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.LocalePreferences.deserializeBinaryFromReader);
      msg.setLocalePreferences(value);
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
proto.api.commons.org.OrganizationPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.OrganizationPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.OrganizationPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.OrganizationPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTimeZone();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getDisplayLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getLocalePreferences();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      api_commons_org_preferences_pb.LocalePreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.OrganizationPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.OrganizationPreferences} returns this
 */
proto.api.commons.org.OrganizationPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.Country default_country = 10;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.OrganizationPreferences.prototype.getDefaultCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.OrganizationPreferences} returns this
 */
proto.api.commons.org.OrganizationPreferences.prototype.setDefaultCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional api.commons.TimeZone time_zone = 11;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.commons.org.OrganizationPreferences.prototype.getTimeZone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.commons.org.OrganizationPreferences} returns this
 */
proto.api.commons.org.OrganizationPreferences.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional api.commons.DisplayLanguage display_language = 12;
 * @return {!proto.api.commons.DisplayLanguage}
 */
proto.api.commons.org.OrganizationPreferences.prototype.getDisplayLanguage = function() {
  return /** @type {!proto.api.commons.DisplayLanguage} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.api.commons.DisplayLanguage} value
 * @return {!proto.api.commons.org.OrganizationPreferences} returns this
 */
proto.api.commons.org.OrganizationPreferences.prototype.setDisplayLanguage = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional api.commons.LocalePreferences locale_preferences = 13;
 * @return {?proto.api.commons.LocalePreferences}
 */
proto.api.commons.org.OrganizationPreferences.prototype.getLocalePreferences = function() {
  return /** @type{?proto.api.commons.LocalePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.LocalePreferences, 13));
};


/**
 * @param {?proto.api.commons.LocalePreferences|undefined} value
 * @return {!proto.api.commons.org.OrganizationPreferences} returns this
*/
proto.api.commons.org.OrganizationPreferences.prototype.setLocalePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.OrganizationPreferences} returns this
 */
proto.api.commons.org.OrganizationPreferences.prototype.clearLocalePreferences = function() {
  return this.setLocalePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.OrganizationPreferences.prototype.hasLocalePreferences = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.AgentPreferences.repeatedFields_ = [14,15];



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
proto.api.commons.org.AgentPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AgentPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AgentPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultAgentDialIn: jspb.Message.getFieldWithDefault(msg, 10, ""),
pbxExtensionLength: jspb.Message.getFieldWithDefault(msg, 11, 0),
defaultSoftphoneVolumeIn: jspb.Message.getFieldWithDefault(msg, 12, 0),
defaultSoftphoneVolumeOut: jspb.Message.getFieldWithDefault(msg, 13, 0),
configDialInNumbersList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
clientDialInNumbersList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
manualDialCallerIdPrivacy: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
useManualDialCallerIdPrivacy: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
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
 * @return {!proto.api.commons.org.AgentPreferences}
 */
proto.api.commons.org.AgentPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AgentPreferences;
  return proto.api.commons.org.AgentPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AgentPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AgentPreferences}
 */
proto.api.commons.org.AgentPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultAgentDialIn(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPbxExtensionLength(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultSoftphoneVolumeIn(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultSoftphoneVolumeOut(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addConfigDialInNumbers(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientDialInNumbers(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManualDialCallerIdPrivacy(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseManualDialCallerIdPrivacy(value);
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
proto.api.commons.org.AgentPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AgentPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AgentPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultAgentDialIn();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPbxExtensionLength();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getDefaultSoftphoneVolumeIn();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getDefaultSoftphoneVolumeOut();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getConfigDialInNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getClientDialInNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getManualDialCallerIdPrivacy();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getUseManualDialCallerIdPrivacy();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.AgentPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string default_agent_dial_in = 10;
 * @return {string}
 */
proto.api.commons.org.AgentPreferences.prototype.getDefaultAgentDialIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setDefaultAgentDialIn = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 pbx_extension_length = 11;
 * @return {number}
 */
proto.api.commons.org.AgentPreferences.prototype.getPbxExtensionLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setPbxExtensionLength = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 default_softphone_volume_in = 12;
 * @return {number}
 */
proto.api.commons.org.AgentPreferences.prototype.getDefaultSoftphoneVolumeIn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setDefaultSoftphoneVolumeIn = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 default_softphone_volume_out = 13;
 * @return {number}
 */
proto.api.commons.org.AgentPreferences.prototype.getDefaultSoftphoneVolumeOut = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setDefaultSoftphoneVolumeOut = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated string config_dial_in_numbers = 14;
 * @return {!Array<string>}
 */
proto.api.commons.org.AgentPreferences.prototype.getConfigDialInNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setConfigDialInNumbersList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.addConfigDialInNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.clearConfigDialInNumbersList = function() {
  return this.setConfigDialInNumbersList([]);
};


/**
 * repeated string client_dial_in_numbers = 15;
 * @return {!Array<string>}
 */
proto.api.commons.org.AgentPreferences.prototype.getClientDialInNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setClientDialInNumbersList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.addClientDialInNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.clearClientDialInNumbersList = function() {
  return this.setClientDialInNumbersList([]);
};


/**
 * optional bool manual_dial_caller_id_privacy = 16;
 * @return {boolean}
 */
proto.api.commons.org.AgentPreferences.prototype.getManualDialCallerIdPrivacy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setManualDialCallerIdPrivacy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool use_manual_dial_caller_id_privacy = 17;
 * @return {boolean}
 */
proto.api.commons.org.AgentPreferences.prototype.getUseManualDialCallerIdPrivacy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AgentPreferences} returns this
 */
proto.api.commons.org.AgentPreferences.prototype.setUseManualDialCallerIdPrivacy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
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
proto.api.commons.org.ContactPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ContactPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ContactPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultContactImportFormat: (f = msg.getDefaultContactImportFormat()) && proto.api.commons.org.ImportFormat.toObject(includeInstance, f),
useContactImportFormat: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
defaultContactAreaCode: (f = msg.getDefaultContactAreaCode()) && proto.api.commons.org.ContactAreaCode.toObject(includeInstance, f),
useContactAreaCode: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
discardRecordDefaultAbsentNumbersHandling: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
defaultContactsImportRandomization: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
defaultEmailColumn: jspb.Message.getFieldWithDefault(msg, 16, ""),
defaultDuplicateHandling: jspb.Message.getFieldWithDefault(msg, 17, 0)
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
 * @return {!proto.api.commons.org.ContactPreferences}
 */
proto.api.commons.org.ContactPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ContactPreferences;
  return proto.api.commons.org.ContactPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ContactPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ContactPreferences}
 */
proto.api.commons.org.ContactPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new proto.api.commons.org.ImportFormat;
      reader.readMessage(value,proto.api.commons.org.ImportFormat.deserializeBinaryFromReader);
      msg.setDefaultContactImportFormat(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseContactImportFormat(value);
      break;
    case 12:
      var value = new proto.api.commons.org.ContactAreaCode;
      reader.readMessage(value,proto.api.commons.org.ContactAreaCode.deserializeBinaryFromReader);
      msg.setDefaultContactAreaCode(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseContactAreaCode(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDiscardRecordDefaultAbsentNumbersHandling(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultContactsImportRandomization(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultEmailColumn(value);
      break;
    case 17:
      var value = /** @type {!proto.api.commons.DefaultDuplicateHandling} */ (reader.readEnum());
      msg.setDefaultDuplicateHandling(value);
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
proto.api.commons.org.ContactPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ContactPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ContactPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultContactImportFormat();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.org.ImportFormat.serializeBinaryToWriter
    );
  }
  f = message.getUseContactImportFormat();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDefaultContactAreaCode();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.api.commons.org.ContactAreaCode.serializeBinaryToWriter
    );
  }
  f = message.getUseContactAreaCode();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDiscardRecordDefaultAbsentNumbersHandling();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDefaultContactsImportRandomization();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getDefaultEmailColumn();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getDefaultDuplicateHandling();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.ContactPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ImportFormat default_contact_import_format = 10;
 * @return {?proto.api.commons.org.ImportFormat}
 */
proto.api.commons.org.ContactPreferences.prototype.getDefaultContactImportFormat = function() {
  return /** @type{?proto.api.commons.org.ImportFormat} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ImportFormat, 10));
};


/**
 * @param {?proto.api.commons.org.ImportFormat|undefined} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
*/
proto.api.commons.org.ContactPreferences.prototype.setDefaultContactImportFormat = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.clearDefaultContactImportFormat = function() {
  return this.setDefaultContactImportFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ContactPreferences.prototype.hasDefaultContactImportFormat = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool use_contact_import_format = 11;
 * @return {boolean}
 */
proto.api.commons.org.ContactPreferences.prototype.getUseContactImportFormat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setUseContactImportFormat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional ContactAreaCode default_contact_area_code = 12;
 * @return {?proto.api.commons.org.ContactAreaCode}
 */
proto.api.commons.org.ContactPreferences.prototype.getDefaultContactAreaCode = function() {
  return /** @type{?proto.api.commons.org.ContactAreaCode} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ContactAreaCode, 12));
};


/**
 * @param {?proto.api.commons.org.ContactAreaCode|undefined} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
*/
proto.api.commons.org.ContactPreferences.prototype.setDefaultContactAreaCode = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.clearDefaultContactAreaCode = function() {
  return this.setDefaultContactAreaCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ContactPreferences.prototype.hasDefaultContactAreaCode = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool use_contact_area_code = 13;
 * @return {boolean}
 */
proto.api.commons.org.ContactPreferences.prototype.getUseContactAreaCode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setUseContactAreaCode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool discard_record_default_absent_numbers_handling = 14;
 * @return {boolean}
 */
proto.api.commons.org.ContactPreferences.prototype.getDiscardRecordDefaultAbsentNumbersHandling = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setDiscardRecordDefaultAbsentNumbersHandling = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool default_contacts_import_randomization = 15;
 * @return {boolean}
 */
proto.api.commons.org.ContactPreferences.prototype.getDefaultContactsImportRandomization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setDefaultContactsImportRandomization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string default_email_column = 16;
 * @return {string}
 */
proto.api.commons.org.ContactPreferences.prototype.getDefaultEmailColumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setDefaultEmailColumn = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional api.commons.DefaultDuplicateHandling default_duplicate_handling = 17;
 * @return {!proto.api.commons.DefaultDuplicateHandling}
 */
proto.api.commons.org.ContactPreferences.prototype.getDefaultDuplicateHandling = function() {
  return /** @type {!proto.api.commons.DefaultDuplicateHandling} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.api.commons.DefaultDuplicateHandling} value
 * @return {!proto.api.commons.org.ContactPreferences} returns this
 */
proto.api.commons.org.ContactPreferences.prototype.setDefaultDuplicateHandling = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.ImportFormat.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.ImportFormat.FormatCase = {
  FORMAT_NOT_SET: 0,
  STANDARD: 1,
  CUSTOM: 2
};

/**
 * @return {proto.api.commons.org.ImportFormat.FormatCase}
 */
proto.api.commons.org.ImportFormat.prototype.getFormatCase = function() {
  return /** @type {proto.api.commons.org.ImportFormat.FormatCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.ImportFormat.oneofGroups_[0]));
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
proto.api.commons.org.ImportFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ImportFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ImportFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ImportFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
standard: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
custom: (f = msg.getCustom()) && proto.api.commons.org.CustomImportFormat.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.ImportFormat}
 */
proto.api.commons.org.ImportFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ImportFormat;
  return proto.api.commons.org.ImportFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ImportFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ImportFormat}
 */
proto.api.commons.org.ImportFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.StandardImportFormat} */ (reader.readEnum());
      msg.setStandard(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CustomImportFormat;
      reader.readMessage(value,proto.api.commons.org.CustomImportFormat.deserializeBinaryFromReader);
      msg.setCustom(value);
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
proto.api.commons.org.ImportFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ImportFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ImportFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ImportFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.api.commons.StandardImportFormat} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.CustomImportFormat.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.StandardImportFormat standard = 1;
 * @return {!proto.api.commons.StandardImportFormat}
 */
proto.api.commons.org.ImportFormat.prototype.getStandard = function() {
  return /** @type {!proto.api.commons.StandardImportFormat} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.StandardImportFormat} value
 * @return {!proto.api.commons.org.ImportFormat} returns this
 */
proto.api.commons.org.ImportFormat.prototype.setStandard = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.ImportFormat.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.ImportFormat} returns this
 */
proto.api.commons.org.ImportFormat.prototype.clearStandard = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.ImportFormat.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ImportFormat.prototype.hasStandard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomImportFormat custom = 2;
 * @return {?proto.api.commons.org.CustomImportFormat}
 */
proto.api.commons.org.ImportFormat.prototype.getCustom = function() {
  return /** @type{?proto.api.commons.org.CustomImportFormat} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CustomImportFormat, 2));
};


/**
 * @param {?proto.api.commons.org.CustomImportFormat|undefined} value
 * @return {!proto.api.commons.org.ImportFormat} returns this
*/
proto.api.commons.org.ImportFormat.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.commons.org.ImportFormat.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ImportFormat} returns this
 */
proto.api.commons.org.ImportFormat.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ImportFormat.prototype.hasCustom = function() {
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
proto.api.commons.org.CustomImportFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CustomImportFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CustomImportFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CustomImportFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.org.CustomImportFormat}
 */
proto.api.commons.org.CustomImportFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CustomImportFormat;
  return proto.api.commons.org.CustomImportFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CustomImportFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CustomImportFormat}
 */
proto.api.commons.org.CustomImportFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
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
proto.api.commons.org.CustomImportFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CustomImportFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CustomImportFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CustomImportFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.commons.org.CustomImportFormat.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.CustomImportFormat} returns this
 */
proto.api.commons.org.CustomImportFormat.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.CustomImportFormat.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CustomImportFormat} returns this
 */
proto.api.commons.org.CustomImportFormat.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.ContactAreaCode.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.ContactAreaCode.AreaCodeCase = {
  AREA_CODE_NOT_SET: 0,
  CFD: 1,
  CUSTOM: 2
};

/**
 * @return {proto.api.commons.org.ContactAreaCode.AreaCodeCase}
 */
proto.api.commons.org.ContactAreaCode.prototype.getAreaCodeCase = function() {
  return /** @type {proto.api.commons.org.ContactAreaCode.AreaCodeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.ContactAreaCode.oneofGroups_[0]));
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
proto.api.commons.org.ContactAreaCode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ContactAreaCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ContactAreaCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactAreaCode.toObject = function(includeInstance, msg) {
  var f, obj = {
cfd: (f = msg.getCfd()) && proto.api.commons.org.ContactFieldDescription.toObject(includeInstance, f),
custom: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.ContactAreaCode}
 */
proto.api.commons.org.ContactAreaCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ContactAreaCode;
  return proto.api.commons.org.ContactAreaCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ContactAreaCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ContactAreaCode}
 */
proto.api.commons.org.ContactAreaCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.ContactFieldDescription;
      reader.readMessage(value,proto.api.commons.org.ContactFieldDescription.deserializeBinaryFromReader);
      msg.setCfd(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCustom(value);
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
proto.api.commons.org.ContactAreaCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ContactAreaCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ContactAreaCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactAreaCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCfd();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.ContactFieldDescription.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional ContactFieldDescription cfd = 1;
 * @return {?proto.api.commons.org.ContactFieldDescription}
 */
proto.api.commons.org.ContactAreaCode.prototype.getCfd = function() {
  return /** @type{?proto.api.commons.org.ContactFieldDescription} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ContactFieldDescription, 1));
};


/**
 * @param {?proto.api.commons.org.ContactFieldDescription|undefined} value
 * @return {!proto.api.commons.org.ContactAreaCode} returns this
*/
proto.api.commons.org.ContactAreaCode.prototype.setCfd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.commons.org.ContactAreaCode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ContactAreaCode} returns this
 */
proto.api.commons.org.ContactAreaCode.prototype.clearCfd = function() {
  return this.setCfd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ContactAreaCode.prototype.hasCfd = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 custom = 2;
 * @return {number}
 */
proto.api.commons.org.ContactAreaCode.prototype.getCustom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ContactAreaCode} returns this
 */
proto.api.commons.org.ContactAreaCode.prototype.setCustom = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.ContactAreaCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.ContactAreaCode} returns this
 */
proto.api.commons.org.ContactAreaCode.prototype.clearCustom = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.ContactAreaCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ContactAreaCode.prototype.hasCustom = function() {
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
proto.api.commons.org.ContactFieldDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ContactFieldDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ContactFieldDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactFieldDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
fieldName: jspb.Message.getFieldWithDefault(msg, 2, ""),
isPhone: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
displayFormatString: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.commons.org.ContactFieldDescription}
 */
proto.api.commons.org.ContactFieldDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ContactFieldDescription;
  return proto.api.commons.org.ContactFieldDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ContactFieldDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ContactFieldDescription}
 */
proto.api.commons.org.ContactFieldDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayFormatString(value);
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
proto.api.commons.org.ContactFieldDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ContactFieldDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ContactFieldDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactFieldDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsPhone();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDisplayFormatString();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.commons.org.ContactFieldDescription.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ContactFieldDescription} returns this
 */
proto.api.commons.org.ContactFieldDescription.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string field_name = 2;
 * @return {string}
 */
proto.api.commons.org.ContactFieldDescription.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ContactFieldDescription} returns this
 */
proto.api.commons.org.ContactFieldDescription.prototype.setFieldName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_phone = 3;
 * @return {boolean}
 */
proto.api.commons.org.ContactFieldDescription.prototype.getIsPhone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ContactFieldDescription} returns this
 */
proto.api.commons.org.ContactFieldDescription.prototype.setIsPhone = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string display_format_string = 4;
 * @return {string}
 */
proto.api.commons.org.ContactFieldDescription.prototype.getDisplayFormatString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ContactFieldDescription} returns this
 */
proto.api.commons.org.ContactFieldDescription.prototype.setDisplayFormatString = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.AuthenticationPreferences.repeatedFields_ = [11];



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
proto.api.commons.org.AuthenticationPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AuthenticationPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AuthenticationPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthenticationPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
authorizationViaIp: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
allowedIpsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
agentApiKey: jspb.Message.getFieldWithDefault(msg, 12, ""),
enable2fa: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
blockUnverifiedUsers: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
emailMfaSettings: (f = msg.getEmailMfaSettings()) && proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.toObject(includeInstance, f),
duoMfaSettings: (f = msg.getDuoMfaSettings()) && proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.toObject(includeInstance, f),
allowForcePasswordResetInterval: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
passwordResetDayInterval: jspb.Message.getFieldWithDefault(msg, 18, 0),
userAuthorizationViaIp: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
forceSsoProvider: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
enableTotp: jspb.Message.getBooleanFieldWithDefault(msg, 21, false)
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
 * @return {!proto.api.commons.org.AuthenticationPreferences}
 */
proto.api.commons.org.AuthenticationPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AuthenticationPreferences;
  return proto.api.commons.org.AuthenticationPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AuthenticationPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AuthenticationPreferences}
 */
proto.api.commons.org.AuthenticationPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuthorizationViaIp(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedIps(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentApiKey(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable2fa(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockUnverifiedUsers(value);
      break;
    case 15:
      var value = new proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings;
      reader.readMessage(value,proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.deserializeBinaryFromReader);
      msg.setEmailMfaSettings(value);
      break;
    case 16:
      var value = new proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings;
      reader.readMessage(value,proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.deserializeBinaryFromReader);
      msg.setDuoMfaSettings(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowForcePasswordResetInterval(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPasswordResetDayInterval(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserAuthorizationViaIp(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceSsoProvider(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableTotp(value);
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
proto.api.commons.org.AuthenticationPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AuthenticationPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AuthenticationPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthenticationPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationViaIp();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAllowedIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getAgentApiKey();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEnable2fa();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getBlockUnverifiedUsers();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getEmailMfaSettings();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.serializeBinaryToWriter
    );
  }
  f = message.getDuoMfaSettings();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.serializeBinaryToWriter
    );
  }
  f = message.getAllowForcePasswordResetInterval();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getPasswordResetDayInterval();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getUserAuthorizationViaIp();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getForceSsoProvider();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getEnableTotp();
  if (f) {
    writer.writeBool(
      21,
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
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
duoClientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
duoApiHost: jspb.Message.getFieldWithDefault(msg, 2, ""),
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings}
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings;
  return proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings}
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuoClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuoApiHost(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
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
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuoClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDuoApiHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string duo_client_id = 1;
 * @return {string}
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.getDuoClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} returns this
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.setDuoClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string duo_api_host = 2;
 * @return {string}
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.getDuoApiHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} returns this
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.setDuoApiHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enabled = 3;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} returns this
 */
proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings}
 */
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings;
  return proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings}
 */
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
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
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings} returns this
 */
proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool authorization_via_ip = 10;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getAuthorizationViaIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setAuthorizationViaIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string allowed_ips = 11;
 * @return {!Array<string>}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getAllowedIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setAllowedIpsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.addAllowedIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.clearAllowedIpsList = function() {
  return this.setAllowedIpsList([]);
};


/**
 * optional string agent_api_key = 12;
 * @return {string}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getAgentApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setAgentApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool enable_2fa = 13;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getEnable2fa = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setEnable2fa = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool block_unverified_users = 14;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getBlockUnverifiedUsers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setBlockUnverifiedUsers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional EmailMfaSettings email_mfa_settings = 15;
 * @return {?proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getEmailMfaSettings = function() {
  return /** @type{?proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings, 15));
};


/**
 * @param {?proto.api.commons.org.AuthenticationPreferences.EmailMfaSettings|undefined} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
*/
proto.api.commons.org.AuthenticationPreferences.prototype.setEmailMfaSettings = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.clearEmailMfaSettings = function() {
  return this.setEmailMfaSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.hasEmailMfaSettings = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional DuoMfaSettings duo_mfa_settings = 16;
 * @return {?proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getDuoMfaSettings = function() {
  return /** @type{?proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings, 16));
};


/**
 * @param {?proto.api.commons.org.AuthenticationPreferences.DuoMfaSettings|undefined} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
*/
proto.api.commons.org.AuthenticationPreferences.prototype.setDuoMfaSettings = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.clearDuoMfaSettings = function() {
  return this.setDuoMfaSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.hasDuoMfaSettings = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool allow_force_password_reset_interval = 17;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getAllowForcePasswordResetInterval = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setAllowForcePasswordResetInterval = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional int32 password_reset_day_interval = 18;
 * @return {number}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getPasswordResetDayInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setPasswordResetDayInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional bool user_authorization_via_ip = 19;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getUserAuthorizationViaIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setUserAuthorizationViaIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional bool force_sso_provider = 20;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getForceSsoProvider = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setForceSsoProvider = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool enable_totp = 21;
 * @return {boolean}
 */
proto.api.commons.org.AuthenticationPreferences.prototype.getEnableTotp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthenticationPreferences} returns this
 */
proto.api.commons.org.AuthenticationPreferences.prototype.setEnableTotp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
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
proto.api.commons.org.WebhookPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.WebhookPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.WebhookPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebhookPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pushUrlsEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
callResultPushUrl: jspb.Message.getFieldWithDefault(msg, 11, ""),
agentResponsePushUrl: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.api.commons.org.WebhookPreferences}
 */
proto.api.commons.org.WebhookPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.WebhookPreferences;
  return proto.api.commons.org.WebhookPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.WebhookPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.WebhookPreferences}
 */
proto.api.commons.org.WebhookPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPushUrlsEnabled(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallResultPushUrl(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentResponsePushUrl(value);
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
proto.api.commons.org.WebhookPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.WebhookPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.WebhookPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebhookPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPushUrlsEnabled();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCallResultPushUrl();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAgentResponsePushUrl();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.WebhookPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebhookPreferences} returns this
 */
proto.api.commons.org.WebhookPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool push_urls_enabled = 10;
 * @return {boolean}
 */
proto.api.commons.org.WebhookPreferences.prototype.getPushUrlsEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.WebhookPreferences} returns this
 */
proto.api.commons.org.WebhookPreferences.prototype.setPushUrlsEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string call_result_push_url = 11;
 * @return {string}
 */
proto.api.commons.org.WebhookPreferences.prototype.getCallResultPushUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebhookPreferences} returns this
 */
proto.api.commons.org.WebhookPreferences.prototype.setCallResultPushUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string agent_response_push_url = 12;
 * @return {string}
 */
proto.api.commons.org.WebhookPreferences.prototype.getAgentResponsePushUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebhookPreferences} returns this
 */
proto.api.commons.org.WebhookPreferences.prototype.setAgentResponsePushUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
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
proto.api.commons.org.DashboardPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DashboardPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DashboardPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DashboardPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultInfoView: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
defaultTableInclusion: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
defaultInfoGrouping: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
defaultSmallIcon: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
defaultDescendingSort: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
tableTemplateSid: jspb.Message.getFieldWithDefault(msg, 15, 0),
defaultCallTypes: (f = msg.getDefaultCallTypes()) && proto.api.commons.org.IncludedCallTypes.toObject(includeInstance, f),
defaultInfoSortByValue: jspb.Message.getFieldWithDefault(msg, 17, 0),
defaultBargeInFiltering: (f = msg.getDefaultBargeInFiltering()) && proto.api.commons.org.BargeInFiltering.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.DashboardPreferences}
 */
proto.api.commons.org.DashboardPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DashboardPreferences;
  return proto.api.commons.org.DashboardPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DashboardPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DashboardPreferences}
 */
proto.api.commons.org.DashboardPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultInfoView(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultTableInclusion(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultInfoGrouping(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultSmallIcon(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultDescendingSort(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTableTemplateSid(value);
      break;
    case 16:
      var value = new proto.api.commons.org.IncludedCallTypes;
      reader.readMessage(value,proto.api.commons.org.IncludedCallTypes.deserializeBinaryFromReader);
      msg.setDefaultCallTypes(value);
      break;
    case 17:
      var value = /** @type {!proto.api.commons.AgentInfoSortBy} */ (reader.readEnum());
      msg.setDefaultInfoSortByValue(value);
      break;
    case 18:
      var value = new proto.api.commons.org.BargeInFiltering;
      reader.readMessage(value,proto.api.commons.org.BargeInFiltering.deserializeBinaryFromReader);
      msg.setDefaultBargeInFiltering(value);
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
proto.api.commons.org.DashboardPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DashboardPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DashboardPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DashboardPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultInfoView();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDefaultTableInclusion();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDefaultInfoGrouping();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDefaultSmallIcon();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDefaultDescendingSort();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getTableTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getDefaultCallTypes();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.api.commons.org.IncludedCallTypes.serializeBinaryToWriter
    );
  }
  f = message.getDefaultInfoSortByValue();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getDefaultBargeInFiltering();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.api.commons.org.BargeInFiltering.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.DashboardPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool default_info_view = 10;
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultInfoView = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setDefaultInfoView = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool default_table_inclusion = 11;
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultTableInclusion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setDefaultTableInclusion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool default_info_grouping = 12;
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultInfoGrouping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setDefaultInfoGrouping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool default_small_icon = 13;
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultSmallIcon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setDefaultSmallIcon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool default_descending_sort = 14;
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultDescendingSort = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setDefaultDescendingSort = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional int64 table_template_sid = 15;
 * @return {number}
 */
proto.api.commons.org.DashboardPreferences.prototype.getTableTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setTableTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional IncludedCallTypes default_call_types = 16;
 * @return {?proto.api.commons.org.IncludedCallTypes}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultCallTypes = function() {
  return /** @type{?proto.api.commons.org.IncludedCallTypes} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.IncludedCallTypes, 16));
};


/**
 * @param {?proto.api.commons.org.IncludedCallTypes|undefined} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
*/
proto.api.commons.org.DashboardPreferences.prototype.setDefaultCallTypes = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.clearDefaultCallTypes = function() {
  return this.setDefaultCallTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.hasDefaultCallTypes = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional api.commons.AgentInfoSortBy default_info_sort_by_value = 17;
 * @return {!proto.api.commons.AgentInfoSortBy}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultInfoSortByValue = function() {
  return /** @type {!proto.api.commons.AgentInfoSortBy} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.api.commons.AgentInfoSortBy} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.setDefaultInfoSortByValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional BargeInFiltering default_barge_in_filtering = 18;
 * @return {?proto.api.commons.org.BargeInFiltering}
 */
proto.api.commons.org.DashboardPreferences.prototype.getDefaultBargeInFiltering = function() {
  return /** @type{?proto.api.commons.org.BargeInFiltering} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.BargeInFiltering, 18));
};


/**
 * @param {?proto.api.commons.org.BargeInFiltering|undefined} value
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
*/
proto.api.commons.org.DashboardPreferences.prototype.setDefaultBargeInFiltering = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.DashboardPreferences} returns this
 */
proto.api.commons.org.DashboardPreferences.prototype.clearDefaultBargeInFiltering = function() {
  return this.setDefaultBargeInFiltering(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DashboardPreferences.prototype.hasDefaultBargeInFiltering = function() {
  return jspb.Message.getField(this, 18) != null;
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
proto.api.commons.org.IncludedCallTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.IncludedCallTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.IncludedCallTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IncludedCallTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
outbound: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
inbound: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
manualDial: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
previewDial: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.api.commons.org.IncludedCallTypes}
 */
proto.api.commons.org.IncludedCallTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.IncludedCallTypes;
  return proto.api.commons.org.IncludedCallTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.IncludedCallTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.IncludedCallTypes}
 */
proto.api.commons.org.IncludedCallTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutbound(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInbound(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManualDial(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreviewDial(value);
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
proto.api.commons.org.IncludedCallTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.IncludedCallTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.IncludedCallTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IncludedCallTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutbound();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getInbound();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getManualDial();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPreviewDial();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool outbound = 1;
 * @return {boolean}
 */
proto.api.commons.org.IncludedCallTypes.prototype.getOutbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.IncludedCallTypes} returns this
 */
proto.api.commons.org.IncludedCallTypes.prototype.setOutbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool inbound = 2;
 * @return {boolean}
 */
proto.api.commons.org.IncludedCallTypes.prototype.getInbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.IncludedCallTypes} returns this
 */
proto.api.commons.org.IncludedCallTypes.prototype.setInbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool manual_dial = 3;
 * @return {boolean}
 */
proto.api.commons.org.IncludedCallTypes.prototype.getManualDial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.IncludedCallTypes} returns this
 */
proto.api.commons.org.IncludedCallTypes.prototype.setManualDial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool preview_dial = 4;
 * @return {boolean}
 */
proto.api.commons.org.IncludedCallTypes.prototype.getPreviewDial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.IncludedCallTypes} returns this
 */
proto.api.commons.org.IncludedCallTypes.prototype.setPreviewDial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.api.commons.org.BargeInFiltering.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BargeInFiltering.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BargeInFiltering} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BargeInFiltering.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroup: (f = msg.getHuntGroup()) && proto.api.commons.org.BargeInFiltering.HuntGroup.toObject(includeInstance, f),
agentStatus: (f = msg.getAgentStatus()) && proto.api.commons.org.BargeInFiltering.AgentStatus.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.BargeInFiltering}
 */
proto.api.commons.org.BargeInFiltering.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BargeInFiltering;
  return proto.api.commons.org.BargeInFiltering.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BargeInFiltering} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BargeInFiltering}
 */
proto.api.commons.org.BargeInFiltering.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.BargeInFiltering.HuntGroup;
      reader.readMessage(value,proto.api.commons.org.BargeInFiltering.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
      break;
    case 2:
      var value = new proto.api.commons.org.BargeInFiltering.AgentStatus;
      reader.readMessage(value,proto.api.commons.org.BargeInFiltering.AgentStatus.deserializeBinaryFromReader);
      msg.setAgentStatus(value);
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
proto.api.commons.org.BargeInFiltering.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BargeInFiltering.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BargeInFiltering} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BargeInFiltering.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.BargeInFiltering.HuntGroup.serializeBinaryToWriter
    );
  }
  f = message.getAgentStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.BargeInFiltering.AgentStatus.serializeBinaryToWriter
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
proto.api.commons.org.BargeInFiltering.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BargeInFiltering.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BargeInFiltering.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
any: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.org.BargeInFiltering.HuntGroup}
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BargeInFiltering.HuntGroup;
  return proto.api.commons.org.BargeInFiltering.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BargeInFiltering.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BargeInFiltering.HuntGroup}
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAny(value);
      break;
    case 2:
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
proto.api.commons.org.BargeInFiltering.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BargeInFiltering.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BargeInFiltering.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAny();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bool any = 1;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.prototype.getAny = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.HuntGroup} returns this
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.prototype.setAny = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.BargeInFiltering.HuntGroup} returns this
 */
proto.api.commons.org.BargeInFiltering.HuntGroup.prototype.setHuntGroupSid = function(value) {
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
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BargeInFiltering.AgentStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BargeInFiltering.AgentStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
any: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
waiting: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
onCall: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
wrapUp: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
paused: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
transfer: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
preview: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
manual: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
pbx: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
intercom: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BargeInFiltering.AgentStatus;
  return proto.api.commons.org.BargeInFiltering.AgentStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BargeInFiltering.AgentStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAny(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaiting(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnCall(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWrapUp(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaused(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTransfer(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreview(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManual(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPbx(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntercom(value);
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
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BargeInFiltering.AgentStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BargeInFiltering.AgentStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAny();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getWaiting();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getOnCall();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWrapUp();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPaused();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getTransfer();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPreview();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getManual();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPbx();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIntercom();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional bool any = 1;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getAny = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setAny = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool waiting = 2;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getWaiting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setWaiting = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool on_call = 3;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getOnCall = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setOnCall = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool wrap_up = 4;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getWrapUp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setWrapUp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool paused = 5;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool transfer = 6;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool preview = 7;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getPreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setPreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool manual = 8;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getManual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setManual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool pbx = 9;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getPbx = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setPbx = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool intercom = 10;
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.getIntercom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BargeInFiltering.AgentStatus} returns this
 */
proto.api.commons.org.BargeInFiltering.AgentStatus.prototype.setIntercom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional HuntGroup hunt_group = 1;
 * @return {?proto.api.commons.org.BargeInFiltering.HuntGroup}
 */
proto.api.commons.org.BargeInFiltering.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.commons.org.BargeInFiltering.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.BargeInFiltering.HuntGroup, 1));
};


/**
 * @param {?proto.api.commons.org.BargeInFiltering.HuntGroup|undefined} value
 * @return {!proto.api.commons.org.BargeInFiltering} returns this
*/
proto.api.commons.org.BargeInFiltering.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.BargeInFiltering} returns this
 */
proto.api.commons.org.BargeInFiltering.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AgentStatus agent_status = 2;
 * @return {?proto.api.commons.org.BargeInFiltering.AgentStatus}
 */
proto.api.commons.org.BargeInFiltering.prototype.getAgentStatus = function() {
  return /** @type{?proto.api.commons.org.BargeInFiltering.AgentStatus} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.BargeInFiltering.AgentStatus, 2));
};


/**
 * @param {?proto.api.commons.org.BargeInFiltering.AgentStatus|undefined} value
 * @return {!proto.api.commons.org.BargeInFiltering} returns this
*/
proto.api.commons.org.BargeInFiltering.prototype.setAgentStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.BargeInFiltering} returns this
 */
proto.api.commons.org.BargeInFiltering.prototype.clearAgentStatus = function() {
  return this.setAgentStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.BargeInFiltering.prototype.hasAgentStatus = function() {
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
proto.api.commons.org.DashboardQueuePreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DashboardQueuePreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DashboardQueuePreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DashboardQueuePreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultInfoView: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
defaultInfoGrouping: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
defaultSmallIcon: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
defaultDescendingSort: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
defaultAgentSkillsFilter: jspb.Message.getFieldWithDefault(msg, 14, 0),
defaultInfoTableTemplate: jspb.Message.getFieldWithDefault(msg, 15, 0),
defaultInfoSortByValue: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.api.commons.org.DashboardQueuePreferences}
 */
proto.api.commons.org.DashboardQueuePreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DashboardQueuePreferences;
  return proto.api.commons.org.DashboardQueuePreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DashboardQueuePreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DashboardQueuePreferences}
 */
proto.api.commons.org.DashboardQueuePreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultInfoView(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultInfoGrouping(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultSmallIcon(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultDescendingSort(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultAgentSkillsFilter(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultInfoTableTemplate(value);
      break;
    case 16:
      var value = /** @type {!proto.api.commons.QueueInfoSortBy} */ (reader.readEnum());
      msg.setDefaultInfoSortByValue(value);
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
proto.api.commons.org.DashboardQueuePreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DashboardQueuePreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DashboardQueuePreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DashboardQueuePreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultInfoView();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDefaultInfoGrouping();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDefaultSmallIcon();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDefaultDescendingSort();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDefaultAgentSkillsFilter();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getDefaultInfoTableTemplate();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getDefaultInfoSortByValue();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool default_info_view = 10;
 * @return {boolean}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultInfoView = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultInfoView = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool default_info_grouping = 11;
 * @return {boolean}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultInfoGrouping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultInfoGrouping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool default_small_icon = 12;
 * @return {boolean}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultSmallIcon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultSmallIcon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool default_descending_sort = 13;
 * @return {boolean}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultDescendingSort = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultDescendingSort = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional int64 default_agent_skills_filter = 14;
 * @return {number}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultAgentSkillsFilter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultAgentSkillsFilter = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 default_info_table_template = 15;
 * @return {number}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultInfoTableTemplate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultInfoTableTemplate = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional api.commons.QueueInfoSortBy default_info_sort_by_value = 16;
 * @return {!proto.api.commons.QueueInfoSortBy}
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.getDefaultInfoSortByValue = function() {
  return /** @type {!proto.api.commons.QueueInfoSortBy} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.api.commons.QueueInfoSortBy} value
 * @return {!proto.api.commons.org.DashboardQueuePreferences} returns this
 */
proto.api.commons.org.DashboardQueuePreferences.prototype.setDefaultInfoSortByValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
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
proto.api.commons.org.PhonePreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.PhonePreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.PhonePreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.PhonePreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
agentPreviewDialing: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
defaultRingLengthThreshold: jspb.Message.getFieldWithDefault(msg, 11, 0),
displayRingLengthThreshold: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
showCallerId: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
defaultUseCallerId: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
overrideLinkbackRecording: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
callerIdCfdSid: jspb.Message.getFieldWithDefault(msg, 16, 0),
defaultDialOrder: (f = msg.getDefaultDialOrder()) && proto.api.commons.org.DialOrder.toObject(includeInstance, f),
answeringMachineDetection: jspb.Message.getFieldWithDefault(msg, 18, 0),
linkbackRecording: jspb.Message.getBooleanFieldWithDefault(msg, 19, false)
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
 * @return {!proto.api.commons.org.PhonePreferences}
 */
proto.api.commons.org.PhonePreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.PhonePreferences;
  return proto.api.commons.org.PhonePreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.PhonePreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.PhonePreferences}
 */
proto.api.commons.org.PhonePreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgentPreviewDialing(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultRingLengthThreshold(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayRingLengthThreshold(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowCallerId(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultUseCallerId(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideLinkbackRecording(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallerIdCfdSid(value);
      break;
    case 17:
      var value = new proto.api.commons.org.DialOrder;
      reader.readMessage(value,proto.api.commons.org.DialOrder.deserializeBinaryFromReader);
      msg.setDefaultDialOrder(value);
      break;
    case 18:
      var value = /** @type {!proto.api.commons.AnsweringMachineDetection} */ (reader.readEnum());
      msg.setAnsweringMachineDetection(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLinkbackRecording(value);
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
proto.api.commons.org.PhonePreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.PhonePreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.PhonePreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.PhonePreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentPreviewDialing();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDefaultRingLengthThreshold();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getDisplayRingLengthThreshold();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getShowCallerId();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDefaultUseCallerId();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getOverrideLinkbackRecording();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getCallerIdCfdSid();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getDefaultDialOrder();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.api.commons.org.DialOrder.serializeBinaryToWriter
    );
  }
  f = message.getAnsweringMachineDetection();
  if (f !== 0.0) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = message.getLinkbackRecording();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.PhonePreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool agent_preview_dialing = 10;
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.getAgentPreviewDialing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setAgentPreviewDialing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int32 default_ring_length_threshold = 11;
 * @return {number}
 */
proto.api.commons.org.PhonePreferences.prototype.getDefaultRingLengthThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setDefaultRingLengthThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool display_ring_length_threshold = 12;
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.getDisplayRingLengthThreshold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setDisplayRingLengthThreshold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool show_caller_id = 13;
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.getShowCallerId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setShowCallerId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool default_use_caller_id = 14;
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.getDefaultUseCallerId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setDefaultUseCallerId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool override_linkback_recording = 15;
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.getOverrideLinkbackRecording = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setOverrideLinkbackRecording = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int64 caller_id_cfd_sid = 16;
 * @return {number}
 */
proto.api.commons.org.PhonePreferences.prototype.getCallerIdCfdSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setCallerIdCfdSid = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional DialOrder default_dial_order = 17;
 * @return {?proto.api.commons.org.DialOrder}
 */
proto.api.commons.org.PhonePreferences.prototype.getDefaultDialOrder = function() {
  return /** @type{?proto.api.commons.org.DialOrder} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.DialOrder, 17));
};


/**
 * @param {?proto.api.commons.org.DialOrder|undefined} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
*/
proto.api.commons.org.PhonePreferences.prototype.setDefaultDialOrder = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.clearDefaultDialOrder = function() {
  return this.setDefaultDialOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.hasDefaultDialOrder = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional api.commons.AnsweringMachineDetection answering_machine_detection = 18;
 * @return {!proto.api.commons.AnsweringMachineDetection}
 */
proto.api.commons.org.PhonePreferences.prototype.getAnsweringMachineDetection = function() {
  return /** @type {!proto.api.commons.AnsweringMachineDetection} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.api.commons.AnsweringMachineDetection} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setAnsweringMachineDetection = function(value) {
  return jspb.Message.setProto3EnumField(this, 18, value);
};


/**
 * optional bool linkback_recording = 19;
 * @return {boolean}
 */
proto.api.commons.org.PhonePreferences.prototype.getLinkbackRecording = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PhonePreferences} returns this
 */
proto.api.commons.org.PhonePreferences.prototype.setLinkbackRecording = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.DialOrder.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.DialOrder.TypeCase = {
  TYPE_NOT_SET: 0,
  STANDARD: 1,
  CUSTOM: 2
};

/**
 * @return {proto.api.commons.org.DialOrder.TypeCase}
 */
proto.api.commons.org.DialOrder.prototype.getTypeCase = function() {
  return /** @type {proto.api.commons.org.DialOrder.TypeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.DialOrder.oneofGroups_[0]));
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
proto.api.commons.org.DialOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DialOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DialOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DialOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
standard: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
custom: (f = msg.getCustom()) && proto.api.commons.org.CustomDialOrder.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.DialOrder}
 */
proto.api.commons.org.DialOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DialOrder;
  return proto.api.commons.org.DialOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DialOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DialOrder}
 */
proto.api.commons.org.DialOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.DialOrderType} */ (reader.readEnum());
      msg.setStandard(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CustomDialOrder;
      reader.readMessage(value,proto.api.commons.org.CustomDialOrder.deserializeBinaryFromReader);
      msg.setCustom(value);
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
proto.api.commons.org.DialOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DialOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DialOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DialOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.api.commons.DialOrderType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.CustomDialOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.DialOrderType standard = 1;
 * @return {!proto.api.commons.DialOrderType}
 */
proto.api.commons.org.DialOrder.prototype.getStandard = function() {
  return /** @type {!proto.api.commons.DialOrderType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.DialOrderType} value
 * @return {!proto.api.commons.org.DialOrder} returns this
 */
proto.api.commons.org.DialOrder.prototype.setStandard = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.DialOrder.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.DialOrder} returns this
 */
proto.api.commons.org.DialOrder.prototype.clearStandard = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.DialOrder.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DialOrder.prototype.hasStandard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomDialOrder custom = 2;
 * @return {?proto.api.commons.org.CustomDialOrder}
 */
proto.api.commons.org.DialOrder.prototype.getCustom = function() {
  return /** @type{?proto.api.commons.org.CustomDialOrder} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CustomDialOrder, 2));
};


/**
 * @param {?proto.api.commons.org.CustomDialOrder|undefined} value
 * @return {!proto.api.commons.org.DialOrder} returns this
*/
proto.api.commons.org.DialOrder.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.commons.org.DialOrder.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.DialOrder} returns this
 */
proto.api.commons.org.DialOrder.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DialOrder.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CustomDialOrder.repeatedFields_ = [1];



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
proto.api.commons.org.CustomDialOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CustomDialOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CustomDialOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CustomDialOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
dialOrderFieldsList: jspb.Message.toObjectList(msg.getDialOrderFieldsList(),
    proto.api.commons.org.DialOrderField.toObject, includeInstance)
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
 * @return {!proto.api.commons.org.CustomDialOrder}
 */
proto.api.commons.org.CustomDialOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CustomDialOrder;
  return proto.api.commons.org.CustomDialOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CustomDialOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CustomDialOrder}
 */
proto.api.commons.org.CustomDialOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.DialOrderField;
      reader.readMessage(value,proto.api.commons.org.DialOrderField.deserializeBinaryFromReader);
      msg.addDialOrderFields(value);
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
proto.api.commons.org.CustomDialOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CustomDialOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CustomDialOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CustomDialOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDialOrderFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.org.DialOrderField.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DialOrderField dial_order_fields = 1;
 * @return {!Array<!proto.api.commons.org.DialOrderField>}
 */
proto.api.commons.org.CustomDialOrder.prototype.getDialOrderFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.org.DialOrderField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DialOrderField, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.DialOrderField>} value
 * @return {!proto.api.commons.org.CustomDialOrder} returns this
*/
proto.api.commons.org.CustomDialOrder.prototype.setDialOrderFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.DialOrderField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DialOrderField}
 */
proto.api.commons.org.CustomDialOrder.prototype.addDialOrderFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.DialOrderField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CustomDialOrder} returns this
 */
proto.api.commons.org.CustomDialOrder.prototype.clearDialOrderFieldsList = function() {
  return this.setDialOrderFieldsList([]);
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
proto.api.commons.org.DialOrderField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DialOrderField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DialOrderField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DialOrderField.toObject = function(includeInstance, msg) {
  var f, obj = {
cfdSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
fieldName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.org.DialOrderField}
 */
proto.api.commons.org.DialOrderField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DialOrderField;
  return proto.api.commons.org.DialOrderField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DialOrderField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DialOrderField}
 */
proto.api.commons.org.DialOrderField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCfdSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
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
proto.api.commons.org.DialOrderField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DialOrderField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DialOrderField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DialOrderField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCfdSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 cfd_sid = 1;
 * @return {number}
 */
proto.api.commons.org.DialOrderField.prototype.getCfdSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.DialOrderField} returns this
 */
proto.api.commons.org.DialOrderField.prototype.setCfdSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string field_name = 2;
 * @return {string}
 */
proto.api.commons.org.DialOrderField.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DialOrderField} returns this
 */
proto.api.commons.org.DialOrderField.prototype.setFieldName = function(value) {
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
proto.api.commons.org.CompliancePreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CompliancePreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CompliancePreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CompliancePreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayAfterHoursCalls: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
afterHoursCalls: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
displayNaturalCompliance: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
useNaturalCompliance: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
defaultComplianceRuleSet: jspb.Message.getFieldWithDefault(msg, 14, ""),
displayCellPhoneScrub: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
cellPhoneScrub: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
displayScheduleRules: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
useScheduleRules: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
defaultScheduleRule: (f = msg.getDefaultScheduleRule()) && proto.api.commons.org.ScheduleRuleField.toObject(includeInstance, f),
doZipCodeScrub: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
zipCodeScrub: (f = msg.getZipCodeScrub()) && proto.api.commons.org.ZipCodeField.toObject(includeInstance, f),
defaultEmailComplianceList: jspb.Message.getFieldWithDefault(msg, 22, ""),
defaultSmsComplianceList: jspb.Message.getFieldWithDefault(msg, 23, "")
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
 * @return {!proto.api.commons.org.CompliancePreferences}
 */
proto.api.commons.org.CompliancePreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CompliancePreferences;
  return proto.api.commons.org.CompliancePreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CompliancePreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CompliancePreferences}
 */
proto.api.commons.org.CompliancePreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayAfterHoursCalls(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAfterHoursCalls(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayNaturalCompliance(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseNaturalCompliance(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultComplianceRuleSet(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayCellPhoneScrub(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCellPhoneScrub(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayScheduleRules(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseScheduleRules(value);
      break;
    case 19:
      var value = new proto.api.commons.org.ScheduleRuleField;
      reader.readMessage(value,proto.api.commons.org.ScheduleRuleField.deserializeBinaryFromReader);
      msg.setDefaultScheduleRule(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoZipCodeScrub(value);
      break;
    case 21:
      var value = new proto.api.commons.org.ZipCodeField;
      reader.readMessage(value,proto.api.commons.org.ZipCodeField.deserializeBinaryFromReader);
      msg.setZipCodeScrub(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultEmailComplianceList(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultSmsComplianceList(value);
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
proto.api.commons.org.CompliancePreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CompliancePreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CompliancePreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CompliancePreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayAfterHoursCalls();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAfterHoursCalls();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDisplayNaturalCompliance();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getUseNaturalCompliance();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDefaultComplianceRuleSet();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getDisplayCellPhoneScrub();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getCellPhoneScrub();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getDisplayScheduleRules();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getUseScheduleRules();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getDefaultScheduleRule();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.api.commons.org.ScheduleRuleField.serializeBinaryToWriter
    );
  }
  f = message.getDoZipCodeScrub();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getZipCodeScrub();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.api.commons.org.ZipCodeField.serializeBinaryToWriter
    );
  }
  f = message.getDefaultEmailComplianceList();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getDefaultSmsComplianceList();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.CompliancePreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool display_after_hours_calls = 10;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDisplayAfterHoursCalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDisplayAfterHoursCalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool after_hours_calls = 11;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getAfterHoursCalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setAfterHoursCalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool display_natural_compliance = 12;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDisplayNaturalCompliance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDisplayNaturalCompliance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool use_natural_compliance = 13;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getUseNaturalCompliance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setUseNaturalCompliance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string default_compliance_rule_set = 14;
 * @return {string}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDefaultComplianceRuleSet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDefaultComplianceRuleSet = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool display_cell_phone_scrub = 15;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDisplayCellPhoneScrub = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDisplayCellPhoneScrub = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool cell_phone_scrub = 16;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getCellPhoneScrub = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setCellPhoneScrub = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool display_schedule_rules = 17;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDisplayScheduleRules = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDisplayScheduleRules = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool use_schedule_rules = 18;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getUseScheduleRules = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setUseScheduleRules = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional ScheduleRuleField default_schedule_rule = 19;
 * @return {?proto.api.commons.org.ScheduleRuleField}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDefaultScheduleRule = function() {
  return /** @type{?proto.api.commons.org.ScheduleRuleField} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ScheduleRuleField, 19));
};


/**
 * @param {?proto.api.commons.org.ScheduleRuleField|undefined} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
*/
proto.api.commons.org.CompliancePreferences.prototype.setDefaultScheduleRule = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.clearDefaultScheduleRule = function() {
  return this.setDefaultScheduleRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.hasDefaultScheduleRule = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool do_zip_code_scrub = 20;
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDoZipCodeScrub = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDoZipCodeScrub = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional ZipCodeField zip_code_scrub = 21;
 * @return {?proto.api.commons.org.ZipCodeField}
 */
proto.api.commons.org.CompliancePreferences.prototype.getZipCodeScrub = function() {
  return /** @type{?proto.api.commons.org.ZipCodeField} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ZipCodeField, 21));
};


/**
 * @param {?proto.api.commons.org.ZipCodeField|undefined} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
*/
proto.api.commons.org.CompliancePreferences.prototype.setZipCodeScrub = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.clearZipCodeScrub = function() {
  return this.setZipCodeScrub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CompliancePreferences.prototype.hasZipCodeScrub = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string default_email_compliance_list = 22;
 * @return {string}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDefaultEmailComplianceList = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDefaultEmailComplianceList = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string default_sms_compliance_list = 23;
 * @return {string}
 */
proto.api.commons.org.CompliancePreferences.prototype.getDefaultSmsComplianceList = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CompliancePreferences} returns this
 */
proto.api.commons.org.CompliancePreferences.prototype.setDefaultSmsComplianceList = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
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
proto.api.commons.org.ScheduleRuleField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ScheduleRuleField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ScheduleRuleField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ScheduleRuleField.toObject = function(includeInstance, msg) {
  var f, obj = {
ruleId: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.org.ScheduleRuleField}
 */
proto.api.commons.org.ScheduleRuleField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ScheduleRuleField;
  return proto.api.commons.org.ScheduleRuleField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ScheduleRuleField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ScheduleRuleField}
 */
proto.api.commons.org.ScheduleRuleField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRuleId(value);
      break;
    case 2:
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
proto.api.commons.org.ScheduleRuleField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ScheduleRuleField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ScheduleRuleField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ScheduleRuleField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleId();
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
};


/**
 * optional int64 rule_id = 1;
 * @return {number}
 */
proto.api.commons.org.ScheduleRuleField.prototype.getRuleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ScheduleRuleField} returns this
 */
proto.api.commons.org.ScheduleRuleField.prototype.setRuleId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.ScheduleRuleField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ScheduleRuleField} returns this
 */
proto.api.commons.org.ScheduleRuleField.prototype.setName = function(value) {
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
proto.api.commons.org.ZipCodeField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ZipCodeField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ZipCodeField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ZipCodeField.toObject = function(includeInstance, msg) {
  var f, obj = {
cfdSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
fieldName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.org.ZipCodeField}
 */
proto.api.commons.org.ZipCodeField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ZipCodeField;
  return proto.api.commons.org.ZipCodeField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ZipCodeField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ZipCodeField}
 */
proto.api.commons.org.ZipCodeField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCfdSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
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
proto.api.commons.org.ZipCodeField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ZipCodeField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ZipCodeField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ZipCodeField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCfdSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 cfd_sid = 1;
 * @return {number}
 */
proto.api.commons.org.ZipCodeField.prototype.getCfdSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ZipCodeField} returns this
 */
proto.api.commons.org.ZipCodeField.prototype.setCfdSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string field_name = 2;
 * @return {string}
 */
proto.api.commons.org.ZipCodeField.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ZipCodeField} returns this
 */
proto.api.commons.org.ZipCodeField.prototype.setFieldName = function(value) {
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
proto.api.commons.org.BroadcastPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BroadcastPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BroadcastPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BroadcastPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayListPenetrationStrategy: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
dialListPenetrationStrategy: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
displayFollowTheSun: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
followTheSun: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
sequenceTerminatorOverride: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
broadcastTemplateOrdering: jspb.Message.getFieldWithDefault(msg, 15, 0),
startTimeEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
defaultStartTime: (f = msg.getDefaultStartTime()) && proto.api.commons.org.BroadcastTime.toObject(includeInstance, f),
stopTimeEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
defaultStopTime: (f = msg.getDefaultStopTime()) && proto.api.commons.org.BroadcastTime.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.BroadcastPreferences}
 */
proto.api.commons.org.BroadcastPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BroadcastPreferences;
  return proto.api.commons.org.BroadcastPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BroadcastPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BroadcastPreferences}
 */
proto.api.commons.org.BroadcastPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayListPenetrationStrategy(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDialListPenetrationStrategy(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayFollowTheSun(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFollowTheSun(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSequenceTerminatorOverride(value);
      break;
    case 15:
      var value = /** @type {!proto.api.commons.BroadcastTemplateOrdering} */ (reader.readEnum());
      msg.setBroadcastTemplateOrdering(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStartTimeEnabled(value);
      break;
    case 17:
      var value = new proto.api.commons.org.BroadcastTime;
      reader.readMessage(value,proto.api.commons.org.BroadcastTime.deserializeBinaryFromReader);
      msg.setDefaultStartTime(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStopTimeEnabled(value);
      break;
    case 19:
      var value = new proto.api.commons.org.BroadcastTime;
      reader.readMessage(value,proto.api.commons.org.BroadcastTime.deserializeBinaryFromReader);
      msg.setDefaultStopTime(value);
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
proto.api.commons.org.BroadcastPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BroadcastPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BroadcastPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BroadcastPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayListPenetrationStrategy();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDialListPenetrationStrategy();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDisplayFollowTheSun();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getFollowTheSun();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getSequenceTerminatorOverride();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getBroadcastTemplateOrdering();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getStartTimeEnabled();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getDefaultStartTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.api.commons.org.BroadcastTime.serializeBinaryToWriter
    );
  }
  f = message.getStopTimeEnabled();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getDefaultStopTime();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.api.commons.org.BroadcastTime.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool display_list_penetration_strategy = 10;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getDisplayListPenetrationStrategy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setDisplayListPenetrationStrategy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool dial_list_penetration_strategy = 11;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getDialListPenetrationStrategy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setDialListPenetrationStrategy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool display_follow_the_sun = 12;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getDisplayFollowTheSun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setDisplayFollowTheSun = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool follow_the_sun = 13;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getFollowTheSun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setFollowTheSun = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool sequence_terminator_override = 14;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getSequenceTerminatorOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setSequenceTerminatorOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional api.commons.BroadcastTemplateOrdering broadcast_template_ordering = 15;
 * @return {!proto.api.commons.BroadcastTemplateOrdering}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getBroadcastTemplateOrdering = function() {
  return /** @type {!proto.api.commons.BroadcastTemplateOrdering} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.api.commons.BroadcastTemplateOrdering} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setBroadcastTemplateOrdering = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional bool start_time_enabled = 16;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getStartTimeEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setStartTimeEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional BroadcastTime default_start_time = 17;
 * @return {?proto.api.commons.org.BroadcastTime}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getDefaultStartTime = function() {
  return /** @type{?proto.api.commons.org.BroadcastTime} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.BroadcastTime, 17));
};


/**
 * @param {?proto.api.commons.org.BroadcastTime|undefined} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
*/
proto.api.commons.org.BroadcastPreferences.prototype.setDefaultStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.clearDefaultStartTime = function() {
  return this.setDefaultStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.hasDefaultStartTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool stop_time_enabled = 18;
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getStopTimeEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.setStopTimeEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional BroadcastTime default_stop_time = 19;
 * @return {?proto.api.commons.org.BroadcastTime}
 */
proto.api.commons.org.BroadcastPreferences.prototype.getDefaultStopTime = function() {
  return /** @type{?proto.api.commons.org.BroadcastTime} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.BroadcastTime, 19));
};


/**
 * @param {?proto.api.commons.org.BroadcastTime|undefined} value
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
*/
proto.api.commons.org.BroadcastPreferences.prototype.setDefaultStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.BroadcastPreferences} returns this
 */
proto.api.commons.org.BroadcastPreferences.prototype.clearDefaultStopTime = function() {
  return this.setDefaultStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.BroadcastPreferences.prototype.hasDefaultStopTime = function() {
  return jspb.Message.getField(this, 19) != null;
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
proto.api.commons.org.BroadcastTime.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BroadcastTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BroadcastTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BroadcastTime.toObject = function(includeInstance, msg) {
  var f, obj = {
hours: jspb.Message.getFieldWithDefault(msg, 1, 0),
minutes: jspb.Message.getFieldWithDefault(msg, 2, 0),
timezone: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.commons.org.BroadcastTime}
 */
proto.api.commons.org.BroadcastTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BroadcastTime;
  return proto.api.commons.org.BroadcastTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BroadcastTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BroadcastTime}
 */
proto.api.commons.org.BroadcastTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHours(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinutes(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimezone(value);
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
proto.api.commons.org.BroadcastTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BroadcastTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BroadcastTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BroadcastTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHours();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinutes();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int32 hours = 1;
 * @return {number}
 */
proto.api.commons.org.BroadcastTime.prototype.getHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.BroadcastTime} returns this
 */
proto.api.commons.org.BroadcastTime.prototype.setHours = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 minutes = 2;
 * @return {number}
 */
proto.api.commons.org.BroadcastTime.prototype.getMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.BroadcastTime} returns this
 */
proto.api.commons.org.BroadcastTime.prototype.setMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.TimeZone timezone = 3;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.commons.org.BroadcastTime.prototype.getTimezone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.commons.org.BroadcastTime} returns this
 */
proto.api.commons.org.BroadcastTime.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.api.commons.org.SchedulePreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.SchedulePreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.SchedulePreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.SchedulePreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayScheduleByTimeZone: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
useScheduleByTimeZone: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
scheduleByTimeZoneScope: jspb.Message.getFieldWithDefault(msg, 12, 0),
displayScheduleAsPaused: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
scheduleAsPaused: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
defaultCompletionThreshold: jspb.Message.getFieldWithDefault(msg, 15, 0),
displayCampaignLinking: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
useCampaignLinking: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
campaignLinksMap: (f = msg.getCampaignLinksMap()) ? f.toObject(includeInstance, undefined) : [],
defaultCampaignLinkId: jspb.Message.getFieldWithDefault(msg, 19, ""),
resendCancelledCampaigns: jspb.Message.getBooleanFieldWithDefault(msg, 20, false)
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
 * @return {!proto.api.commons.org.SchedulePreferences}
 */
proto.api.commons.org.SchedulePreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.SchedulePreferences;
  return proto.api.commons.org.SchedulePreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.SchedulePreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.SchedulePreferences}
 */
proto.api.commons.org.SchedulePreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayScheduleByTimeZone(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseScheduleByTimeZone(value);
      break;
    case 12:
      var value = /** @type {!proto.api.commons.ScheduleByTimeZoneScope} */ (reader.readEnum());
      msg.setScheduleByTimeZoneScope(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayScheduleAsPaused(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScheduleAsPaused(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultCompletionThreshold(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayCampaignLinking(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseCampaignLinking(value);
      break;
    case 18:
      var value = msg.getCampaignLinksMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultCampaignLinkId(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResendCancelledCampaigns(value);
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
proto.api.commons.org.SchedulePreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.SchedulePreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.SchedulePreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.SchedulePreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayScheduleByTimeZone();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getUseScheduleByTimeZone();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getScheduleByTimeZoneScope();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getDisplayScheduleAsPaused();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getScheduleAsPaused();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDefaultCompletionThreshold();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getDisplayCampaignLinking();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getUseCampaignLinking();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getCampaignLinksMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDefaultCampaignLinkId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getResendCancelledCampaigns();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.SchedulePreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool display_schedule_by_time_zone = 10;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getDisplayScheduleByTimeZone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setDisplayScheduleByTimeZone = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool use_schedule_by_time_zone = 11;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getUseScheduleByTimeZone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setUseScheduleByTimeZone = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional api.commons.ScheduleByTimeZoneScope schedule_by_time_zone_scope = 12;
 * @return {!proto.api.commons.ScheduleByTimeZoneScope}
 */
proto.api.commons.org.SchedulePreferences.prototype.getScheduleByTimeZoneScope = function() {
  return /** @type {!proto.api.commons.ScheduleByTimeZoneScope} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.api.commons.ScheduleByTimeZoneScope} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setScheduleByTimeZoneScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional bool display_schedule_as_paused = 13;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getDisplayScheduleAsPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setDisplayScheduleAsPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool schedule_as_paused = 14;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getScheduleAsPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setScheduleAsPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional int64 default_completion_threshold = 15;
 * @return {number}
 */
proto.api.commons.org.SchedulePreferences.prototype.getDefaultCompletionThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setDefaultCompletionThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool display_campaign_linking = 16;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getDisplayCampaignLinking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setDisplayCampaignLinking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool use_campaign_linking = 17;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getUseCampaignLinking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setUseCampaignLinking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * map<string, string> campaign_links = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.commons.org.SchedulePreferences.prototype.getCampaignLinksMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.clearCampaignLinksMap = function() {
  this.getCampaignLinksMap().clear();
  return this;
};


/**
 * optional string default_campaign_link_id = 19;
 * @return {string}
 */
proto.api.commons.org.SchedulePreferences.prototype.getDefaultCampaignLinkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setDefaultCampaignLinkId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool resend_cancelled_campaigns = 20;
 * @return {boolean}
 */
proto.api.commons.org.SchedulePreferences.prototype.getResendCancelledCampaigns = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.SchedulePreferences} returns this
 */
proto.api.commons.org.SchedulePreferences.prototype.setResendCancelledCampaigns = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.EmailSmsPreferences.repeatedFields_ = [12];



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
proto.api.commons.org.EmailSmsPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.EmailSmsPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.EmailSmsPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.EmailSmsPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
useCustomLinks: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
clientAcknowledgement: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
emailFromAddressesList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.EmailSmsPreferences}
 */
proto.api.commons.org.EmailSmsPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.EmailSmsPreferences;
  return proto.api.commons.org.EmailSmsPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.EmailSmsPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.EmailSmsPreferences}
 */
proto.api.commons.org.EmailSmsPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseCustomLinks(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClientAcknowledgement(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailFromAddresses(value);
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
proto.api.commons.org.EmailSmsPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.EmailSmsPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.EmailSmsPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.EmailSmsPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseCustomLinks();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getClientAcknowledgement();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getEmailFromAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.EmailSmsPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.EmailSmsPreferences} returns this
 */
proto.api.commons.org.EmailSmsPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool use_custom_links = 10;
 * @return {boolean}
 */
proto.api.commons.org.EmailSmsPreferences.prototype.getUseCustomLinks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.EmailSmsPreferences} returns this
 */
proto.api.commons.org.EmailSmsPreferences.prototype.setUseCustomLinks = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool client_acknowledgement = 11;
 * @return {boolean}
 */
proto.api.commons.org.EmailSmsPreferences.prototype.getClientAcknowledgement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.EmailSmsPreferences} returns this
 */
proto.api.commons.org.EmailSmsPreferences.prototype.setClientAcknowledgement = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string email_from_addresses = 12;
 * @return {!Array<string>}
 */
proto.api.commons.org.EmailSmsPreferences.prototype.getEmailFromAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.EmailSmsPreferences} returns this
 */
proto.api.commons.org.EmailSmsPreferences.prototype.setEmailFromAddressesList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.EmailSmsPreferences} returns this
 */
proto.api.commons.org.EmailSmsPreferences.prototype.addEmailFromAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.EmailSmsPreferences} returns this
 */
proto.api.commons.org.EmailSmsPreferences.prototype.clearEmailFromAddressesList = function() {
  return this.setEmailFromAddressesList([]);
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
proto.api.commons.org.BusinessPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BusinessPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BusinessPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BusinessPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
weeksOfData: jspb.Message.getFieldWithDefault(msg, 10, 0),
timeZone: jspb.Message.getFieldWithDefault(msg, 11, 0),
multiClientAccess: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
customVisualizations: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
timeFilter: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.api.commons.org.BusinessPreferences}
 */
proto.api.commons.org.BusinessPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BusinessPreferences;
  return proto.api.commons.org.BusinessPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BusinessPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BusinessPreferences}
 */
proto.api.commons.org.BusinessPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeeksOfData(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.AnaTimeZone} */ (reader.readEnum());
      msg.setTimeZone(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMultiClientAccess(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustomVisualizations(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeFilter(value);
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
proto.api.commons.org.BusinessPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BusinessPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BusinessPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BusinessPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeeksOfData();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getTimeZone();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getMultiClientAccess();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCustomVisualizations();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getTimeFilter();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.BusinessPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BusinessPreferences} returns this
 */
proto.api.commons.org.BusinessPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 weeks_of_data = 10;
 * @return {number}
 */
proto.api.commons.org.BusinessPreferences.prototype.getWeeksOfData = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.BusinessPreferences} returns this
 */
proto.api.commons.org.BusinessPreferences.prototype.setWeeksOfData = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional api.commons.AnaTimeZone time_zone = 11;
 * @return {!proto.api.commons.AnaTimeZone}
 */
proto.api.commons.org.BusinessPreferences.prototype.getTimeZone = function() {
  return /** @type {!proto.api.commons.AnaTimeZone} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.AnaTimeZone} value
 * @return {!proto.api.commons.org.BusinessPreferences} returns this
 */
proto.api.commons.org.BusinessPreferences.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional bool multi_client_access = 12;
 * @return {boolean}
 */
proto.api.commons.org.BusinessPreferences.prototype.getMultiClientAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BusinessPreferences} returns this
 */
proto.api.commons.org.BusinessPreferences.prototype.setMultiClientAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool custom_visualizations = 13;
 * @return {boolean}
 */
proto.api.commons.org.BusinessPreferences.prototype.getCustomVisualizations = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.BusinessPreferences} returns this
 */
proto.api.commons.org.BusinessPreferences.prototype.setCustomVisualizations = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string time_filter = 14;
 * @return {string}
 */
proto.api.commons.org.BusinessPreferences.prototype.getTimeFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BusinessPreferences} returns this
 */
proto.api.commons.org.BusinessPreferences.prototype.setTimeFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.api.commons.org.ScorecardsPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ScorecardsPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ScorecardsPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ScorecardsPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
callSamplePercentage: jspb.Message.getFieldWithDefault(msg, 2, 0),
maxUserEvaluations: jspb.Message.getFieldWithDefault(msg, 3, 0),
evaluationInterval: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.commons.org.ScorecardsPreferences}
 */
proto.api.commons.org.ScorecardsPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ScorecardsPreferences;
  return proto.api.commons.org.ScorecardsPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ScorecardsPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ScorecardsPreferences}
 */
proto.api.commons.org.ScorecardsPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCallSamplePercentage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxUserEvaluations(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.org.Scorecards.EvaluationInterval} */ (reader.readEnum());
      msg.setEvaluationInterval(value);
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
proto.api.commons.org.ScorecardsPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ScorecardsPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ScorecardsPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ScorecardsPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallSamplePercentage();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxUserEvaluations();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEvaluationInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.ScorecardsPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ScorecardsPreferences} returns this
 */
proto.api.commons.org.ScorecardsPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 call_sample_percentage = 2;
 * @return {number}
 */
proto.api.commons.org.ScorecardsPreferences.prototype.getCallSamplePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ScorecardsPreferences} returns this
 */
proto.api.commons.org.ScorecardsPreferences.prototype.setCallSamplePercentage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 max_user_evaluations = 3;
 * @return {number}
 */
proto.api.commons.org.ScorecardsPreferences.prototype.getMaxUserEvaluations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ScorecardsPreferences} returns this
 */
proto.api.commons.org.ScorecardsPreferences.prototype.setMaxUserEvaluations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Scorecards.EvaluationInterval evaluation_interval = 4;
 * @return {!proto.api.commons.org.Scorecards.EvaluationInterval}
 */
proto.api.commons.org.ScorecardsPreferences.prototype.getEvaluationInterval = function() {
  return /** @type {!proto.api.commons.org.Scorecards.EvaluationInterval} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.org.Scorecards.EvaluationInterval} value
 * @return {!proto.api.commons.org.ScorecardsPreferences} returns this
 */
proto.api.commons.org.ScorecardsPreferences.prototype.setEvaluationInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.api.commons.org.Scorecards.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.Scorecards.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.Scorecards} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Scorecards.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.commons.org.Scorecards}
 */
proto.api.commons.org.Scorecards.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.Scorecards;
  return proto.api.commons.org.Scorecards.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.Scorecards} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.Scorecards}
 */
proto.api.commons.org.Scorecards.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.org.Scorecards.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.Scorecards.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.Scorecards} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Scorecards.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.api.commons.org.Scorecards.EvaluationInterval = {
  EVALUATION_INTERVAL_DAY_UNSPECIFIED: 0,
  EVALUATION_INTERVAL_WEEK: 1,
  EVALUATION_INTERVAL_MONTH: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.VoiceAnalyticsPreferences.repeatedFields_ = [3];



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
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.VoiceAnalyticsPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.VoiceAnalyticsPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalyticsPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
redactList: jspb.Message.toObjectList(msg.getRedactList(),
    proto.api.commons.org.VoiceAnalytics.Redact.toObject, includeInstance),
notify: (f = msg.getNotify()) && proto.api.commons.org.VoiceAnalytics.Notify.toObject(includeInstance, f),
billingNotify: (f = msg.getBillingNotify()) && proto.api.commons.org.VoiceAnalytics.Notify.toObject(includeInstance, f),
numberFormat: jspb.Message.getFieldWithDefault(msg, 6, ""),
redactAllDigits: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
silenceThreshold: jspb.Message.getFieldWithDefault(msg, 100, 0),
talkOverThreshold: jspb.Message.getFieldWithDefault(msg, 200, 0)
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
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.VoiceAnalyticsPreferences;
  return proto.api.commons.org.VoiceAnalyticsPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.VoiceAnalyticsPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = new proto.api.commons.org.VoiceAnalytics.Redact;
      reader.readMessage(value,proto.api.commons.org.VoiceAnalytics.Redact.deserializeBinaryFromReader);
      msg.addRedact(value);
      break;
    case 4:
      var value = new proto.api.commons.org.VoiceAnalytics.Notify;
      reader.readMessage(value,proto.api.commons.org.VoiceAnalytics.Notify.deserializeBinaryFromReader);
      msg.setNotify(value);
      break;
    case 5:
      var value = new proto.api.commons.org.VoiceAnalytics.Notify;
      reader.readMessage(value,proto.api.commons.org.VoiceAnalytics.Notify.deserializeBinaryFromReader);
      msg.setBillingNotify(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberFormat(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRedactAllDigits(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSilenceThreshold(value);
      break;
    case 200:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTalkOverThreshold(value);
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
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.VoiceAnalyticsPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.VoiceAnalyticsPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalyticsPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRedactList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.commons.org.VoiceAnalytics.Redact.serializeBinaryToWriter
    );
  }
  f = message.getNotify();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.VoiceAnalytics.Notify.serializeBinaryToWriter
    );
  }
  f = message.getBillingNotify();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.VoiceAnalytics.Notify.serializeBinaryToWriter
    );
  }
  f = message.getNumberFormat();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRedactAllDigits();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getSilenceThreshold();
  if (f !== 0) {
    writer.writeUint32(
      100,
      f
    );
  }
  f = message.getTalkOverThreshold();
  if (f !== 0) {
    writer.writeUint32(
      200,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated VoiceAnalytics.Redact redact = 3;
 * @return {!Array<!proto.api.commons.org.VoiceAnalytics.Redact>}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getRedactList = function() {
  return /** @type{!Array<!proto.api.commons.org.VoiceAnalytics.Redact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.VoiceAnalytics.Redact, 3));
};


/**
 * @param {!Array<!proto.api.commons.org.VoiceAnalytics.Redact>} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
*/
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setRedactList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.org.VoiceAnalytics.Redact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.addRedact = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.org.VoiceAnalytics.Redact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.clearRedactList = function() {
  return this.setRedactList([]);
};


/**
 * optional VoiceAnalytics.Notify notify = 4;
 * @return {?proto.api.commons.org.VoiceAnalytics.Notify}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getNotify = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalytics.Notify} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.VoiceAnalytics.Notify, 4));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalytics.Notify|undefined} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
*/
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setNotify = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.clearNotify = function() {
  return this.setNotify(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.hasNotify = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional VoiceAnalytics.Notify billing_notify = 5;
 * @return {?proto.api.commons.org.VoiceAnalytics.Notify}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getBillingNotify = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalytics.Notify} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.VoiceAnalytics.Notify, 5));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalytics.Notify|undefined} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
*/
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setBillingNotify = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.clearBillingNotify = function() {
  return this.setBillingNotify(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.hasBillingNotify = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string number_format = 6;
 * @return {string}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getNumberFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setNumberFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool redact_all_digits = 10;
 * @return {boolean}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getRedactAllDigits = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setRedactAllDigits = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional uint32 silence_threshold = 100;
 * @return {number}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getSilenceThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setSilenceThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional uint32 talk_over_threshold = 200;
 * @return {number}
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.getTalkOverThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 200, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences} returns this
 */
proto.api.commons.org.VoiceAnalyticsPreferences.prototype.setTalkOverThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 200, value);
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
proto.api.commons.org.VoiceAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.VoiceAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.VoiceAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.commons.org.VoiceAnalytics}
 */
proto.api.commons.org.VoiceAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.VoiceAnalytics;
  return proto.api.commons.org.VoiceAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.VoiceAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.VoiceAnalytics}
 */
proto.api.commons.org.VoiceAnalytics.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.org.VoiceAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.VoiceAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.VoiceAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.VoiceAnalytics.Redact.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.VoiceAnalytics.Redact.WhereCase = {
  WHERE_NOT_SET: 0,
  NUMBER: 1,
  REDACT_ENTITY: 2
};

/**
 * @return {proto.api.commons.org.VoiceAnalytics.Redact.WhereCase}
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.getWhereCase = function() {
  return /** @type {proto.api.commons.org.VoiceAnalytics.Redact.WhereCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.VoiceAnalytics.Redact.oneofGroups_[0]));
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
proto.api.commons.org.VoiceAnalytics.Redact.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.VoiceAnalytics.Redact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.VoiceAnalytics.Redact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.Redact.toObject = function(includeInstance, msg) {
  var f, obj = {
number: (f = msg.getNumber()) && proto.api.commons.org.VoiceAnalytics.Number.toObject(includeInstance, f),
redactEntity: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact}
 */
proto.api.commons.org.VoiceAnalytics.Redact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.VoiceAnalytics.Redact;
  return proto.api.commons.org.VoiceAnalytics.Redact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.VoiceAnalytics.Redact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact}
 */
proto.api.commons.org.VoiceAnalytics.Redact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.VoiceAnalytics.Number;
      reader.readMessage(value,proto.api.commons.org.VoiceAnalytics.Number.deserializeBinaryFromReader);
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.ClassifierEntityType} */ (reader.readEnum());
      msg.setRedactEntity(value);
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
proto.api.commons.org.VoiceAnalytics.Redact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.VoiceAnalytics.Redact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.VoiceAnalytics.Redact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.Redact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.VoiceAnalytics.Number.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.api.commons.ClassifierEntityType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Number number = 1;
 * @return {?proto.api.commons.org.VoiceAnalytics.Number}
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.getNumber = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalytics.Number} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.VoiceAnalytics.Number, 1));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalytics.Number|undefined} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact} returns this
*/
proto.api.commons.org.VoiceAnalytics.Redact.prototype.setNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.commons.org.VoiceAnalytics.Redact.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact} returns this
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.clearNumber = function() {
  return this.setNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional api.commons.ClassifierEntityType redact_entity = 2;
 * @return {!proto.api.commons.ClassifierEntityType}
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.getRedactEntity = function() {
  return /** @type {!proto.api.commons.ClassifierEntityType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ClassifierEntityType} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact} returns this
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.setRedactEntity = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.VoiceAnalytics.Redact.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.VoiceAnalytics.Redact} returns this
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.clearRedactEntity = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.VoiceAnalytics.Redact.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.VoiceAnalytics.Redact.prototype.hasRedactEntity = function() {
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
proto.api.commons.org.VoiceAnalytics.Number.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.VoiceAnalytics.Number.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.VoiceAnalytics.Number} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.Number.toObject = function(includeInstance, msg) {
  var f, obj = {
kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
minConsecutive: jspb.Message.getFieldWithDefault(msg, 2, 0),
maxConsecutive: jspb.Message.getFieldWithDefault(msg, 3, 0),
slop: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.commons.org.VoiceAnalytics.Number}
 */
proto.api.commons.org.VoiceAnalytics.Number.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.VoiceAnalytics.Number;
  return proto.api.commons.org.VoiceAnalytics.Number.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.VoiceAnalytics.Number} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.VoiceAnalytics.Number}
 */
proto.api.commons.org.VoiceAnalytics.Number.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.org.VoiceAnalytics.Number.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinConsecutive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxConsecutive(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlop(value);
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
proto.api.commons.org.VoiceAnalytics.Number.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.VoiceAnalytics.Number.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.VoiceAnalytics.Number} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.Number.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMinConsecutive();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxConsecutive();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSlop();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.api.commons.org.VoiceAnalytics.Number.Kind = {
  KIND_CARDINAL_UNSPECIFIED: 0,
  KIND_ORDINAL: 1,
  KIND_ANY: 2
};

/**
 * optional Kind kind = 1;
 * @return {!proto.api.commons.org.VoiceAnalytics.Number.Kind}
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.getKind = function() {
  return /** @type {!proto.api.commons.org.VoiceAnalytics.Number.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.org.VoiceAnalytics.Number.Kind} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Number} returns this
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 min_consecutive = 2;
 * @return {number}
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.getMinConsecutive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Number} returns this
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.setMinConsecutive = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 max_consecutive = 3;
 * @return {number}
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.getMaxConsecutive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Number} returns this
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.setMaxConsecutive = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 slop = 4;
 * @return {number}
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.getSlop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Number} returns this
 */
proto.api.commons.org.VoiceAnalytics.Number.prototype.setSlop = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.api.commons.org.VoiceAnalytics.Notify.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.VoiceAnalytics.Notify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.VoiceAnalytics.Notify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.Notify.toObject = function(includeInstance, msg) {
  var f, obj = {
cron: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.commons.org.VoiceAnalytics.Notify}
 */
proto.api.commons.org.VoiceAnalytics.Notify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.VoiceAnalytics.Notify;
  return proto.api.commons.org.VoiceAnalytics.Notify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.VoiceAnalytics.Notify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.VoiceAnalytics.Notify}
 */
proto.api.commons.org.VoiceAnalytics.Notify.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCron(value);
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
proto.api.commons.org.VoiceAnalytics.Notify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.VoiceAnalytics.Notify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.VoiceAnalytics.Notify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.VoiceAnalytics.Notify.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCron();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cron = 1;
 * @return {string}
 */
proto.api.commons.org.VoiceAnalytics.Notify.prototype.getCron = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.VoiceAnalytics.Notify} returns this
 */
proto.api.commons.org.VoiceAnalytics.Notify.prototype.setCron = function(value) {
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
proto.api.commons.org.EndOfDayPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.EndOfDayPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.EndOfDayPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.EndOfDayPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
eodMonday: jspb.Message.getFieldWithDefault(msg, 10, 0),
eodTuesday: jspb.Message.getFieldWithDefault(msg, 11, 0),
eodWednesday: jspb.Message.getFieldWithDefault(msg, 12, 0),
eodThursday: jspb.Message.getFieldWithDefault(msg, 13, 0),
eodFriday: jspb.Message.getFieldWithDefault(msg, 14, 0),
eodSaturday: jspb.Message.getFieldWithDefault(msg, 15, 0),
eodSunday: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.api.commons.org.EndOfDayPreferences}
 */
proto.api.commons.org.EndOfDayPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.EndOfDayPreferences;
  return proto.api.commons.org.EndOfDayPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.EndOfDayPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.EndOfDayPreferences}
 */
proto.api.commons.org.EndOfDayPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodMonday(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodTuesday(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodWednesday(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodThursday(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodFriday(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodSaturday(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEodSunday(value);
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
proto.api.commons.org.EndOfDayPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.EndOfDayPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.EndOfDayPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.EndOfDayPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEodMonday();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getEodTuesday();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getEodWednesday();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getEodThursday();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getEodFriday();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getEodSaturday();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getEodSunday();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 eod_monday = 10;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodMonday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodMonday = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 eod_tuesday = 11;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodTuesday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodTuesday = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 eod_wednesday = 12;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodWednesday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodWednesday = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 eod_thursday = 13;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodThursday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodThursday = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 eod_friday = 14;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodFriday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodFriday = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 eod_saturday = 15;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodSaturday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodSaturday = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 eod_sunday = 16;
 * @return {number}
 */
proto.api.commons.org.EndOfDayPreferences.prototype.getEodSunday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.EndOfDayPreferences} returns this
 */
proto.api.commons.org.EndOfDayPreferences.prototype.setEodSunday = function(value) {
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
proto.api.commons.org.FilterPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.FilterPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.FilterPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FilterPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultAutoReportFilter: (f = msg.getDefaultAutoReportFilter()) && proto.api.commons.org.ReportFilter.toObject(includeInstance, f),
sendEmptyAutoReports: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
displayBroadcastResendFilter: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
defaultBroadcastResendFilter: (f = msg.getDefaultBroadcastResendFilter()) && proto.api.commons.org.ReportFilter.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.FilterPreferences}
 */
proto.api.commons.org.FilterPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.FilterPreferences;
  return proto.api.commons.org.FilterPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.FilterPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.FilterPreferences}
 */
proto.api.commons.org.FilterPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new proto.api.commons.org.ReportFilter;
      reader.readMessage(value,proto.api.commons.org.ReportFilter.deserializeBinaryFromReader);
      msg.setDefaultAutoReportFilter(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendEmptyAutoReports(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayBroadcastResendFilter(value);
      break;
    case 13:
      var value = new proto.api.commons.org.ReportFilter;
      reader.readMessage(value,proto.api.commons.org.ReportFilter.deserializeBinaryFromReader);
      msg.setDefaultBroadcastResendFilter(value);
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
proto.api.commons.org.FilterPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.FilterPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.FilterPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FilterPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultAutoReportFilter();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.org.ReportFilter.serializeBinaryToWriter
    );
  }
  f = message.getSendEmptyAutoReports();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDisplayBroadcastResendFilter();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDefaultBroadcastResendFilter();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.commons.org.ReportFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.FilterPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.FilterPreferences} returns this
 */
proto.api.commons.org.FilterPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ReportFilter default_auto_report_filter = 10;
 * @return {?proto.api.commons.org.ReportFilter}
 */
proto.api.commons.org.FilterPreferences.prototype.getDefaultAutoReportFilter = function() {
  return /** @type{?proto.api.commons.org.ReportFilter} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ReportFilter, 10));
};


/**
 * @param {?proto.api.commons.org.ReportFilter|undefined} value
 * @return {!proto.api.commons.org.FilterPreferences} returns this
*/
proto.api.commons.org.FilterPreferences.prototype.setDefaultAutoReportFilter = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.FilterPreferences} returns this
 */
proto.api.commons.org.FilterPreferences.prototype.clearDefaultAutoReportFilter = function() {
  return this.setDefaultAutoReportFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.FilterPreferences.prototype.hasDefaultAutoReportFilter = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool send_empty_auto_reports = 11;
 * @return {boolean}
 */
proto.api.commons.org.FilterPreferences.prototype.getSendEmptyAutoReports = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.FilterPreferences} returns this
 */
proto.api.commons.org.FilterPreferences.prototype.setSendEmptyAutoReports = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool display_broadcast_resend_filter = 12;
 * @return {boolean}
 */
proto.api.commons.org.FilterPreferences.prototype.getDisplayBroadcastResendFilter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.FilterPreferences} returns this
 */
proto.api.commons.org.FilterPreferences.prototype.setDisplayBroadcastResendFilter = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional ReportFilter default_broadcast_resend_filter = 13;
 * @return {?proto.api.commons.org.ReportFilter}
 */
proto.api.commons.org.FilterPreferences.prototype.getDefaultBroadcastResendFilter = function() {
  return /** @type{?proto.api.commons.org.ReportFilter} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ReportFilter, 13));
};


/**
 * @param {?proto.api.commons.org.ReportFilter|undefined} value
 * @return {!proto.api.commons.org.FilterPreferences} returns this
*/
proto.api.commons.org.FilterPreferences.prototype.setDefaultBroadcastResendFilter = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.FilterPreferences} returns this
 */
proto.api.commons.org.FilterPreferences.prototype.clearDefaultBroadcastResendFilter = function() {
  return this.setDefaultBroadcastResendFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.FilterPreferences.prototype.hasDefaultBroadcastResendFilter = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.ReportFilter.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.ReportFilter.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  STANDARD: 1,
  CUSTOM: 2
};

/**
 * @return {proto.api.commons.org.ReportFilter.ChoiceCase}
 */
proto.api.commons.org.ReportFilter.prototype.getChoiceCase = function() {
  return /** @type {proto.api.commons.org.ReportFilter.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.ReportFilter.oneofGroups_[0]));
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
proto.api.commons.org.ReportFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ReportFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ReportFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ReportFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
standard: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
custom: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.ReportFilter}
 */
proto.api.commons.org.ReportFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ReportFilter;
  return proto.api.commons.org.ReportFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ReportFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ReportFilter}
 */
proto.api.commons.org.ReportFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.StandardReportFilter} */ (reader.readEnum());
      msg.setStandard(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCustom(value);
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
proto.api.commons.org.ReportFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ReportFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ReportFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ReportFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.api.commons.StandardReportFilter} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional api.commons.StandardReportFilter standard = 1;
 * @return {!proto.api.commons.StandardReportFilter}
 */
proto.api.commons.org.ReportFilter.prototype.getStandard = function() {
  return /** @type {!proto.api.commons.StandardReportFilter} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.StandardReportFilter} value
 * @return {!proto.api.commons.org.ReportFilter} returns this
 */
proto.api.commons.org.ReportFilter.prototype.setStandard = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.ReportFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.ReportFilter} returns this
 */
proto.api.commons.org.ReportFilter.prototype.clearStandard = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.ReportFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ReportFilter.prototype.hasStandard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 custom = 2;
 * @return {number}
 */
proto.api.commons.org.ReportFilter.prototype.getCustom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ReportFilter} returns this
 */
proto.api.commons.org.ReportFilter.prototype.setCustom = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.ReportFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.ReportFilter} returns this
 */
proto.api.commons.org.ReportFilter.prototype.clearCustom = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.ReportFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ReportFilter.prototype.hasCustom = function() {
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
proto.api.commons.org.RecordingPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.RecordingPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.RecordingPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.RecordingPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
conventionEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
fileNameConvention: (f = msg.getFileNameConvention()) && proto.api.commons.org.RecordingsFileNamingConvention.toObject(includeInstance, f),
zipConventionEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
zipFileNameConvention: (f = msg.getZipFileNameConvention()) && proto.api.commons.org.RecordingsZipFileNamingConvention.toObject(includeInstance, f),
exportFileType: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.api.commons.org.RecordingPreferences}
 */
proto.api.commons.org.RecordingPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.RecordingPreferences;
  return proto.api.commons.org.RecordingPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.RecordingPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.RecordingPreferences}
 */
proto.api.commons.org.RecordingPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConventionEnabled(value);
      break;
    case 11:
      var value = new proto.api.commons.org.RecordingsFileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.RecordingsFileNamingConvention.deserializeBinaryFromReader);
      msg.setFileNameConvention(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setZipConventionEnabled(value);
      break;
    case 13:
      var value = new proto.api.commons.org.RecordingsZipFileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.RecordingsZipFileNamingConvention.deserializeBinaryFromReader);
      msg.setZipFileNameConvention(value);
      break;
    case 14:
      var value = /** @type {!proto.api.commons.RecordingFileType} */ (reader.readEnum());
      msg.setExportFileType(value);
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
proto.api.commons.org.RecordingPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.RecordingPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.RecordingPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.RecordingPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConventionEnabled();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getFileNameConvention();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.commons.org.RecordingsFileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getZipConventionEnabled();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getZipFileNameConvention();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.commons.org.RecordingsZipFileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getExportFileType();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.RecordingPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
 */
proto.api.commons.org.RecordingPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool convention_enabled = 10;
 * @return {boolean}
 */
proto.api.commons.org.RecordingPreferences.prototype.getConventionEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
 */
proto.api.commons.org.RecordingPreferences.prototype.setConventionEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional RecordingsFileNamingConvention file_name_convention = 11;
 * @return {?proto.api.commons.org.RecordingsFileNamingConvention}
 */
proto.api.commons.org.RecordingPreferences.prototype.getFileNameConvention = function() {
  return /** @type{?proto.api.commons.org.RecordingsFileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.RecordingsFileNamingConvention, 11));
};


/**
 * @param {?proto.api.commons.org.RecordingsFileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
*/
proto.api.commons.org.RecordingPreferences.prototype.setFileNameConvention = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
 */
proto.api.commons.org.RecordingPreferences.prototype.clearFileNameConvention = function() {
  return this.setFileNameConvention(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingPreferences.prototype.hasFileNameConvention = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool zip_convention_enabled = 12;
 * @return {boolean}
 */
proto.api.commons.org.RecordingPreferences.prototype.getZipConventionEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
 */
proto.api.commons.org.RecordingPreferences.prototype.setZipConventionEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional RecordingsZipFileNamingConvention zip_file_name_convention = 13;
 * @return {?proto.api.commons.org.RecordingsZipFileNamingConvention}
 */
proto.api.commons.org.RecordingPreferences.prototype.getZipFileNameConvention = function() {
  return /** @type{?proto.api.commons.org.RecordingsZipFileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.RecordingsZipFileNamingConvention, 13));
};


/**
 * @param {?proto.api.commons.org.RecordingsZipFileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
*/
proto.api.commons.org.RecordingPreferences.prototype.setZipFileNameConvention = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
 */
proto.api.commons.org.RecordingPreferences.prototype.clearZipFileNameConvention = function() {
  return this.setZipFileNameConvention(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingPreferences.prototype.hasZipFileNameConvention = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional api.commons.RecordingFileType export_file_type = 14;
 * @return {!proto.api.commons.RecordingFileType}
 */
proto.api.commons.org.RecordingPreferences.prototype.getExportFileType = function() {
  return /** @type {!proto.api.commons.RecordingFileType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.api.commons.RecordingFileType} value
 * @return {!proto.api.commons.org.RecordingPreferences} returns this
 */
proto.api.commons.org.RecordingPreferences.prototype.setExportFileType = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
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
proto.api.commons.org.RecordingsFileNamingConvention.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.RecordingsFileNamingConvention.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.RecordingsFileNamingConvention} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.RecordingsFileNamingConvention.toObject = function(includeInstance, msg) {
  var f, obj = {
xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 1, 0),
inbound: (f = msg.getInbound()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f),
manual: (f = msg.getManual()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f),
outbound: (f = msg.getOutbound()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f),
preview: (f = msg.getPreview()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention}
 */
proto.api.commons.org.RecordingsFileNamingConvention.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.RecordingsFileNamingConvention;
  return proto.api.commons.org.RecordingsFileNamingConvention.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.RecordingsFileNamingConvention} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention}
 */
proto.api.commons.org.RecordingsFileNamingConvention.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
      break;
    case 2:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setInbound(value);
      break;
    case 3:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setManual(value);
      break;
    case 4:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setOutbound(value);
      break;
    case 5:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setPreview(value);
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
proto.api.commons.org.RecordingsFileNamingConvention.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.RecordingsFileNamingConvention.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.RecordingsFileNamingConvention} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.RecordingsFileNamingConvention.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInbound();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getManual();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getOutbound();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getPreview();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 xml_client_property_sid = 1;
 * @return {number}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FileNamingConvention inbound = 2;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.getInbound = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 2));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsFileNamingConvention.prototype.setInbound = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.clearInbound = function() {
  return this.setInbound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.hasInbound = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FileNamingConvention manual = 3;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.getManual = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 3));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsFileNamingConvention.prototype.setManual = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.clearManual = function() {
  return this.setManual(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.hasManual = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FileNamingConvention outbound = 4;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.getOutbound = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 4));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsFileNamingConvention.prototype.setOutbound = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.clearOutbound = function() {
  return this.setOutbound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.hasOutbound = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FileNamingConvention preview = 5;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.getPreview = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 5));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsFileNamingConvention.prototype.setPreview = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.clearPreview = function() {
  return this.setPreview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsFileNamingConvention.prototype.hasPreview = function() {
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
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.RecordingsZipFileNamingConvention.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.RecordingsZipFileNamingConvention} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.toObject = function(includeInstance, msg) {
  var f, obj = {
xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 1, 0),
inbound: (f = msg.getInbound()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f),
manual: (f = msg.getManual()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f),
outbound: (f = msg.getOutbound()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f),
combined: (f = msg.getCombined()) && proto.api.commons.org.FileNamingConvention.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.RecordingsZipFileNamingConvention;
  return proto.api.commons.org.RecordingsZipFileNamingConvention.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.RecordingsZipFileNamingConvention} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
      break;
    case 2:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setInbound(value);
      break;
    case 3:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setManual(value);
      break;
    case 4:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setOutbound(value);
      break;
    case 5:
      var value = new proto.api.commons.org.FileNamingConvention;
      reader.readMessage(value,proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader);
      msg.setCombined(value);
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
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.RecordingsZipFileNamingConvention.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.RecordingsZipFileNamingConvention} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInbound();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getManual();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getOutbound();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
  f = message.getCombined();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 xml_client_property_sid = 1;
 * @return {number}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FileNamingConvention inbound = 2;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.getInbound = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 2));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.setInbound = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.clearInbound = function() {
  return this.setInbound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.hasInbound = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FileNamingConvention manual = 3;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.getManual = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 3));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.setManual = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.clearManual = function() {
  return this.setManual(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.hasManual = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FileNamingConvention outbound = 4;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.getOutbound = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 4));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.setOutbound = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.clearOutbound = function() {
  return this.setOutbound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.hasOutbound = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FileNamingConvention combined = 5;
 * @return {?proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.getCombined = function() {
  return /** @type{?proto.api.commons.org.FileNamingConvention} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FileNamingConvention, 5));
};


/**
 * @param {?proto.api.commons.org.FileNamingConvention|undefined} value
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
*/
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.setCombined = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.RecordingsZipFileNamingConvention} returns this
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.clearCombined = function() {
  return this.setCombined(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.RecordingsZipFileNamingConvention.prototype.hasCombined = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.FileNamingConvention.repeatedFields_ = [1];



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
proto.api.commons.org.FileNamingConvention.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.FileNamingConvention.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.FileNamingConvention} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FileNamingConvention.toObject = function(includeInstance, msg) {
  var f, obj = {
segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.api.commons.org.FileNameSegment.toObject, includeInstance)
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
 * @return {!proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.FileNamingConvention.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.FileNamingConvention;
  return proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.FileNamingConvention} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.FileNamingConvention}
 */
proto.api.commons.org.FileNamingConvention.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.FileNameSegment;
      reader.readMessage(value,proto.api.commons.org.FileNameSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.api.commons.org.FileNamingConvention.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.FileNamingConvention} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FileNamingConvention.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.org.FileNameSegment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FileNameSegment segments = 1;
 * @return {!Array<!proto.api.commons.org.FileNameSegment>}
 */
proto.api.commons.org.FileNamingConvention.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.api.commons.org.FileNameSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.FileNameSegment, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.FileNameSegment>} value
 * @return {!proto.api.commons.org.FileNamingConvention} returns this
*/
proto.api.commons.org.FileNamingConvention.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.FileNameSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.FileNameSegment}
 */
proto.api.commons.org.FileNamingConvention.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.FileNameSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.FileNamingConvention} returns this
 */
proto.api.commons.org.FileNamingConvention.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
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
proto.api.commons.org.FileNameSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.FileNameSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.FileNameSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FileNameSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
segmentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
formatPattern: jspb.Message.getFieldWithDefault(msg, 2, ""),
timeZoneId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.commons.org.FileNameSegment}
 */
proto.api.commons.org.FileNameSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.FileNameSegment;
  return proto.api.commons.org.FileNameSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.FileNameSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.FileNameSegment}
 */
proto.api.commons.org.FileNameSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSegmentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatPattern(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZoneId(value);
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
proto.api.commons.org.FileNameSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.FileNameSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.FileNameSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FileNameSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormatPattern();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeZoneId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string segment_type = 1;
 * @return {string}
 */
proto.api.commons.org.FileNameSegment.prototype.getSegmentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.FileNameSegment} returns this
 */
proto.api.commons.org.FileNameSegment.prototype.setSegmentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string format_pattern = 2;
 * @return {string}
 */
proto.api.commons.org.FileNameSegment.prototype.getFormatPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.FileNameSegment} returns this
 */
proto.api.commons.org.FileNameSegment.prototype.setFormatPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string time_zone_id = 3;
 * @return {string}
 */
proto.api.commons.org.FileNameSegment.prototype.getTimeZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.FileNameSegment} returns this
 */
proto.api.commons.org.FileNameSegment.prototype.setTimeZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.AdminClientPreferences.repeatedFields_ = [11,15,16,19];



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
proto.api.commons.org.AdminClientPreferences.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AdminClientPreferences.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AdminClientPreferences} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AdminClientPreferences.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
useReservedCarrier: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
reservedCarriersList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
emailKey: jspb.Message.getFieldWithDefault(msg, 12, ""),
emailId: jspb.Message.getFieldWithDefault(msg, 13, ""),
emailName: jspb.Message.getFieldWithDefault(msg, 14, ""),
whitelistIpsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
whitelistDomainsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
callbacksServiceId: jspb.Message.getFieldWithDefault(msg, 17, ""),
agentScreenRecording: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
allowedCountriesList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.AdminClientPreferences}
 */
proto.api.commons.org.AdminClientPreferences.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AdminClientPreferences;
  return proto.api.commons.org.AdminClientPreferences.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AdminClientPreferences} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AdminClientPreferences}
 */
proto.api.commons.org.AdminClientPreferences.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseReservedCarrier(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedCarriers(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailKey(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailName(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addWhitelistIps(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addWhitelistDomains(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallbacksServiceId(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgentScreenRecording(value);
      break;
    case 19:
      var values = /** @type {!Array<!proto.api.commons.Country>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAllowedCountries(values[i]);
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
proto.api.commons.org.AdminClientPreferences.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AdminClientPreferences.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AdminClientPreferences} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AdminClientPreferences.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseReservedCarrier();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getReservedCarriersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getEmailKey();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEmailId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEmailName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getWhitelistIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getWhitelistDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getCallbacksServiceId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getAgentScreenRecording();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getAllowedCountriesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      19,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool use_reserved_carrier = 10;
 * @return {boolean}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getUseReservedCarrier = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setUseReservedCarrier = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string reserved_carriers = 11;
 * @return {!Array<string>}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getReservedCarriersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setReservedCarriersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.addReservedCarriers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.clearReservedCarriersList = function() {
  return this.setReservedCarriersList([]);
};


/**
 * optional string email_key = 12;
 * @return {string}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getEmailKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setEmailKey = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string email_id = 13;
 * @return {string}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getEmailId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setEmailId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string email_name = 14;
 * @return {string}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getEmailName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setEmailName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated string whitelist_ips = 15;
 * @return {!Array<string>}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getWhitelistIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setWhitelistIpsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.addWhitelistIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.clearWhitelistIpsList = function() {
  return this.setWhitelistIpsList([]);
};


/**
 * repeated string whitelist_domains = 16;
 * @return {!Array<string>}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getWhitelistDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setWhitelistDomainsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.addWhitelistDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.clearWhitelistDomainsList = function() {
  return this.setWhitelistDomainsList([]);
};


/**
 * optional string callbacks_service_id = 17;
 * @return {string}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getCallbacksServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setCallbacksServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool agent_screen_recording = 18;
 * @return {boolean}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getAgentScreenRecording = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setAgentScreenRecording = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * repeated api.commons.Country allowed_countries = 19;
 * @return {!Array<!proto.api.commons.Country>}
 */
proto.api.commons.org.AdminClientPreferences.prototype.getAllowedCountriesList = function() {
  return /** @type {!Array<!proto.api.commons.Country>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<!proto.api.commons.Country>} value
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.setAllowedCountriesList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {!proto.api.commons.Country} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.addAllowedCountries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AdminClientPreferences} returns this
 */
proto.api.commons.org.AdminClientPreferences.prototype.clearAllowedCountriesList = function() {
  return this.setAllowedCountriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.BusinessHours.repeatedFields_ = [9];



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
proto.api.commons.org.BusinessHours.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.BusinessHours.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.BusinessHours} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BusinessHours.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
businessHoursId: jspb.Message.getFieldWithDefault(msg, 6, ""),
businessHoursName: jspb.Message.getFieldWithDefault(msg, 7, ""),
timezone: jspb.Message.getFieldWithDefault(msg, 8, 0),
dayIntervalsList: jspb.Message.toObjectList(msg.getDayIntervalsList(),
    proto.api.commons.org.DayInterval.toObject, includeInstance),
lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.BusinessHours}
 */
proto.api.commons.org.BusinessHours.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.BusinessHours;
  return proto.api.commons.org.BusinessHours.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.BusinessHours} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.BusinessHours}
 */
proto.api.commons.org.BusinessHours.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursName(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimezone(value);
      break;
    case 9:
      var value = new proto.api.commons.org.DayInterval;
      reader.readMessage(value,proto.api.commons.org.DayInterval.deserializeBinaryFromReader);
      msg.addDayIntervals(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
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
proto.api.commons.org.BusinessHours.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.BusinessHours.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.BusinessHours} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.BusinessHours.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBusinessHoursName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getDayIntervalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.commons.org.DayInterval.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.BusinessHours.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.commons.org.BusinessHours.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string business_hours_id = 6;
 * @return {string}
 */
proto.api.commons.org.BusinessHours.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.setBusinessHoursId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string business_hours_name = 7;
 * @return {string}
 */
proto.api.commons.org.BusinessHours.prototype.getBusinessHoursName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.setBusinessHoursName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional api.commons.TimeZone timezone = 8;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.commons.org.BusinessHours.prototype.getTimezone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated DayInterval day_intervals = 9;
 * @return {!Array<!proto.api.commons.org.DayInterval>}
 */
proto.api.commons.org.BusinessHours.prototype.getDayIntervalsList = function() {
  return /** @type{!Array<!proto.api.commons.org.DayInterval>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DayInterval, 9));
};


/**
 * @param {!Array<!proto.api.commons.org.DayInterval>} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
*/
proto.api.commons.org.BusinessHours.prototype.setDayIntervalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.org.DayInterval=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DayInterval}
 */
proto.api.commons.org.BusinessHours.prototype.addDayIntervals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.org.DayInterval, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.clearDayIntervalsList = function() {
  return this.setDayIntervalsList([]);
};


/**
 * optional google.protobuf.Timestamp last_updated = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.BusinessHours.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.BusinessHours} returns this
*/
proto.api.commons.org.BusinessHours.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.BusinessHours} returns this
 */
proto.api.commons.org.BusinessHours.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.BusinessHours.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.api.commons.org.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
startHour: jspb.Message.getFieldWithDefault(msg, 1, 0),
startMinute: jspb.Message.getFieldWithDefault(msg, 2, 0),
endHour: jspb.Message.getFieldWithDefault(msg, 3, 0),
endMinute: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.commons.org.Range}
 */
proto.api.commons.org.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.Range;
  return proto.api.commons.org.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.Range}
 */
proto.api.commons.org.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartHour(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartMinute(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndHour(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndMinute(value);
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
proto.api.commons.org.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartHour();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartMinute();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndHour();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getEndMinute();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 start_hour = 1;
 * @return {number}
 */
proto.api.commons.org.Range.prototype.getStartHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Range} returns this
 */
proto.api.commons.org.Range.prototype.setStartHour = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 start_minute = 2;
 * @return {number}
 */
proto.api.commons.org.Range.prototype.getStartMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Range} returns this
 */
proto.api.commons.org.Range.prototype.setStartMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 end_hour = 3;
 * @return {number}
 */
proto.api.commons.org.Range.prototype.getEndHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Range} returns this
 */
proto.api.commons.org.Range.prototype.setEndHour = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 end_minute = 4;
 * @return {number}
 */
proto.api.commons.org.Range.prototype.getEndMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Range} returns this
 */
proto.api.commons.org.Range.prototype.setEndMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.api.commons.org.TimeOfDay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TimeOfDay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TimeOfDay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TimeOfDay.toObject = function(includeInstance, msg) {
  var f, obj = {
hour: jspb.Message.getFieldWithDefault(msg, 1, 0),
minute: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.org.TimeOfDay}
 */
proto.api.commons.org.TimeOfDay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TimeOfDay;
  return proto.api.commons.org.TimeOfDay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TimeOfDay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TimeOfDay}
 */
proto.api.commons.org.TimeOfDay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHour(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinute(value);
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
proto.api.commons.org.TimeOfDay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TimeOfDay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TimeOfDay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TimeOfDay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHour();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinute();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 hour = 1;
 * @return {number}
 */
proto.api.commons.org.TimeOfDay.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.TimeOfDay} returns this
 */
proto.api.commons.org.TimeOfDay.prototype.setHour = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 minute = 2;
 * @return {number}
 */
proto.api.commons.org.TimeOfDay.prototype.getMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.TimeOfDay} returns this
 */
proto.api.commons.org.TimeOfDay.prototype.setMinute = function(value) {
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
proto.api.commons.org.DayInterval.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DayInterval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DayInterval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DayInterval.toObject = function(includeInstance, msg) {
  var f, obj = {
day: jspb.Message.getFieldWithDefault(msg, 1, 0),
start: (f = msg.getStart()) && proto.api.commons.org.TimeOfDay.toObject(includeInstance, f),
end: (f = msg.getEnd()) && proto.api.commons.org.TimeOfDay.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.DayInterval}
 */
proto.api.commons.org.DayInterval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DayInterval;
  return proto.api.commons.org.DayInterval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DayInterval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DayInterval}
 */
proto.api.commons.org.DayInterval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.Weekday.Enum} */ (reader.readEnum());
      msg.setDay(value);
      break;
    case 2:
      var value = new proto.api.commons.org.TimeOfDay;
      reader.readMessage(value,proto.api.commons.org.TimeOfDay.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 3:
      var value = new proto.api.commons.org.TimeOfDay;
      reader.readMessage(value,proto.api.commons.org.TimeOfDay.deserializeBinaryFromReader);
      msg.setEnd(value);
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
proto.api.commons.org.DayInterval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DayInterval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DayInterval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DayInterval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.org.TimeOfDay.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Weekday.Enum day = 1;
 * @return {!proto.api.commons.Weekday.Enum}
 */
proto.api.commons.org.DayInterval.prototype.getDay = function() {
  return /** @type {!proto.api.commons.Weekday.Enum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @return {!proto.api.commons.org.DayInterval} returns this
 */
proto.api.commons.org.DayInterval.prototype.setDay = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TimeOfDay start = 2;
 * @return {?proto.api.commons.org.TimeOfDay}
 */
proto.api.commons.org.DayInterval.prototype.getStart = function() {
  return /** @type{?proto.api.commons.org.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TimeOfDay, 2));
};


/**
 * @param {?proto.api.commons.org.TimeOfDay|undefined} value
 * @return {!proto.api.commons.org.DayInterval} returns this
*/
proto.api.commons.org.DayInterval.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.DayInterval} returns this
 */
proto.api.commons.org.DayInterval.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DayInterval.prototype.hasStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TimeOfDay end = 3;
 * @return {?proto.api.commons.org.TimeOfDay}
 */
proto.api.commons.org.DayInterval.prototype.getEnd = function() {
  return /** @type{?proto.api.commons.org.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TimeOfDay, 3));
};


/**
 * @param {?proto.api.commons.org.TimeOfDay|undefined} value
 * @return {!proto.api.commons.org.DayInterval} returns this
*/
proto.api.commons.org.DayInterval.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.DayInterval} returns this
 */
proto.api.commons.org.DayInterval.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DayInterval.prototype.hasEnd = function() {
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
proto.api.commons.org.MonthDayDate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.MonthDayDate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.MonthDayDate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.MonthDayDate.toObject = function(includeInstance, msg) {
  var f, obj = {
dateName: jspb.Message.getFieldWithDefault(msg, 1, ""),
month: jspb.Message.getFieldWithDefault(msg, 2, 0),
dayOfMonth: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.commons.org.MonthDayDate}
 */
proto.api.commons.org.MonthDayDate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.MonthDayDate;
  return proto.api.commons.org.MonthDayDate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.MonthDayDate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.MonthDayDate}
 */
proto.api.commons.org.MonthDayDate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateName(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.Month} */ (reader.readEnum());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDayOfMonth(value);
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
proto.api.commons.org.MonthDayDate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.MonthDayDate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.MonthDayDate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.MonthDayDate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDayOfMonth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string date_name = 1;
 * @return {string}
 */
proto.api.commons.org.MonthDayDate.prototype.getDateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.MonthDayDate} returns this
 */
proto.api.commons.org.MonthDayDate.prototype.setDateName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.Month month = 2;
 * @return {!proto.api.commons.Month}
 */
proto.api.commons.org.MonthDayDate.prototype.getMonth = function() {
  return /** @type {!proto.api.commons.Month} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.Month} value
 * @return {!proto.api.commons.org.MonthDayDate} returns this
 */
proto.api.commons.org.MonthDayDate.prototype.setMonth = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 day_of_month = 3;
 * @return {number}
 */
proto.api.commons.org.MonthDayDate.prototype.getDayOfMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.MonthDayDate} returns this
 */
proto.api.commons.org.MonthDayDate.prototype.setDayOfMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CountryHoliday.repeatedFields_ = [4,5];



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
proto.api.commons.org.CountryHoliday.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CountryHoliday.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CountryHoliday} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CountryHoliday.toObject = function(includeInstance, msg) {
  var f, obj = {
holidayName: jspb.Message.getFieldWithDefault(msg, 1, ""),
country: jspb.Message.getFieldWithDefault(msg, 2, 0),
countryName: jspb.Message.getFieldWithDefault(msg, 3, ""),
typesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
statesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.CountryHoliday}
 */
proto.api.commons.org.CountryHoliday.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CountryHoliday;
  return proto.api.commons.org.CountryHoliday.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CountryHoliday} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CountryHoliday}
 */
proto.api.commons.org.CountryHoliday.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHolidayName(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setCountry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addStates(value);
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
proto.api.commons.org.CountryHoliday.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CountryHoliday.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CountryHoliday} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CountryHoliday.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHolidayName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCountryName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string holiday_name = 1;
 * @return {string}
 */
proto.api.commons.org.CountryHoliday.prototype.getHolidayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.setHolidayName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.Country country = 2;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.CountryHoliday.prototype.getCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.setCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string country_name = 3;
 * @return {string}
 */
proto.api.commons.org.CountryHoliday.prototype.getCountryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.setCountryName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string types = 4;
 * @return {!Array<string>}
 */
proto.api.commons.org.CountryHoliday.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * repeated string states = 5;
 * @return {!Array<string>}
 */
proto.api.commons.org.CountryHoliday.prototype.getStatesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CountryHoliday} returns this
 */
proto.api.commons.org.CountryHoliday.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.ProgrammedDay.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.ProgrammedDay.DaytypeCase = {
  DAYTYPE_NOT_SET: 0,
  DAY: 1,
  HOLIDAY: 2
};

/**
 * @return {proto.api.commons.org.ProgrammedDay.DaytypeCase}
 */
proto.api.commons.org.ProgrammedDay.prototype.getDaytypeCase = function() {
  return /** @type {proto.api.commons.org.ProgrammedDay.DaytypeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.ProgrammedDay.oneofGroups_[0]));
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
proto.api.commons.org.ProgrammedDay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ProgrammedDay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ProgrammedDay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ProgrammedDay.toObject = function(includeInstance, msg) {
  var f, obj = {
day: (f = msg.getDay()) && proto.api.commons.org.MonthDayDate.toObject(includeInstance, f),
holiday: (f = msg.getHoliday()) && proto.api.commons.org.CountryHoliday.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.ProgrammedDay}
 */
proto.api.commons.org.ProgrammedDay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ProgrammedDay;
  return proto.api.commons.org.ProgrammedDay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ProgrammedDay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ProgrammedDay}
 */
proto.api.commons.org.ProgrammedDay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.MonthDayDate;
      reader.readMessage(value,proto.api.commons.org.MonthDayDate.deserializeBinaryFromReader);
      msg.setDay(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CountryHoliday;
      reader.readMessage(value,proto.api.commons.org.CountryHoliday.deserializeBinaryFromReader);
      msg.setHoliday(value);
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
proto.api.commons.org.ProgrammedDay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ProgrammedDay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ProgrammedDay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ProgrammedDay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.MonthDayDate.serializeBinaryToWriter
    );
  }
  f = message.getHoliday();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.CountryHoliday.serializeBinaryToWriter
    );
  }
};


/**
 * optional MonthDayDate day = 1;
 * @return {?proto.api.commons.org.MonthDayDate}
 */
proto.api.commons.org.ProgrammedDay.prototype.getDay = function() {
  return /** @type{?proto.api.commons.org.MonthDayDate} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.MonthDayDate, 1));
};


/**
 * @param {?proto.api.commons.org.MonthDayDate|undefined} value
 * @return {!proto.api.commons.org.ProgrammedDay} returns this
*/
proto.api.commons.org.ProgrammedDay.prototype.setDay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.commons.org.ProgrammedDay.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ProgrammedDay} returns this
 */
proto.api.commons.org.ProgrammedDay.prototype.clearDay = function() {
  return this.setDay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ProgrammedDay.prototype.hasDay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CountryHoliday holiday = 2;
 * @return {?proto.api.commons.org.CountryHoliday}
 */
proto.api.commons.org.ProgrammedDay.prototype.getHoliday = function() {
  return /** @type{?proto.api.commons.org.CountryHoliday} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CountryHoliday, 2));
};


/**
 * @param {?proto.api.commons.org.CountryHoliday|undefined} value
 * @return {!proto.api.commons.org.ProgrammedDay} returns this
*/
proto.api.commons.org.ProgrammedDay.prototype.setHoliday = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.commons.org.ProgrammedDay.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ProgrammedDay} returns this
 */
proto.api.commons.org.ProgrammedDay.prototype.clearHoliday = function() {
  return this.setHoliday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ProgrammedDay.prototype.hasHoliday = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.ProgrammedDates.repeatedFields_ = [6];



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
proto.api.commons.org.ProgrammedDates.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ProgrammedDates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ProgrammedDates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ProgrammedDates.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
programmedDatesId: jspb.Message.getFieldWithDefault(msg, 2, ""),
programmedDatesName: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
timezone: jspb.Message.getFieldWithDefault(msg, 5, 0),
daysList: jspb.Message.toObjectList(msg.getDaysList(),
    proto.api.commons.org.ProgrammedDay.toObject, includeInstance),
lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.ProgrammedDates}
 */
proto.api.commons.org.ProgrammedDates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ProgrammedDates;
  return proto.api.commons.org.ProgrammedDates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ProgrammedDates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ProgrammedDates}
 */
proto.api.commons.org.ProgrammedDates.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setProgrammedDatesId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgrammedDatesName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimezone(value);
      break;
    case 6:
      var value = new proto.api.commons.org.ProgrammedDay;
      reader.readMessage(value,proto.api.commons.org.ProgrammedDay.deserializeBinaryFromReader);
      msg.addDays(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
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
proto.api.commons.org.ProgrammedDates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ProgrammedDates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ProgrammedDates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ProgrammedDates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProgrammedDatesId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProgrammedDatesName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.org.ProgrammedDay.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.ProgrammedDates.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string programmed_dates_id = 2;
 * @return {string}
 */
proto.api.commons.org.ProgrammedDates.prototype.getProgrammedDatesId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.setProgrammedDatesId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string programmed_dates_name = 3;
 * @return {string}
 */
proto.api.commons.org.ProgrammedDates.prototype.getProgrammedDatesName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.setProgrammedDatesName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.commons.org.ProgrammedDates.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.TimeZone timezone = 5;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.commons.org.ProgrammedDates.prototype.getTimezone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated ProgrammedDay days = 6;
 * @return {!Array<!proto.api.commons.org.ProgrammedDay>}
 */
proto.api.commons.org.ProgrammedDates.prototype.getDaysList = function() {
  return /** @type{!Array<!proto.api.commons.org.ProgrammedDay>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.ProgrammedDay, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.ProgrammedDay>} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
*/
proto.api.commons.org.ProgrammedDates.prototype.setDaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.ProgrammedDay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ProgrammedDay}
 */
proto.api.commons.org.ProgrammedDates.prototype.addDays = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.ProgrammedDay, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.clearDaysList = function() {
  return this.setDaysList([]);
};


/**
 * optional google.protobuf.Timestamp last_updated = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.ProgrammedDates.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
*/
proto.api.commons.org.ProgrammedDates.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ProgrammedDates} returns this
 */
proto.api.commons.org.ProgrammedDates.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ProgrammedDates.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.ObservedHolidays.repeatedFields_ = [6];



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
proto.api.commons.org.ObservedHolidays.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ObservedHolidays.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ObservedHolidays} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ObservedHolidays.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
observedHolidaysId: jspb.Message.getFieldWithDefault(msg, 2, ""),
observedHolidaysName: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
timezone: jspb.Message.getFieldWithDefault(msg, 5, 0),
daysList: jspb.Message.toObjectList(msg.getDaysList(),
    proto.api.commons.org.ObservedHoliday.toObject, includeInstance),
lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.ObservedHolidays}
 */
proto.api.commons.org.ObservedHolidays.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ObservedHolidays;
  return proto.api.commons.org.ObservedHolidays.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ObservedHolidays} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ObservedHolidays}
 */
proto.api.commons.org.ObservedHolidays.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setObservedHolidaysId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setObservedHolidaysName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimezone(value);
      break;
    case 6:
      var value = new proto.api.commons.org.ObservedHoliday;
      reader.readMessage(value,proto.api.commons.org.ObservedHoliday.deserializeBinaryFromReader);
      msg.addDays(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
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
proto.api.commons.org.ObservedHolidays.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ObservedHolidays.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ObservedHolidays} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ObservedHolidays.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObservedHolidaysId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObservedHolidaysName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.org.ObservedHoliday.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.ObservedHolidays.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string observed_holidays_id = 2;
 * @return {string}
 */
proto.api.commons.org.ObservedHolidays.prototype.getObservedHolidaysId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.setObservedHolidaysId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string observed_holidays_name = 3;
 * @return {string}
 */
proto.api.commons.org.ObservedHolidays.prototype.getObservedHolidaysName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.setObservedHolidaysName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.commons.org.ObservedHolidays.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.TimeZone timezone = 5;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.commons.org.ObservedHolidays.prototype.getTimezone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated ObservedHoliday days = 6;
 * @return {!Array<!proto.api.commons.org.ObservedHoliday>}
 */
proto.api.commons.org.ObservedHolidays.prototype.getDaysList = function() {
  return /** @type{!Array<!proto.api.commons.org.ObservedHoliday>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.ObservedHoliday, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.ObservedHoliday>} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
*/
proto.api.commons.org.ObservedHolidays.prototype.setDaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.ObservedHoliday=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ObservedHoliday}
 */
proto.api.commons.org.ObservedHolidays.prototype.addDays = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.ObservedHoliday, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.clearDaysList = function() {
  return this.setDaysList([]);
};


/**
 * optional google.protobuf.Timestamp last_updated = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.ObservedHolidays.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
*/
proto.api.commons.org.ObservedHolidays.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ObservedHolidays} returns this
 */
proto.api.commons.org.ObservedHolidays.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ObservedHolidays.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.ObservedHoliday.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.ObservedHoliday.DaytypeCase = {
  DAYTYPE_NOT_SET: 0,
  DAY: 1,
  HOLIDAY: 2
};

/**
 * @return {proto.api.commons.org.ObservedHoliday.DaytypeCase}
 */
proto.api.commons.org.ObservedHoliday.prototype.getDaytypeCase = function() {
  return /** @type {proto.api.commons.org.ObservedHoliday.DaytypeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.ObservedHoliday.oneofGroups_[0]));
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
proto.api.commons.org.ObservedHoliday.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ObservedHoliday.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ObservedHoliday} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ObservedHoliday.toObject = function(includeInstance, msg) {
  var f, obj = {
day: (f = msg.getDay()) && proto.api.commons.org.MonthDayDate.toObject(includeInstance, f),
holiday: (f = msg.getHoliday()) && proto.api.commons.org.CountryHoliday.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.ObservedHoliday}
 */
proto.api.commons.org.ObservedHoliday.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ObservedHoliday;
  return proto.api.commons.org.ObservedHoliday.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ObservedHoliday} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ObservedHoliday}
 */
proto.api.commons.org.ObservedHoliday.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.MonthDayDate;
      reader.readMessage(value,proto.api.commons.org.MonthDayDate.deserializeBinaryFromReader);
      msg.setDay(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CountryHoliday;
      reader.readMessage(value,proto.api.commons.org.CountryHoliday.deserializeBinaryFromReader);
      msg.setHoliday(value);
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
proto.api.commons.org.ObservedHoliday.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ObservedHoliday.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ObservedHoliday} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ObservedHoliday.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.MonthDayDate.serializeBinaryToWriter
    );
  }
  f = message.getHoliday();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.CountryHoliday.serializeBinaryToWriter
    );
  }
};


/**
 * optional MonthDayDate day = 1;
 * @return {?proto.api.commons.org.MonthDayDate}
 */
proto.api.commons.org.ObservedHoliday.prototype.getDay = function() {
  return /** @type{?proto.api.commons.org.MonthDayDate} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.MonthDayDate, 1));
};


/**
 * @param {?proto.api.commons.org.MonthDayDate|undefined} value
 * @return {!proto.api.commons.org.ObservedHoliday} returns this
*/
proto.api.commons.org.ObservedHoliday.prototype.setDay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.commons.org.ObservedHoliday.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ObservedHoliday} returns this
 */
proto.api.commons.org.ObservedHoliday.prototype.clearDay = function() {
  return this.setDay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ObservedHoliday.prototype.hasDay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CountryHoliday holiday = 2;
 * @return {?proto.api.commons.org.CountryHoliday}
 */
proto.api.commons.org.ObservedHoliday.prototype.getHoliday = function() {
  return /** @type{?proto.api.commons.org.CountryHoliday} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CountryHoliday, 2));
};


/**
 * @param {?proto.api.commons.org.CountryHoliday|undefined} value
 * @return {!proto.api.commons.org.ObservedHoliday} returns this
*/
proto.api.commons.org.ObservedHoliday.prototype.setHoliday = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.commons.org.ObservedHoliday.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ObservedHoliday} returns this
 */
proto.api.commons.org.ObservedHoliday.prototype.clearHoliday = function() {
  return this.setHoliday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ObservedHoliday.prototype.hasHoliday = function() {
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
proto.api.commons.org.CertificateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CertificateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CertificateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CertificateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
certificateInfoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
hash: jspb.Message.getFieldWithDefault(msg, 5, ""),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
requestBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
deleted: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
revoked: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.api.commons.org.CertificateInfo}
 */
proto.api.commons.org.CertificateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CertificateInfo;
  return proto.api.commons.org.CertificateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CertificateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CertificateInfo}
 */
proto.api.commons.org.CertificateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertificateInfoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestBy(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRevoked(value);
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
proto.api.commons.org.CertificateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CertificateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CertificateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CertificateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertificateInfoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRequestBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRevoked();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string certificate_info_id = 1;
 * @return {string}
 */
proto.api.commons.org.CertificateInfo.prototype.getCertificateInfoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setCertificateInfoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.commons.org.CertificateInfo.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.commons.org.CertificateInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.commons.org.CertificateInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string hash = 5;
 * @return {string}
 */
proto.api.commons.org.CertificateInfo.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.CertificateInfo.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
*/
proto.api.commons.org.CertificateInfo.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CertificateInfo.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp creation_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.CertificateInfo.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
*/
proto.api.commons.org.CertificateInfo.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CertificateInfo.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string request_by = 8;
 * @return {string}
 */
proto.api.commons.org.CertificateInfo.prototype.getRequestBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setRequestBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool deleted = 9;
 * @return {boolean}
 */
proto.api.commons.org.CertificateInfo.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool revoked = 10;
 * @return {boolean}
 */
proto.api.commons.org.CertificateInfo.prototype.getRevoked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CertificateInfo} returns this
 */
proto.api.commons.org.CertificateInfo.prototype.setRevoked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


goog.object.extend(exports, proto.api.commons.org);
