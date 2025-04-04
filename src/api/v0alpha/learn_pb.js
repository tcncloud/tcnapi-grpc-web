// source: api/v0alpha/learn.proto
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

var annotations_authz_pb = require('../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.v0alpha.AdvancedSearchReq', null, global);
goog.exportSymbol('proto.api.v0alpha.AdvancedSearchRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ContentByVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ContentEditorDataReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ContentEditorDataRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ContentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ContentRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateEditVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateEditVersionRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteLearnPagesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteLearnPagesRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteStandaloneReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteStandaloneRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteVersionRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ExistReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ExistRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ExportManyReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ExportRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetUpdateUrlReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetUpdateUrlRes', null, global);
goog.exportSymbol('proto.api.v0alpha.LearnImage', null, global);
goog.exportSymbol('proto.api.v0alpha.LearnSearchDetails', null, global);
goog.exportSymbol('proto.api.v0alpha.LearnSnippetDetails', null, global);
goog.exportSymbol('proto.api.v0alpha.LearnStandaloneDetails', null, global);
goog.exportSymbol('proto.api.v0alpha.ListVersionsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListVersionsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.PublishVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.PublishVersionRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ReviewFileVersionsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ReviewFileVersionsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ReviewVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ReviewVersionRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SearchContentByVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SearchContentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SearchRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SnippetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SnippetRes', null, global);
goog.exportSymbol('proto.api.v0alpha.StandaloneReq', null, global);
goog.exportSymbol('proto.api.v0alpha.StandaloneRes', null, global);
goog.exportSymbol('proto.api.v0alpha.StoreStaticImageReq', null, global);
goog.exportSymbol('proto.api.v0alpha.StoreStaticImageRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateByVersionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UploadDynamicScreenshotReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UploadDynamicScreenshotRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UploadStaticImageReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UploadStaticImageRes', null, global);
goog.exportSymbol('proto.api.v0alpha.VersionDetails', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExistReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ExistReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExistReq.displayName = 'proto.api.v0alpha.ExistReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExistRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ExistRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExistRes.displayName = 'proto.api.v0alpha.ExistRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ContentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContentReq.displayName = 'proto.api.v0alpha.ContentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ContentRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ContentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContentRes.displayName = 'proto.api.v0alpha.ContentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContentEditorDataReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ContentEditorDataReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContentEditorDataReq.displayName = 'proto.api.v0alpha.ContentEditorDataReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContentEditorDataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ContentEditorDataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContentEditorDataRes.displayName = 'proto.api.v0alpha.ContentEditorDataRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateReq.displayName = 'proto.api.v0alpha.UpdateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateRes.displayName = 'proto.api.v0alpha.UpdateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExportManyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ExportManyReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ExportManyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExportManyReq.displayName = 'proto.api.v0alpha.ExportManyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExportRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ExportRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExportRes.displayName = 'proto.api.v0alpha.ExportRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StoreStaticImageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StoreStaticImageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StoreStaticImageReq.displayName = 'proto.api.v0alpha.StoreStaticImageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.LearnImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.LearnImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.LearnImage.displayName = 'proto.api.v0alpha.LearnImage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StoreStaticImageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StoreStaticImageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StoreStaticImageRes.displayName = 'proto.api.v0alpha.StoreStaticImageRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SearchContentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SearchContentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SearchContentReq.displayName = 'proto.api.v0alpha.SearchContentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SearchRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SearchRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SearchRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SearchRes.displayName = 'proto.api.v0alpha.SearchRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.LearnSearchDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.LearnSearchDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.LearnSearchDetails.displayName = 'proto.api.v0alpha.LearnSearchDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UploadDynamicScreenshotReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UploadDynamicScreenshotReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UploadDynamicScreenshotReq.displayName = 'proto.api.v0alpha.UploadDynamicScreenshotReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UploadDynamicScreenshotRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UploadDynamicScreenshotRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UploadDynamicScreenshotRes.displayName = 'proto.api.v0alpha.UploadDynamicScreenshotRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StandaloneReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StandaloneReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StandaloneReq.displayName = 'proto.api.v0alpha.StandaloneReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StandaloneRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.StandaloneRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.StandaloneRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StandaloneRes.displayName = 'proto.api.v0alpha.StandaloneRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.LearnStandaloneDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.LearnStandaloneDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.LearnStandaloneDetails.displayName = 'proto.api.v0alpha.LearnStandaloneDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteStandaloneReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.DeleteStandaloneReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.DeleteStandaloneReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteStandaloneReq.displayName = 'proto.api.v0alpha.DeleteStandaloneReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteStandaloneRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteStandaloneRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteStandaloneRes.displayName = 'proto.api.v0alpha.DeleteStandaloneRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SnippetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SnippetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SnippetReq.displayName = 'proto.api.v0alpha.SnippetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SnippetRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SnippetRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SnippetRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SnippetRes.displayName = 'proto.api.v0alpha.SnippetRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.LearnSnippetDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.LearnSnippetDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.LearnSnippetDetails.displayName = 'proto.api.v0alpha.LearnSnippetDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteLearnPagesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.DeleteLearnPagesReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.DeleteLearnPagesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteLearnPagesReq.displayName = 'proto.api.v0alpha.DeleteLearnPagesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteLearnPagesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteLearnPagesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteLearnPagesRes.displayName = 'proto.api.v0alpha.DeleteLearnPagesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateEditVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateEditVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateEditVersionReq.displayName = 'proto.api.v0alpha.CreateEditVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateEditVersionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateEditVersionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateEditVersionRes.displayName = 'proto.api.v0alpha.CreateEditVersionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PublishVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PublishVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PublishVersionReq.displayName = 'proto.api.v0alpha.PublishVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PublishVersionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PublishVersionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PublishVersionRes.displayName = 'proto.api.v0alpha.PublishVersionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContentByVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ContentByVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContentByVersionReq.displayName = 'proto.api.v0alpha.ContentByVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateByVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateByVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateByVersionReq.displayName = 'proto.api.v0alpha.UpdateByVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SearchContentByVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SearchContentByVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SearchContentByVersionReq.displayName = 'proto.api.v0alpha.SearchContentByVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ReviewFileVersionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ReviewFileVersionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ReviewFileVersionsReq.displayName = 'proto.api.v0alpha.ReviewFileVersionsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ReviewFileVersionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ReviewFileVersionsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ReviewFileVersionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ReviewFileVersionsRes.displayName = 'proto.api.v0alpha.ReviewFileVersionsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ReviewVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ReviewVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ReviewVersionReq.displayName = 'proto.api.v0alpha.ReviewVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ReviewVersionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ReviewVersionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ReviewVersionRes.displayName = 'proto.api.v0alpha.ReviewVersionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListVersionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListVersionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListVersionsReq.displayName = 'proto.api.v0alpha.ListVersionsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListVersionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListVersionsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListVersionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListVersionsRes.displayName = 'proto.api.v0alpha.ListVersionsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.VersionDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.VersionDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.VersionDetails.displayName = 'proto.api.v0alpha.VersionDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteVersionReq.displayName = 'proto.api.v0alpha.DeleteVersionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteVersionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteVersionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteVersionRes.displayName = 'proto.api.v0alpha.DeleteVersionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UploadStaticImageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UploadStaticImageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UploadStaticImageReq.displayName = 'proto.api.v0alpha.UploadStaticImageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UploadStaticImageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UploadStaticImageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UploadStaticImageRes.displayName = 'proto.api.v0alpha.UploadStaticImageRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetUpdateUrlReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetUpdateUrlReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetUpdateUrlReq.displayName = 'proto.api.v0alpha.GetUpdateUrlReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetUpdateUrlRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetUpdateUrlRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetUpdateUrlRes.displayName = 'proto.api.v0alpha.GetUpdateUrlRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AdvancedSearchReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AdvancedSearchReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AdvancedSearchReq.displayName = 'proto.api.v0alpha.AdvancedSearchReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AdvancedSearchRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.AdvancedSearchRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.AdvancedSearchRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AdvancedSearchRes.displayName = 'proto.api.v0alpha.AdvancedSearchRes';
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
proto.api.v0alpha.ExistReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExistReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExistReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExistReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExistReq}
 */
proto.api.v0alpha.ExistReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExistReq;
  return proto.api.v0alpha.ExistReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExistReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExistReq}
 */
proto.api.v0alpha.ExistReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExistReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExistReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExistReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExistReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.ExistReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExistReq} returns this
 */
proto.api.v0alpha.ExistReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.ExistReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExistReq} returns this
 */
proto.api.v0alpha.ExistReq.prototype.setLocale = function(value) {
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
proto.api.v0alpha.ExistRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExistRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExistRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExistRes.toObject = function(includeInstance, msg) {
  var f, obj = {
exist: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExistRes}
 */
proto.api.v0alpha.ExistRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExistRes;
  return proto.api.v0alpha.ExistRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExistRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExistRes}
 */
proto.api.v0alpha.ExistRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExistRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExistRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExistRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExistRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExist();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool exist = 1;
 * @return {boolean}
 */
proto.api.v0alpha.ExistRes.prototype.getExist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ExistRes} returns this
 */
proto.api.v0alpha.ExistRes.prototype.setExist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.api.v0alpha.ContentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContentReq}
 */
proto.api.v0alpha.ContentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContentReq;
  return proto.api.v0alpha.ContentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContentReq}
 */
proto.api.v0alpha.ContentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.ContentReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentReq} returns this
 */
proto.api.v0alpha.ContentReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.ContentReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentReq} returns this
 */
proto.api.v0alpha.ContentReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ContentRes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ContentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
content: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastEditedTimestamp: (f = msg.getLastEditedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    proto.api.v0alpha.LearnImage.toObject, includeInstance),
title: jspb.Message.getFieldWithDefault(msg, 4, ""),
totalViewCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
lastEditedUser: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContentRes}
 */
proto.api.v0alpha.ContentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContentRes;
  return proto.api.v0alpha.ContentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContentRes}
 */
proto.api.v0alpha.ContentRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEditedTimestamp(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.LearnImage;
      reader.readMessage(value,proto.api.v0alpha.LearnImage.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalViewCount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastEditedUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastEditedTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v0alpha.LearnImage.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalViewCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLastEditedUser();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.api.v0alpha.ContentRes.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentRes} returns this
 */
proto.api.v0alpha.ContentRes.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp last_edited_timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ContentRes.prototype.getLastEditedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ContentRes} returns this
*/
proto.api.v0alpha.ContentRes.prototype.setLastEditedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ContentRes} returns this
 */
proto.api.v0alpha.ContentRes.prototype.clearLastEditedTimestamp = function() {
  return this.setLastEditedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ContentRes.prototype.hasLastEditedTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LearnImage images = 3;
 * @return {!Array<!proto.api.v0alpha.LearnImage>}
 */
proto.api.v0alpha.ContentRes.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.LearnImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.LearnImage, 3));
};


/**
 * @param {!Array<!proto.api.v0alpha.LearnImage>} value
 * @return {!proto.api.v0alpha.ContentRes} returns this
*/
proto.api.v0alpha.ContentRes.prototype.setImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v0alpha.LearnImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.ContentRes.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v0alpha.LearnImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ContentRes} returns this
 */
proto.api.v0alpha.ContentRes.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.api.v0alpha.ContentRes.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentRes} returns this
 */
proto.api.v0alpha.ContentRes.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 total_view_count = 5;
 * @return {number}
 */
proto.api.v0alpha.ContentRes.prototype.getTotalViewCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ContentRes} returns this
 */
proto.api.v0alpha.ContentRes.prototype.setTotalViewCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string last_edited_user = 6;
 * @return {string}
 */
proto.api.v0alpha.ContentRes.prototype.getLastEditedUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentRes} returns this
 */
proto.api.v0alpha.ContentRes.prototype.setLastEditedUser = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.api.v0alpha.ContentEditorDataReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContentEditorDataReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContentEditorDataReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentEditorDataReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContentEditorDataReq}
 */
proto.api.v0alpha.ContentEditorDataReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContentEditorDataReq;
  return proto.api.v0alpha.ContentEditorDataReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContentEditorDataReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContentEditorDataReq}
 */
proto.api.v0alpha.ContentEditorDataReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContentEditorDataReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContentEditorDataReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContentEditorDataReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentEditorDataReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.ContentEditorDataReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentEditorDataReq} returns this
 */
proto.api.v0alpha.ContentEditorDataReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.ContentEditorDataReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentEditorDataReq} returns this
 */
proto.api.v0alpha.ContentEditorDataReq.prototype.setLocale = function(value) {
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
proto.api.v0alpha.ContentEditorDataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContentEditorDataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContentEditorDataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentEditorDataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
lastEditedUser: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContentEditorDataRes}
 */
proto.api.v0alpha.ContentEditorDataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContentEditorDataRes;
  return proto.api.v0alpha.ContentEditorDataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContentEditorDataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContentEditorDataRes}
 */
proto.api.v0alpha.ContentEditorDataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastEditedUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContentEditorDataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContentEditorDataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContentEditorDataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentEditorDataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastEditedUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string last_edited_user = 1;
 * @return {string}
 */
proto.api.v0alpha.ContentEditorDataRes.prototype.getLastEditedUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentEditorDataRes} returns this
 */
proto.api.v0alpha.ContentEditorDataRes.prototype.setLastEditedUser = function(value) {
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
proto.api.v0alpha.UpdateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, ""),
content: jspb.Message.getFieldWithDefault(msg, 3, ""),
message: jspb.Message.getFieldWithDefault(msg, 12, ""),
title: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateReq}
 */
proto.api.v0alpha.UpdateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateReq;
  return proto.api.v0alpha.UpdateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateReq}
 */
proto.api.v0alpha.UpdateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateReq} returns this
 */
proto.api.v0alpha.UpdateReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateReq} returns this
 */
proto.api.v0alpha.UpdateReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateReq} returns this
 */
proto.api.v0alpha.UpdateReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 12;
 * @return {string}
 */
proto.api.v0alpha.UpdateReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateReq} returns this
 */
proto.api.v0alpha.UpdateReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string title = 13;
 * @return {string}
 */
proto.api.v0alpha.UpdateReq.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateReq} returns this
 */
proto.api.v0alpha.UpdateReq.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.api.v0alpha.UpdateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateRes}
 */
proto.api.v0alpha.UpdateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateRes;
  return proto.api.v0alpha.UpdateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateRes}
 */
proto.api.v0alpha.UpdateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ExportManyReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ExportManyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExportManyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExportManyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportManyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
urlList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
locale: jspb.Message.getFieldWithDefault(msg, 2, ""),
content: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExportManyReq}
 */
proto.api.v0alpha.ExportManyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExportManyReq;
  return proto.api.v0alpha.ExportManyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExportManyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExportManyReq}
 */
proto.api.v0alpha.ExportManyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExportManyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExportManyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExportManyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportManyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrlList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string url = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ExportManyReq.prototype.getUrlList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ExportManyReq} returns this
 */
proto.api.v0alpha.ExportManyReq.prototype.setUrlList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ExportManyReq} returns this
 */
proto.api.v0alpha.ExportManyReq.prototype.addUrl = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ExportManyReq} returns this
 */
proto.api.v0alpha.ExportManyReq.prototype.clearUrlList = function() {
  return this.setUrlList([]);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.ExportManyReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExportManyReq} returns this
 */
proto.api.v0alpha.ExportManyReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v0alpha.ExportManyReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExportManyReq} returns this
 */
proto.api.v0alpha.ExportManyReq.prototype.setContent = function(value) {
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
proto.api.v0alpha.ExportRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExportRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExportRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportRes.toObject = function(includeInstance, msg) {
  var f, obj = {
downloadUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExportRes}
 */
proto.api.v0alpha.ExportRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExportRes;
  return proto.api.v0alpha.ExportRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExportRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExportRes}
 */
proto.api.v0alpha.ExportRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExportRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExportRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExportRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string download_url = 1;
 * @return {string}
 */
proto.api.v0alpha.ExportRes.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExportRes} returns this
 */
proto.api.v0alpha.ExportRes.prototype.setDownloadUrl = function(value) {
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
proto.api.v0alpha.StoreStaticImageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StoreStaticImageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StoreStaticImageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StoreStaticImageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v0alpha.LearnImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StoreStaticImageReq}
 */
proto.api.v0alpha.StoreStaticImageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StoreStaticImageReq;
  return proto.api.v0alpha.StoreStaticImageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StoreStaticImageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StoreStaticImageReq}
 */
proto.api.v0alpha.StoreStaticImageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnImage;
      reader.readMessage(value,proto.api.v0alpha.LearnImage.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.StoreStaticImageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StoreStaticImageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StoreStaticImageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StoreStaticImageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.LearnImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional LearnImage image = 1;
 * @return {?proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.StoreStaticImageReq.prototype.getImage = function() {
  return /** @type{?proto.api.v0alpha.LearnImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.LearnImage, 1));
};


/**
 * @param {?proto.api.v0alpha.LearnImage|undefined} value
 * @return {!proto.api.v0alpha.StoreStaticImageReq} returns this
*/
proto.api.v0alpha.StoreStaticImageReq.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.StoreStaticImageReq} returns this
 */
proto.api.v0alpha.StoreStaticImageReq.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.StoreStaticImageReq.prototype.hasImage = function() {
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
proto.api.v0alpha.LearnImage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.LearnImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.LearnImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnImage.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, ""),
downloadUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
tempId: (f = msg.getTempId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.LearnImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.LearnImage;
  return proto.api.v0alpha.LearnImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.LearnImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.LearnImage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTempId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.LearnImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.LearnImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.LearnImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTempId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.api.v0alpha.LearnImage.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnImage} returns this
 */
proto.api.v0alpha.LearnImage.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v0alpha.LearnImage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnImage} returns this
 */
proto.api.v0alpha.LearnImage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string download_url = 3;
 * @return {string}
 */
proto.api.v0alpha.LearnImage.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnImage} returns this
 */
proto.api.v0alpha.LearnImage.prototype.setDownloadUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue temp_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.LearnImage.prototype.getTempId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.LearnImage} returns this
*/
proto.api.v0alpha.LearnImage.prototype.setTempId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.LearnImage} returns this
 */
proto.api.v0alpha.LearnImage.prototype.clearTempId = function() {
  return this.setTempId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.LearnImage.prototype.hasTempId = function() {
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
proto.api.v0alpha.StoreStaticImageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StoreStaticImageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StoreStaticImageRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StoreStaticImageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v0alpha.LearnImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StoreStaticImageRes}
 */
proto.api.v0alpha.StoreStaticImageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StoreStaticImageRes;
  return proto.api.v0alpha.StoreStaticImageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StoreStaticImageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StoreStaticImageRes}
 */
proto.api.v0alpha.StoreStaticImageRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnImage;
      reader.readMessage(value,proto.api.v0alpha.LearnImage.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.StoreStaticImageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StoreStaticImageRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StoreStaticImageRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StoreStaticImageRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.LearnImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional LearnImage image = 1;
 * @return {?proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.StoreStaticImageRes.prototype.getImage = function() {
  return /** @type{?proto.api.v0alpha.LearnImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.LearnImage, 1));
};


/**
 * @param {?proto.api.v0alpha.LearnImage|undefined} value
 * @return {!proto.api.v0alpha.StoreStaticImageRes} returns this
*/
proto.api.v0alpha.StoreStaticImageRes.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.StoreStaticImageRes} returns this
 */
proto.api.v0alpha.StoreStaticImageRes.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.StoreStaticImageRes.prototype.hasImage = function() {
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
proto.api.v0alpha.SearchContentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SearchContentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SearchContentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchContentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
searchContent: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, ""),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SearchContentReq}
 */
proto.api.v0alpha.SearchContentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SearchContentReq;
  return proto.api.v0alpha.SearchContentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SearchContentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SearchContentReq}
 */
proto.api.v0alpha.SearchContentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SearchContentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SearchContentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SearchContentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchContentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string search_content = 1;
 * @return {string}
 */
proto.api.v0alpha.SearchContentReq.prototype.getSearchContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchContentReq} returns this
 */
proto.api.v0alpha.SearchContentReq.prototype.setSearchContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.SearchContentReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchContentReq} returns this
 */
proto.api.v0alpha.SearchContentReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.SearchContentReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.SearchContentReq} returns this
*/
proto.api.v0alpha.SearchContentReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SearchContentReq} returns this
 */
proto.api.v0alpha.SearchContentReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SearchContentReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SearchRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SearchRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SearchRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SearchRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchRes.toObject = function(includeInstance, msg) {
  var f, obj = {
searchDetailsList: jspb.Message.toObjectList(msg.getSearchDetailsList(),
    proto.api.v0alpha.LearnSearchDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SearchRes}
 */
proto.api.v0alpha.SearchRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SearchRes;
  return proto.api.v0alpha.SearchRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SearchRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SearchRes}
 */
proto.api.v0alpha.SearchRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnSearchDetails;
      reader.readMessage(value,proto.api.v0alpha.LearnSearchDetails.deserializeBinaryFromReader);
      msg.addSearchDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SearchRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SearchRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SearchRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.LearnSearchDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LearnSearchDetails search_details = 1;
 * @return {!Array<!proto.api.v0alpha.LearnSearchDetails>}
 */
proto.api.v0alpha.SearchRes.prototype.getSearchDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.LearnSearchDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.LearnSearchDetails, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.LearnSearchDetails>} value
 * @return {!proto.api.v0alpha.SearchRes} returns this
*/
proto.api.v0alpha.SearchRes.prototype.setSearchDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.LearnSearchDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.LearnSearchDetails}
 */
proto.api.v0alpha.SearchRes.prototype.addSearchDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.LearnSearchDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SearchRes} returns this
 */
proto.api.v0alpha.SearchRes.prototype.clearSearchDetailsList = function() {
  return this.setSearchDetailsList([]);
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
proto.api.v0alpha.LearnSearchDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.LearnSearchDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.LearnSearchDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnSearchDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.LearnSearchDetails}
 */
proto.api.v0alpha.LearnSearchDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.LearnSearchDetails;
  return proto.api.v0alpha.LearnSearchDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.LearnSearchDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.LearnSearchDetails}
 */
proto.api.v0alpha.LearnSearchDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.LearnSearchDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.LearnSearchDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.LearnSearchDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnSearchDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.LearnSearchDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnSearchDetails} returns this
 */
proto.api.v0alpha.LearnSearchDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v0alpha.LearnSearchDetails.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnSearchDetails} returns this
 */
proto.api.v0alpha.LearnSearchDetails.prototype.setContent = function(value) {
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
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UploadDynamicScreenshotReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UploadDynamicScreenshotReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.toObject = function(includeInstance, msg) {
  var f, obj = {
dataLearnId: jspb.Message.getFieldWithDefault(msg, 1, ""),
version: jspb.Message.getFieldWithDefault(msg, 2, 0),
locale: jspb.Message.getFieldWithDefault(msg, 3, ""),
content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotReq}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UploadDynamicScreenshotReq;
  return proto.api.v0alpha.UploadDynamicScreenshotReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UploadDynamicScreenshotReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotReq}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataLearnId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UploadDynamicScreenshotReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UploadDynamicScreenshotReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataLearnId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string data_learn_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.getDataLearnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotReq} returns this
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.setDataLearnId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 version = 2;
 * @return {number}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotReq} returns this
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string locale = 3;
 * @return {string}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotReq} returns this
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotReq} returns this
 */
proto.api.v0alpha.UploadDynamicScreenshotReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.api.v0alpha.UploadDynamicScreenshotRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UploadDynamicScreenshotRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UploadDynamicScreenshotRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.toObject = function(includeInstance, msg) {
  var f, obj = {
dataLearnId: jspb.Message.getFieldWithDefault(msg, 1, ""),
downloadUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotRes}
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UploadDynamicScreenshotRes;
  return proto.api.v0alpha.UploadDynamicScreenshotRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UploadDynamicScreenshotRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotRes}
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataLearnId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UploadDynamicScreenshotRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UploadDynamicScreenshotRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataLearnId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string data_learn_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.prototype.getDataLearnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotRes} returns this
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.prototype.setDataLearnId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string download_url = 2;
 * @return {string}
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UploadDynamicScreenshotRes} returns this
 */
proto.api.v0alpha.UploadDynamicScreenshotRes.prototype.setDownloadUrl = function(value) {
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
proto.api.v0alpha.StandaloneReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StandaloneReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StandaloneReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StandaloneReq.toObject = function(includeInstance, msg) {
  var f, obj = {
locale: jspb.Message.getFieldWithDefault(msg, 1, ""),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StandaloneReq}
 */
proto.api.v0alpha.StandaloneReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StandaloneReq;
  return proto.api.v0alpha.StandaloneReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StandaloneReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StandaloneReq}
 */
proto.api.v0alpha.StandaloneReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.StandaloneReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StandaloneReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StandaloneReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StandaloneReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string locale = 1;
 * @return {string}
 */
proto.api.v0alpha.StandaloneReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.StandaloneReq} returns this
 */
proto.api.v0alpha.StandaloneReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.api.v0alpha.StandaloneReq.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.StandaloneReq} returns this
 */
proto.api.v0alpha.StandaloneReq.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.api.v0alpha.StandaloneReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.StandaloneReq} returns this
 */
proto.api.v0alpha.StandaloneReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.StandaloneRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.StandaloneRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StandaloneRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StandaloneRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StandaloneRes.toObject = function(includeInstance, msg) {
  var f, obj = {
standaloneDetailsList: jspb.Message.toObjectList(msg.getStandaloneDetailsList(),
    proto.api.v0alpha.LearnStandaloneDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StandaloneRes}
 */
proto.api.v0alpha.StandaloneRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StandaloneRes;
  return proto.api.v0alpha.StandaloneRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StandaloneRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StandaloneRes}
 */
proto.api.v0alpha.StandaloneRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnStandaloneDetails;
      reader.readMessage(value,proto.api.v0alpha.LearnStandaloneDetails.deserializeBinaryFromReader);
      msg.addStandaloneDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.StandaloneRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StandaloneRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StandaloneRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StandaloneRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStandaloneDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.LearnStandaloneDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LearnStandaloneDetails standalone_details = 1;
 * @return {!Array<!proto.api.v0alpha.LearnStandaloneDetails>}
 */
proto.api.v0alpha.StandaloneRes.prototype.getStandaloneDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.LearnStandaloneDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.LearnStandaloneDetails, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.LearnStandaloneDetails>} value
 * @return {!proto.api.v0alpha.StandaloneRes} returns this
*/
proto.api.v0alpha.StandaloneRes.prototype.setStandaloneDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.LearnStandaloneDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.LearnStandaloneDetails}
 */
proto.api.v0alpha.StandaloneRes.prototype.addStandaloneDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.LearnStandaloneDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.StandaloneRes} returns this
 */
proto.api.v0alpha.StandaloneRes.prototype.clearStandaloneDetailsList = function() {
  return this.setStandaloneDetailsList([]);
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
proto.api.v0alpha.LearnStandaloneDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.LearnStandaloneDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.LearnStandaloneDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnStandaloneDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, ""),
lastEditedTimestamp: (f = msg.getLastEditedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
title: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.LearnStandaloneDetails}
 */
proto.api.v0alpha.LearnStandaloneDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.LearnStandaloneDetails;
  return proto.api.v0alpha.LearnStandaloneDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.LearnStandaloneDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.LearnStandaloneDetails}
 */
proto.api.v0alpha.LearnStandaloneDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEditedTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.LearnStandaloneDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.LearnStandaloneDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnStandaloneDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastEditedTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnStandaloneDetails} returns this
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnStandaloneDetails} returns this
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_edited_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.getLastEditedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.LearnStandaloneDetails} returns this
*/
proto.api.v0alpha.LearnStandaloneDetails.prototype.setLastEditedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.LearnStandaloneDetails} returns this
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.clearLastEditedTimestamp = function() {
  return this.setLastEditedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.hasLastEditedTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnStandaloneDetails} returns this
 */
proto.api.v0alpha.LearnStandaloneDetails.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.DeleteStandaloneReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteStandaloneReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteStandaloneReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteStandaloneReq.toObject = function(includeInstance, msg) {
  var f, obj = {
locale: jspb.Message.getFieldWithDefault(msg, 1, ""),
articleNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteStandaloneReq}
 */
proto.api.v0alpha.DeleteStandaloneReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteStandaloneReq;
  return proto.api.v0alpha.DeleteStandaloneReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteStandaloneReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteStandaloneReq}
 */
proto.api.v0alpha.DeleteStandaloneReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addArticleNames(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteStandaloneReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteStandaloneReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteStandaloneReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArticleNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string locale = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteStandaloneReq} returns this
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string article_names = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.getArticleNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.DeleteStandaloneReq} returns this
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.setArticleNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.DeleteStandaloneReq} returns this
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.addArticleNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.DeleteStandaloneReq} returns this
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.clearArticleNamesList = function() {
  return this.setArticleNamesList([]);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteStandaloneReq} returns this
 */
proto.api.v0alpha.DeleteStandaloneReq.prototype.setVersion = function(value) {
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
proto.api.v0alpha.DeleteStandaloneRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteStandaloneRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteStandaloneRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteStandaloneRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteStandaloneRes}
 */
proto.api.v0alpha.DeleteStandaloneRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteStandaloneRes;
  return proto.api.v0alpha.DeleteStandaloneRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteStandaloneRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteStandaloneRes}
 */
proto.api.v0alpha.DeleteStandaloneRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteStandaloneRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteStandaloneRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteStandaloneRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteStandaloneRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v0alpha.SnippetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SnippetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SnippetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SnippetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
locale: jspb.Message.getFieldWithDefault(msg, 1, ""),
version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SnippetReq}
 */
proto.api.v0alpha.SnippetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SnippetReq;
  return proto.api.v0alpha.SnippetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SnippetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SnippetReq}
 */
proto.api.v0alpha.SnippetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SnippetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SnippetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SnippetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SnippetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string locale = 1;
 * @return {string}
 */
proto.api.v0alpha.SnippetReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SnippetReq} returns this
 */
proto.api.v0alpha.SnippetReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.api.v0alpha.SnippetReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SnippetReq} returns this
 */
proto.api.v0alpha.SnippetReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SnippetRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SnippetRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SnippetRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SnippetRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SnippetRes.toObject = function(includeInstance, msg) {
  var f, obj = {
snippetDetailsList: jspb.Message.toObjectList(msg.getSnippetDetailsList(),
    proto.api.v0alpha.LearnSnippetDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SnippetRes}
 */
proto.api.v0alpha.SnippetRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SnippetRes;
  return proto.api.v0alpha.SnippetRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SnippetRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SnippetRes}
 */
proto.api.v0alpha.SnippetRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnSnippetDetails;
      reader.readMessage(value,proto.api.v0alpha.LearnSnippetDetails.deserializeBinaryFromReader);
      msg.addSnippetDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SnippetRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SnippetRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SnippetRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SnippetRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnippetDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.LearnSnippetDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LearnSnippetDetails snippet_details = 1;
 * @return {!Array<!proto.api.v0alpha.LearnSnippetDetails>}
 */
proto.api.v0alpha.SnippetRes.prototype.getSnippetDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.LearnSnippetDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.LearnSnippetDetails, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.LearnSnippetDetails>} value
 * @return {!proto.api.v0alpha.SnippetRes} returns this
*/
proto.api.v0alpha.SnippetRes.prototype.setSnippetDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.LearnSnippetDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.LearnSnippetDetails}
 */
proto.api.v0alpha.SnippetRes.prototype.addSnippetDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.LearnSnippetDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SnippetRes} returns this
 */
proto.api.v0alpha.SnippetRes.prototype.clearSnippetDetailsList = function() {
  return this.setSnippetDetailsList([]);
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
proto.api.v0alpha.LearnSnippetDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.LearnSnippetDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.LearnSnippetDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnSnippetDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, ""),
lastEditedTimestamp: (f = msg.getLastEditedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
title: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.LearnSnippetDetails}
 */
proto.api.v0alpha.LearnSnippetDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.LearnSnippetDetails;
  return proto.api.v0alpha.LearnSnippetDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.LearnSnippetDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.LearnSnippetDetails}
 */
proto.api.v0alpha.LearnSnippetDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEditedTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.LearnSnippetDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.LearnSnippetDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.LearnSnippetDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastEditedTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnSnippetDetails} returns this
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnSnippetDetails} returns this
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_edited_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.getLastEditedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.LearnSnippetDetails} returns this
*/
proto.api.v0alpha.LearnSnippetDetails.prototype.setLastEditedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.LearnSnippetDetails} returns this
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.clearLastEditedTimestamp = function() {
  return this.setLastEditedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.hasLastEditedTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.LearnSnippetDetails} returns this
 */
proto.api.v0alpha.LearnSnippetDetails.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.DeleteLearnPagesReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteLearnPagesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteLearnPagesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteLearnPagesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
locale: jspb.Message.getFieldWithDefault(msg, 1, ""),
urlList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq}
 */
proto.api.v0alpha.DeleteLearnPagesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteLearnPagesReq;
  return proto.api.v0alpha.DeleteLearnPagesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteLearnPagesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq}
 */
proto.api.v0alpha.DeleteLearnPagesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteLearnPagesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteLearnPagesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteLearnPagesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrlList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string locale = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq} returns this
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string url = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.getUrlList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq} returns this
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.setUrlList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq} returns this
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.addUrl = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq} returns this
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.clearUrlList = function() {
  return this.setUrlList([]);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteLearnPagesReq} returns this
 */
proto.api.v0alpha.DeleteLearnPagesReq.prototype.setVersion = function(value) {
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
proto.api.v0alpha.DeleteLearnPagesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteLearnPagesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteLearnPagesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteLearnPagesRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteLearnPagesRes}
 */
proto.api.v0alpha.DeleteLearnPagesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteLearnPagesRes;
  return proto.api.v0alpha.DeleteLearnPagesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteLearnPagesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteLearnPagesRes}
 */
proto.api.v0alpha.DeleteLearnPagesRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteLearnPagesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteLearnPagesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteLearnPagesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteLearnPagesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v0alpha.CreateEditVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateEditVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateEditVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateEditVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
srcVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
destVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
destVersionName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateEditVersionReq}
 */
proto.api.v0alpha.CreateEditVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateEditVersionReq;
  return proto.api.v0alpha.CreateEditVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateEditVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateEditVersionReq}
 */
proto.api.v0alpha.CreateEditVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestVersionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateEditVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateEditVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateEditVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestVersionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string src_version = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.getSrcVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateEditVersionReq} returns this
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.setSrcVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dest_version = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.getDestVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateEditVersionReq} returns this
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.setDestVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dest_version_name = 3;
 * @return {string}
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.getDestVersionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateEditVersionReq} returns this
 */
proto.api.v0alpha.CreateEditVersionReq.prototype.setDestVersionName = function(value) {
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
proto.api.v0alpha.CreateEditVersionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateEditVersionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateEditVersionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateEditVersionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
versionDetails: (f = msg.getVersionDetails()) && proto.api.v0alpha.VersionDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateEditVersionRes}
 */
proto.api.v0alpha.CreateEditVersionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateEditVersionRes;
  return proto.api.v0alpha.CreateEditVersionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateEditVersionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateEditVersionRes}
 */
proto.api.v0alpha.CreateEditVersionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.VersionDetails;
      reader.readMessage(value,proto.api.v0alpha.VersionDetails.deserializeBinaryFromReader);
      msg.setVersionDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateEditVersionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateEditVersionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateEditVersionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateEditVersionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.VersionDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional VersionDetails version_details = 1;
 * @return {?proto.api.v0alpha.VersionDetails}
 */
proto.api.v0alpha.CreateEditVersionRes.prototype.getVersionDetails = function() {
  return /** @type{?proto.api.v0alpha.VersionDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.VersionDetails, 1));
};


/**
 * @param {?proto.api.v0alpha.VersionDetails|undefined} value
 * @return {!proto.api.v0alpha.CreateEditVersionRes} returns this
*/
proto.api.v0alpha.CreateEditVersionRes.prototype.setVersionDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateEditVersionRes} returns this
 */
proto.api.v0alpha.CreateEditVersionRes.prototype.clearVersionDetails = function() {
  return this.setVersionDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateEditVersionRes.prototype.hasVersionDetails = function() {
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
proto.api.v0alpha.PublishVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PublishVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PublishVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PublishVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
publishVersion: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PublishVersionReq}
 */
proto.api.v0alpha.PublishVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PublishVersionReq;
  return proto.api.v0alpha.PublishVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PublishVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PublishVersionReq}
 */
proto.api.v0alpha.PublishVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublishVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.PublishVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PublishVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PublishVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PublishVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string publish_version = 1;
 * @return {string}
 */
proto.api.v0alpha.PublishVersionReq.prototype.getPublishVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PublishVersionReq} returns this
 */
proto.api.v0alpha.PublishVersionReq.prototype.setPublishVersion = function(value) {
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
proto.api.v0alpha.PublishVersionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PublishVersionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PublishVersionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PublishVersionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
versionDetails: (f = msg.getVersionDetails()) && proto.api.v0alpha.VersionDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PublishVersionRes}
 */
proto.api.v0alpha.PublishVersionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PublishVersionRes;
  return proto.api.v0alpha.PublishVersionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PublishVersionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PublishVersionRes}
 */
proto.api.v0alpha.PublishVersionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.VersionDetails;
      reader.readMessage(value,proto.api.v0alpha.VersionDetails.deserializeBinaryFromReader);
      msg.setVersionDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.PublishVersionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PublishVersionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PublishVersionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PublishVersionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.VersionDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional VersionDetails version_details = 1;
 * @return {?proto.api.v0alpha.VersionDetails}
 */
proto.api.v0alpha.PublishVersionRes.prototype.getVersionDetails = function() {
  return /** @type{?proto.api.v0alpha.VersionDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.VersionDetails, 1));
};


/**
 * @param {?proto.api.v0alpha.VersionDetails|undefined} value
 * @return {!proto.api.v0alpha.PublishVersionRes} returns this
*/
proto.api.v0alpha.PublishVersionRes.prototype.setVersionDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.PublishVersionRes} returns this
 */
proto.api.v0alpha.PublishVersionRes.prototype.clearVersionDetails = function() {
  return this.setVersionDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.PublishVersionRes.prototype.hasVersionDetails = function() {
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
proto.api.v0alpha.ContentByVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContentByVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContentByVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentByVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, ""),
version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContentByVersionReq}
 */
proto.api.v0alpha.ContentByVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContentByVersionReq;
  return proto.api.v0alpha.ContentByVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContentByVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContentByVersionReq}
 */
proto.api.v0alpha.ContentByVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContentByVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContentByVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContentByVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContentByVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.ContentByVersionReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentByVersionReq} returns this
 */
proto.api.v0alpha.ContentByVersionReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.ContentByVersionReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentByVersionReq} returns this
 */
proto.api.v0alpha.ContentByVersionReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.api.v0alpha.ContentByVersionReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContentByVersionReq} returns this
 */
proto.api.v0alpha.ContentByVersionReq.prototype.setVersion = function(value) {
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
proto.api.v0alpha.UpdateByVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateByVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateByVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateByVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, ""),
content: jspb.Message.getFieldWithDefault(msg, 3, ""),
version: jspb.Message.getFieldWithDefault(msg, 4, ""),
message: jspb.Message.getFieldWithDefault(msg, 12, ""),
title: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateByVersionReq}
 */
proto.api.v0alpha.UpdateByVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateByVersionReq;
  return proto.api.v0alpha.UpdateByVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateByVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateByVersionReq}
 */
proto.api.v0alpha.UpdateByVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateByVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateByVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateByVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateByVersionReq} returns this
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateByVersionReq} returns this
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateByVersionReq} returns this
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateByVersionReq} returns this
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 12;
 * @return {string}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateByVersionReq} returns this
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string title = 13;
 * @return {string}
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateByVersionReq} returns this
 */
proto.api.v0alpha.UpdateByVersionReq.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.api.v0alpha.SearchContentByVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SearchContentByVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SearchContentByVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchContentByVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
searchContent: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, ""),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
version: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SearchContentByVersionReq}
 */
proto.api.v0alpha.SearchContentByVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SearchContentByVersionReq;
  return proto.api.v0alpha.SearchContentByVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SearchContentByVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SearchContentByVersionReq}
 */
proto.api.v0alpha.SearchContentByVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SearchContentByVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SearchContentByVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchContentByVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string search_content = 1;
 * @return {string}
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.getSearchContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchContentByVersionReq} returns this
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.setSearchContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchContentByVersionReq} returns this
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.SearchContentByVersionReq} returns this
*/
proto.api.v0alpha.SearchContentByVersionReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SearchContentByVersionReq} returns this
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string version = 6;
 * @return {string}
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchContentByVersionReq} returns this
 */
proto.api.v0alpha.SearchContentByVersionReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.api.v0alpha.ReviewFileVersionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ReviewFileVersionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ReviewFileVersionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewFileVersionsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
version: jspb.Message.getFieldWithDefault(msg, 2, ""),
locale: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ReviewFileVersionsReq}
 */
proto.api.v0alpha.ReviewFileVersionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ReviewFileVersionsReq;
  return proto.api.v0alpha.ReviewFileVersionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ReviewFileVersionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ReviewFileVersionsReq}
 */
proto.api.v0alpha.ReviewFileVersionsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ReviewFileVersionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ReviewFileVersionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewFileVersionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewFileVersionsReq} returns this
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewFileVersionsReq} returns this
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string locale = 3;
 * @return {string}
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewFileVersionsReq} returns this
 */
proto.api.v0alpha.ReviewFileVersionsReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ReviewFileVersionsRes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ReviewFileVersionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ReviewFileVersionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewFileVersionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
content: jspb.Message.getFieldWithDefault(msg, 1, ""),
diffContent: jspb.Message.getFieldWithDefault(msg, 2, ""),
imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    proto.api.v0alpha.LearnImage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ReviewFileVersionsRes}
 */
proto.api.v0alpha.ReviewFileVersionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ReviewFileVersionsRes;
  return proto.api.v0alpha.ReviewFileVersionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ReviewFileVersionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ReviewFileVersionsRes}
 */
proto.api.v0alpha.ReviewFileVersionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiffContent(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.LearnImage;
      reader.readMessage(value,proto.api.v0alpha.LearnImage.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ReviewFileVersionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ReviewFileVersionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewFileVersionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiffContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v0alpha.LearnImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewFileVersionsRes} returns this
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string diff_content = 2;
 * @return {string}
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.getDiffContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewFileVersionsRes} returns this
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.setDiffContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated LearnImage images = 3;
 * @return {!Array<!proto.api.v0alpha.LearnImage>}
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.LearnImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.LearnImage, 3));
};


/**
 * @param {!Array<!proto.api.v0alpha.LearnImage>} value
 * @return {!proto.api.v0alpha.ReviewFileVersionsRes} returns this
*/
proto.api.v0alpha.ReviewFileVersionsRes.prototype.setImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v0alpha.LearnImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v0alpha.LearnImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ReviewFileVersionsRes} returns this
 */
proto.api.v0alpha.ReviewFileVersionsRes.prototype.clearImagesList = function() {
  return this.setImagesList([]);
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
proto.api.v0alpha.ReviewVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ReviewVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ReviewVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
version: jspb.Message.getFieldWithDefault(msg, 1, ""),
locale: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ReviewVersionReq}
 */
proto.api.v0alpha.ReviewVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ReviewVersionReq;
  return proto.api.v0alpha.ReviewVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ReviewVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ReviewVersionReq}
 */
proto.api.v0alpha.ReviewVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ReviewVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ReviewVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ReviewVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.api.v0alpha.ReviewVersionReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewVersionReq} returns this
 */
proto.api.v0alpha.ReviewVersionReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locale = 2;
 * @return {string}
 */
proto.api.v0alpha.ReviewVersionReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewVersionReq} returns this
 */
proto.api.v0alpha.ReviewVersionReq.prototype.setLocale = function(value) {
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
proto.api.v0alpha.ReviewVersionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ReviewVersionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ReviewVersionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewVersionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
diffUrls: jspb.Message.getFieldWithDefault(msg, 1, ""),
diffFileNames: jspb.Message.getFieldWithDefault(msg, 2, ""),
srcContent: jspb.Message.getFieldWithDefault(msg, 3, ""),
destContent: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ReviewVersionRes}
 */
proto.api.v0alpha.ReviewVersionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ReviewVersionRes;
  return proto.api.v0alpha.ReviewVersionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ReviewVersionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ReviewVersionRes}
 */
proto.api.v0alpha.ReviewVersionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiffUrls(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiffFileNames(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ReviewVersionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ReviewVersionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ReviewVersionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReviewVersionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiffUrls();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiffFileNames();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSrcContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string diff_urls = 1;
 * @return {string}
 */
proto.api.v0alpha.ReviewVersionRes.prototype.getDiffUrls = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewVersionRes} returns this
 */
proto.api.v0alpha.ReviewVersionRes.prototype.setDiffUrls = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string diff_file_names = 2;
 * @return {string}
 */
proto.api.v0alpha.ReviewVersionRes.prototype.getDiffFileNames = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewVersionRes} returns this
 */
proto.api.v0alpha.ReviewVersionRes.prototype.setDiffFileNames = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string src_content = 3;
 * @return {string}
 */
proto.api.v0alpha.ReviewVersionRes.prototype.getSrcContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewVersionRes} returns this
 */
proto.api.v0alpha.ReviewVersionRes.prototype.setSrcContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dest_content = 4;
 * @return {string}
 */
proto.api.v0alpha.ReviewVersionRes.prototype.getDestContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReviewVersionRes} returns this
 */
proto.api.v0alpha.ReviewVersionRes.prototype.setDestContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.api.v0alpha.ListVersionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListVersionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListVersionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVersionsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
locale: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListVersionsReq}
 */
proto.api.v0alpha.ListVersionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListVersionsReq;
  return proto.api.v0alpha.ListVersionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListVersionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListVersionsReq}
 */
proto.api.v0alpha.ListVersionsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListVersionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListVersionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListVersionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVersionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string locale = 1;
 * @return {string}
 */
proto.api.v0alpha.ListVersionsReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListVersionsReq} returns this
 */
proto.api.v0alpha.ListVersionsReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListVersionsRes.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListVersionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListVersionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListVersionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVersionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
versionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
versionDetailsList: jspb.Message.toObjectList(msg.getVersionDetailsList(),
    proto.api.v0alpha.VersionDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListVersionsRes}
 */
proto.api.v0alpha.ListVersionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListVersionsRes;
  return proto.api.v0alpha.ListVersionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListVersionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListVersionsRes}
 */
proto.api.v0alpha.ListVersionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addVersions(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.VersionDetails;
      reader.readMessage(value,proto.api.v0alpha.VersionDetails.deserializeBinaryFromReader);
      msg.addVersionDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListVersionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListVersionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListVersionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVersionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getVersionDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.VersionDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string versions = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ListVersionsRes.prototype.getVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ListVersionsRes} returns this
 */
proto.api.v0alpha.ListVersionsRes.prototype.setVersionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListVersionsRes} returns this
 */
proto.api.v0alpha.ListVersionsRes.prototype.addVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListVersionsRes} returns this
 */
proto.api.v0alpha.ListVersionsRes.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * repeated VersionDetails version_details = 2;
 * @return {!Array<!proto.api.v0alpha.VersionDetails>}
 */
proto.api.v0alpha.ListVersionsRes.prototype.getVersionDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.VersionDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.VersionDetails, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.VersionDetails>} value
 * @return {!proto.api.v0alpha.ListVersionsRes} returns this
*/
proto.api.v0alpha.ListVersionsRes.prototype.setVersionDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.VersionDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.VersionDetails}
 */
proto.api.v0alpha.ListVersionsRes.prototype.addVersionDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.VersionDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListVersionsRes} returns this
 */
proto.api.v0alpha.ListVersionsRes.prototype.clearVersionDetailsList = function() {
  return this.setVersionDetailsList([]);
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
proto.api.v0alpha.VersionDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.VersionDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.VersionDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.VersionDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
version: jspb.Message.getFieldWithDefault(msg, 1, ""),
versionName: jspb.Message.getFieldWithDefault(msg, 2, ""),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
datePublished: (f = msg.getDatePublished()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
status: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.VersionDetails}
 */
proto.api.v0alpha.VersionDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.VersionDetails;
  return proto.api.v0alpha.VersionDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.VersionDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.VersionDetails}
 */
proto.api.v0alpha.VersionDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatePublished(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.VersionDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.VersionDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.VersionDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.VersionDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDatePublished();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.api.v0alpha.VersionDetails.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.VersionDetails} returns this
 */
proto.api.v0alpha.VersionDetails.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version_name = 2;
 * @return {string}
 */
proto.api.v0alpha.VersionDetails.prototype.getVersionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.VersionDetails} returns this
 */
proto.api.v0alpha.VersionDetails.prototype.setVersionName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.VersionDetails.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.VersionDetails} returns this
*/
proto.api.v0alpha.VersionDetails.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.VersionDetails} returns this
 */
proto.api.v0alpha.VersionDetails.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.VersionDetails.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp date_published = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.VersionDetails.prototype.getDatePublished = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.VersionDetails} returns this
*/
proto.api.v0alpha.VersionDetails.prototype.setDatePublished = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.VersionDetails} returns this
 */
proto.api.v0alpha.VersionDetails.prototype.clearDatePublished = function() {
  return this.setDatePublished(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.VersionDetails.prototype.hasDatePublished = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string status = 5;
 * @return {string}
 */
proto.api.v0alpha.VersionDetails.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.VersionDetails} returns this
 */
proto.api.v0alpha.VersionDetails.prototype.setStatus = function(value) {
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
proto.api.v0alpha.DeleteVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
locale: jspb.Message.getFieldWithDefault(msg, 1, ""),
version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteVersionReq}
 */
proto.api.v0alpha.DeleteVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteVersionReq;
  return proto.api.v0alpha.DeleteVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteVersionReq}
 */
proto.api.v0alpha.DeleteVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string locale = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteVersionReq.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteVersionReq} returns this
 */
proto.api.v0alpha.DeleteVersionReq.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.api.v0alpha.DeleteVersionReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteVersionReq} returns this
 */
proto.api.v0alpha.DeleteVersionReq.prototype.setVersion = function(value) {
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
proto.api.v0alpha.DeleteVersionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteVersionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteVersionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteVersionRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteVersionRes}
 */
proto.api.v0alpha.DeleteVersionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteVersionRes;
  return proto.api.v0alpha.DeleteVersionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteVersionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteVersionRes}
 */
proto.api.v0alpha.DeleteVersionRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteVersionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteVersionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteVersionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteVersionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v0alpha.UploadStaticImageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UploadStaticImageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UploadStaticImageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadStaticImageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v0alpha.LearnImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UploadStaticImageReq}
 */
proto.api.v0alpha.UploadStaticImageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UploadStaticImageReq;
  return proto.api.v0alpha.UploadStaticImageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UploadStaticImageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UploadStaticImageReq}
 */
proto.api.v0alpha.UploadStaticImageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnImage;
      reader.readMessage(value,proto.api.v0alpha.LearnImage.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UploadStaticImageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UploadStaticImageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UploadStaticImageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadStaticImageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.LearnImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional LearnImage image = 1;
 * @return {?proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.UploadStaticImageReq.prototype.getImage = function() {
  return /** @type{?proto.api.v0alpha.LearnImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.LearnImage, 1));
};


/**
 * @param {?proto.api.v0alpha.LearnImage|undefined} value
 * @return {!proto.api.v0alpha.UploadStaticImageReq} returns this
*/
proto.api.v0alpha.UploadStaticImageReq.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UploadStaticImageReq} returns this
 */
proto.api.v0alpha.UploadStaticImageReq.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UploadStaticImageReq.prototype.hasImage = function() {
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
proto.api.v0alpha.UploadStaticImageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UploadStaticImageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UploadStaticImageRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadStaticImageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v0alpha.LearnImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UploadStaticImageRes}
 */
proto.api.v0alpha.UploadStaticImageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UploadStaticImageRes;
  return proto.api.v0alpha.UploadStaticImageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UploadStaticImageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UploadStaticImageRes}
 */
proto.api.v0alpha.UploadStaticImageRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.LearnImage;
      reader.readMessage(value,proto.api.v0alpha.LearnImage.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UploadStaticImageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UploadStaticImageRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UploadStaticImageRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UploadStaticImageRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.LearnImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional LearnImage image = 1;
 * @return {?proto.api.v0alpha.LearnImage}
 */
proto.api.v0alpha.UploadStaticImageRes.prototype.getImage = function() {
  return /** @type{?proto.api.v0alpha.LearnImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.LearnImage, 1));
};


/**
 * @param {?proto.api.v0alpha.LearnImage|undefined} value
 * @return {!proto.api.v0alpha.UploadStaticImageRes} returns this
*/
proto.api.v0alpha.UploadStaticImageRes.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UploadStaticImageRes} returns this
 */
proto.api.v0alpha.UploadStaticImageRes.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UploadStaticImageRes.prototype.hasImage = function() {
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
proto.api.v0alpha.GetUpdateUrlReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetUpdateUrlReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetUpdateUrlReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetUpdateUrlReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetUpdateUrlReq}
 */
proto.api.v0alpha.GetUpdateUrlReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetUpdateUrlReq;
  return proto.api.v0alpha.GetUpdateUrlReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetUpdateUrlReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetUpdateUrlReq}
 */
proto.api.v0alpha.GetUpdateUrlReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetUpdateUrlReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetUpdateUrlReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetUpdateUrlReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetUpdateUrlReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v0alpha.GetUpdateUrlRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetUpdateUrlRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetUpdateUrlRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetUpdateUrlRes.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetUpdateUrlRes}
 */
proto.api.v0alpha.GetUpdateUrlRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetUpdateUrlRes;
  return proto.api.v0alpha.GetUpdateUrlRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetUpdateUrlRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetUpdateUrlRes}
 */
proto.api.v0alpha.GetUpdateUrlRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetUpdateUrlRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetUpdateUrlRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetUpdateUrlRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetUpdateUrlRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.GetUpdateUrlRes.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetUpdateUrlRes} returns this
 */
proto.api.v0alpha.GetUpdateUrlRes.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.api.v0alpha.GetUpdateUrlRes.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetUpdateUrlRes} returns this
 */
proto.api.v0alpha.GetUpdateUrlRes.prototype.setId = function(value) {
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
proto.api.v0alpha.AdvancedSearchReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AdvancedSearchReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AdvancedSearchReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AdvancedSearchReq.toObject = function(includeInstance, msg) {
  var f, obj = {
userPrompt: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AdvancedSearchReq}
 */
proto.api.v0alpha.AdvancedSearchReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AdvancedSearchReq;
  return proto.api.v0alpha.AdvancedSearchReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AdvancedSearchReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AdvancedSearchReq}
 */
proto.api.v0alpha.AdvancedSearchReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserPrompt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.AdvancedSearchReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AdvancedSearchReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AdvancedSearchReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AdvancedSearchReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserPrompt();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_prompt = 1;
 * @return {string}
 */
proto.api.v0alpha.AdvancedSearchReq.prototype.getUserPrompt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AdvancedSearchReq} returns this
 */
proto.api.v0alpha.AdvancedSearchReq.prototype.setUserPrompt = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.AdvancedSearchRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AdvancedSearchRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AdvancedSearchRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AdvancedSearchRes.toObject = function(includeInstance, msg) {
  var f, obj = {
answer: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourcesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AdvancedSearchRes}
 */
proto.api.v0alpha.AdvancedSearchRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AdvancedSearchRes;
  return proto.api.v0alpha.AdvancedSearchRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AdvancedSearchRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AdvancedSearchRes}
 */
proto.api.v0alpha.AdvancedSearchRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AdvancedSearchRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AdvancedSearchRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AdvancedSearchRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string answer = 1;
 * @return {string}
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.getAnswer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AdvancedSearchRes} returns this
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.setAnswer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string sources = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.getSourcesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.AdvancedSearchRes} returns this
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.setSourcesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.AdvancedSearchRes} returns this
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.addSources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.AdvancedSearchRes} returns this
 */
proto.api.v0alpha.AdvancedSearchRes.prototype.clearSourcesList = function() {
  return this.setSourcesList([]);
};


goog.object.extend(exports, proto.api.v0alpha);
