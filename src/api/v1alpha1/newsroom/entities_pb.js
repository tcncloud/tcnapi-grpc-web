// source: api/v1alpha1/newsroom/entities.proto
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

var api_commons_newsroom_pb = require('../../../api/commons/newsroom_pb.js');
goog.object.extend(proto, api_commons_newsroom_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreateClientArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreateClientArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreateNewsArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreateNewsArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetNewsForUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetNewsForUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListClientArticlesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListClientArticlesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListNewsArticlesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListNewsArticlesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.NewsArticleDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.NewsArticleImage', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.PublishedArticleDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UpdateClientArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UpdateClientArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UserActivity', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UserActivityRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.newsroom.UserActivityResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreateNewsArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.CreateNewsArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreateNewsArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.CreateNewsArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListNewsArticlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.displayName = 'proto.api.v1alpha1.newsroom.ListNewsArticlesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListNewsArticlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.displayName = 'proto.api.v1alpha1.newsroom.ListNewsArticlesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.displayName = 'proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.displayName = 'proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.NewsArticleDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.NewsArticleDetails.displayName = 'proto.api.v1alpha1.newsroom.NewsArticleDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.PublishedArticleDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.PublishedArticleDetails.displayName = 'proto.api.v1alpha1.newsroom.PublishedArticleDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UserActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UserActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UserActivity.displayName = 'proto.api.v1alpha1.newsroom.UserActivity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.displayName = 'proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.displayName = 'proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.displayName = 'proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.displayName = 'proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.displayName = 'proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UserActivityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UserActivityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UserActivityRequest.displayName = 'proto.api.v1alpha1.newsroom.UserActivityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UserActivityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UserActivityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UserActivityResponse.displayName = 'proto.api.v1alpha1.newsroom.UserActivityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetNewsForUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetNewsForUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetNewsForUserRequest.displayName = 'proto.api.v1alpha1.newsroom.GetNewsForUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.GetNewsForUserResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetNewsForUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetNewsForUserResponse.displayName = 'proto.api.v1alpha1.newsroom.GetNewsForUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.displayName = 'proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.NewsArticleImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.NewsArticleImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.NewsArticleImage.displayName = 'proto.api.v1alpha1.newsroom.NewsArticleImage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.displayName = 'proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.displayName = 'proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.displayName = 'proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreateClientArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreateClientArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.CreateClientArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreateClientArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreateClientArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.CreateClientArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UpdateClientArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.UpdateClientArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UpdateClientArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.UpdateClientArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListClientArticlesRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListClientArticlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListClientArticlesRequest.displayName = 'proto.api.v1alpha1.newsroom.ListClientArticlesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListClientArticlesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListClientArticlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListClientArticlesResponse.displayName = 'proto.api.v1alpha1.newsroom.ListClientArticlesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.displayName = 'proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.displayName = 'proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.displayName = 'proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.displayName = 'proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.displayName = 'proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.displayName = 'proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.displayName = 'proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.displayName = 'proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.displayName = 'proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.displayName = 'proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse';
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
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
title: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, ""),
author: jspb.Message.getFieldWithDefault(msg, 3, ""),
imageReferenceId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreateNewsArticleRequest;
  return proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageReferenceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
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
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageReferenceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string author = 3;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image_reference_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.getImageReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleRequest.prototype.setImageReferenceId = function(value) {
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
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreateNewsArticleResponse;
  return proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.CreateNewsArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreateNewsArticleResponse.prototype.hasArticleDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
statusesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListNewsArticlesRequest;
  return proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.ArticleStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatuses(values[i]);
      }
      break;
    case 100:
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
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.ArticleStatus statuses = 1;
 * @return {!Array<!proto.api.commons.ArticleStatus>}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.getStatusesList = function() {
  return /** @type {!Array<!proto.api.commons.ArticleStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.ArticleStatus>} value
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.setStatusesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.ArticleStatus} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.addStatuses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} returns this
*/
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetailsList: jspb.Message.toObjectList(msg.getArticleDetailsList(),
    proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListNewsArticlesResponse;
  return proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.addArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewsArticleDetails article_details = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.NewsArticleDetails>}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.prototype.getArticleDetailsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.NewsArticleDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.NewsArticleDetails>} value
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse} returns this
*/
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.prototype.setArticleDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.prototype.addArticleDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.NewsArticleDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListNewsArticlesResponse} returns this
 */
proto.api.v1alpha1.newsroom.ListNewsArticlesResponse.prototype.clearArticleDetailsList = function() {
  return this.setArticleDetailsList([]);
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
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest;
  return proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest} returns this
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdRequest.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse;
  return proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse} returns this
*/
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse} returns this
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.GetNewsArticleByIdResponse.prototype.hasArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest;
  return proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    case 100:
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
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} returns this
*/
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.hasArticleDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} returns this
*/
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
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
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse;
  return proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UpdateNewsArticleResponse.prototype.hasArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
content: jspb.Message.getFieldWithDefault(msg, 3, ""),
status: jspb.Message.getFieldWithDefault(msg, 4, 0),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
author: jspb.Message.getFieldWithDefault(msg, 7, ""),
imageReferenceId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
  return proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.ArticleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageReferenceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getTitle();
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
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getImageReferenceId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ArticleStatus status = 4;
 * @return {!proto.api.commons.ArticleStatus}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.ArticleStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ArticleStatus} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
*/
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
*/
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string author = 7;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string image_reference_id = 8;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.getImageReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleDetails.prototype.setImageReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
newsArticleDetails: (f = msg.getNewsArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f),
datePublished: (f = msg.getDatePublished()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
displayToUser: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
alwaysDisplay: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
  return proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPublishedArticleSid(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setNewsArticleDetails(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatePublished(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayToUser(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getNewsArticleDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
  f = message.getDatePublished();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDisplayToUser();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAlwaysDisplay();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int64 published_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.getPublishedArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.setPublishedArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional NewsArticleDetails news_article_details = 2;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.getNewsArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 2));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
*/
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.setNewsArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.clearNewsArticleDetails = function() {
  return this.setNewsArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.hasNewsArticleDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp date_published = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.getDatePublished = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
*/
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.setDatePublished = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.clearDatePublished = function() {
  return this.setDatePublished(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.hasDatePublished = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool display_to_user = 4;
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.getDisplayToUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.setDisplayToUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool always_display = 5;
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.getAlwaysDisplay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails} returns this
 */
proto.api.v1alpha1.newsroom.PublishedArticleDetails.prototype.setAlwaysDisplay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.api.v1alpha1.newsroom.UserActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UserActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UserActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivity.toObject = function(includeInstance, msg) {
  var f, obj = {
userActivityLogSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
userActivityDetails: (f = msg.getUserActivityDetails()) && proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UserActivity}
 */
proto.api.v1alpha1.newsroom.UserActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UserActivity;
  return proto.api.v1alpha1.newsroom.UserActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UserActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UserActivity}
 */
proto.api.v1alpha1.newsroom.UserActivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setUserActivityLogSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.deserializeBinaryFromReader);
      msg.setUserActivityDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UserActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UserActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserActivityLogSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserActivityDetails();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.serializeBinaryToWriter
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
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails}
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails;
  return proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails}
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPublishedArticleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 published_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.prototype.getPublishedArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails} returns this
 */
proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails.prototype.setPublishedArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 user_activity_log_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.getUserActivityLogSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivity} returns this
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.setUserActivityLogSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivity} returns this
*/
proto.api.v1alpha1.newsroom.UserActivity.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UserActivity} returns this
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UserActivityDetails user_activity_details = 3;
 * @return {?proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails}
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.getUserActivityDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails, 3));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.UserActivity.UserActivityDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivity} returns this
*/
proto.api.v1alpha1.newsroom.UserActivity.prototype.setUserActivityDetails = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UserActivity} returns this
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.clearUserActivityDetails = function() {
  return this.setUserActivityDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UserActivity.prototype.hasUserActivityDetails = function() {
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
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
displayToUser: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
articleLink: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest;
  return proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayToUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArticleLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getDisplayToUser();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getArticleLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional bool display_to_user = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.getDisplayToUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.setDisplayToUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string article_link = 3;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.getArticleLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleRequest.prototype.setArticleLink = function(value) {
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
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetails: (f = msg.getPublishedArticleDetails()) && proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse;
  return proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.setPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional PublishedArticleDetails published_article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.prototype.getPublishedArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.PublishedArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.PublishedArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.prototype.setPublishedArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.prototype.clearPublishedArticleDetails = function() {
  return this.setPublishedArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreatePublishedArticleResponse.prototype.hasPublishedArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest;
  return proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetailsList: jspb.Message.toObjectList(msg.getPublishedArticleDetailsList(),
    proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse;
  return proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.addPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PublishedArticleDetails published_article_details = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.prototype.getPublishedArticleDetailsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>} value
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse} returns this
*/
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.prototype.setPublishedArticleDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.PublishedArticleDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.prototype.addPublishedArticleDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.PublishedArticleDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse} returns this
 */
proto.api.v1alpha1.newsroom.ListPublishedArticlesResponse.prototype.clearPublishedArticleDetailsList = function() {
  return this.setPublishedArticleDetailsList([]);
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
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
publishedArticleSid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest;
  return proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewArticleSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPublishedArticleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPublishedArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.prototype.getNewArticleSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest} returns this
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 published_article_sid = 2;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.prototype.getPublishedArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest} returns this
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdRequest.prototype.setPublishedArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetails: (f = msg.getPublishedArticleDetails()) && proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse;
  return proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.setPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional PublishedArticleDetails published_article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.prototype.getPublishedArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.PublishedArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.PublishedArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse} returns this
*/
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.prototype.setPublishedArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse} returns this
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.prototype.clearPublishedArticleDetails = function() {
  return this.setPublishedArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.GetPublishedArticleByIdResponse.prototype.hasPublishedArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.UserActivityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UserActivityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UserActivityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UserActivityRequest}
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UserActivityRequest;
  return proto.api.v1alpha1.newsroom.UserActivityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UserActivityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UserActivityRequest}
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPublishedArticleSid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UserActivityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UserActivityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 published_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.prototype.getPublishedArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivityRequest} returns this
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.prototype.setPublishedArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivityRequest} returns this
 */
proto.api.v1alpha1.newsroom.UserActivityRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.api.v1alpha1.newsroom.UserActivityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UserActivityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UserActivityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userActivity: (f = msg.getUserActivity()) && proto.api.v1alpha1.newsroom.UserActivity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UserActivityResponse}
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UserActivityResponse;
  return proto.api.v1alpha1.newsroom.UserActivityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UserActivityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UserActivityResponse}
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.UserActivity;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.UserActivity.deserializeBinaryFromReader);
      msg.setUserActivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UserActivityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UserActivityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserActivity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.UserActivity.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserActivity user_activity = 1;
 * @return {?proto.api.v1alpha1.newsroom.UserActivity}
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.prototype.getUserActivity = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.UserActivity} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.UserActivity, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.UserActivity|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UserActivityResponse} returns this
*/
proto.api.v1alpha1.newsroom.UserActivityResponse.prototype.setUserActivity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UserActivityResponse} returns this
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.prototype.clearUserActivity = function() {
  return this.setUserActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UserActivityResponse.prototype.hasUserActivity = function() {
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
proto.api.v1alpha1.newsroom.GetNewsForUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetNewsForUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetNewsForUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsForUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.newsroom.GetNewsForUserRequest}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetNewsForUserRequest;
  return proto.api.v1alpha1.newsroom.GetNewsForUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsForUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsForUserRequest}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.newsroom.GetNewsForUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetNewsForUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsForUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsForUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetNewsForUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetailsList: jspb.Message.toObjectList(msg.getPublishedArticleDetailsList(),
    proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetNewsForUserResponse;
  return proto.api.v1alpha1.newsroom.GetNewsForUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.addPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetNewsForUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PublishedArticleDetails published_article_details = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.prototype.getPublishedArticleDetailsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>} value
 * @return {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse} returns this
*/
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.prototype.setPublishedArticleDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.PublishedArticleDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.prototype.addPublishedArticleDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.PublishedArticleDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.GetNewsForUserResponse} returns this
 */
proto.api.v1alpha1.newsroom.GetNewsForUserResponse.prototype.clearPublishedArticleDetailsList = function() {
  return this.setPublishedArticleDetailsList([]);
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
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest;
  return proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest} returns this
*/
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest} returns this
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageRequest.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
newArticleSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
content: jspb.Message.getFieldWithDefault(msg, 3, ""),
downloadUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
imageReferenceId: jspb.Message.getFieldWithDefault(msg, 5, ""),
imageType: jspb.Message.getFieldWithDefault(msg, 6, ""),
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
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.NewsArticleImage;
  return proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageReferenceId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageType(value);
      break;
    case 7:
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
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImageReferenceId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getImageType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTempId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 new_article_sid = 2;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string download_url = 4;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setDownloadUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string image_reference_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getImageReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setImageReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string image_type = 6;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getImageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setImageType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.StringValue temp_id = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.getTempId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
*/
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.setTempId = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage} returns this
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.clearTempId = function() {
  return this.setTempId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.NewsArticleImage.prototype.hasTempId = function() {
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
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse;
  return proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse} returns this
*/
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse} returns this
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.StoreNewsArticleImageResponse.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest;
  return proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleRequest.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
newsArticleImagesList: jspb.Message.toObjectList(msg.getNewsArticleImagesList(),
    proto.api.v1alpha1.newsroom.NewsArticleImage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse;
  return proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
      msg.addNewsArticleImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewsArticleImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewsArticleImage news_article_images = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.NewsArticleImage>}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.prototype.getNewsArticleImagesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.NewsArticleImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.NewsArticleImage>} value
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.prototype.setNewsArticleImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.prototype.addNewsArticleImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.NewsArticleImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.ListImagesForNewsArticleResponse.prototype.clearNewsArticleImagesList = function() {
  return this.setNewsArticleImagesList([]);
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
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest;
  return proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest} returns this
*/
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest} returns this
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageRequest.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse;
  return proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse} returns this
*/
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse} returns this
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UploadNewsArticleImageResponse.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreateClientArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
title: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, ""),
author: jspb.Message.getFieldWithDefault(msg, 3, ""),
imageReferenceId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreateClientArticleRequest;
  return proto.api.v1alpha1.newsroom.CreateClientArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageReferenceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreateClientArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
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
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageReferenceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string author = 3;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image_reference_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.getImageReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreateClientArticleRequest.prototype.setImageReferenceId = function(value) {
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
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreateClientArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreateClientArticleResponse;
  return proto.api.v1alpha1.newsroom.CreateClientArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreateClientArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.CreateClientArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreateClientArticleResponse.prototype.hasArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UpdateClientArticleRequest;
  return proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    case 100:
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
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} returns this
*/
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.hasArticleDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} returns this
*/
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
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
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetails: (f = msg.getArticleDetails()) && proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UpdateClientArticleResponse;
  return proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.setArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleDetails article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.prototype.getArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.prototype.setArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UpdateClientArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.prototype.clearArticleDetails = function() {
  return this.setArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UpdateClientArticleResponse.prototype.hasArticleDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListClientArticlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
statusesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListClientArticlesRequest;
  return proto.api.v1alpha1.newsroom.ListClientArticlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.ArticleStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatuses(values[i]);
      }
      break;
    case 100:
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
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListClientArticlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.ArticleStatus statuses = 1;
 * @return {!Array<!proto.api.commons.ArticleStatus>}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.getStatusesList = function() {
  return /** @type {!Array<!proto.api.commons.ArticleStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.ArticleStatus>} value
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.setStatusesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.ArticleStatus} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.addStatuses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} returns this
*/
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListClientArticlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
articleDetailsList: jspb.Message.toObjectList(msg.getArticleDetailsList(),
    proto.api.v1alpha1.newsroom.NewsArticleDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListClientArticlesResponse;
  return proto.api.v1alpha1.newsroom.ListClientArticlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleDetails.deserializeBinaryFromReader);
      msg.addArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListClientArticlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticleDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewsArticleDetails article_details = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.NewsArticleDetails>}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.prototype.getArticleDetailsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.NewsArticleDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.NewsArticleDetails>} value
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse} returns this
*/
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.prototype.setArticleDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleDetails}
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.prototype.addArticleDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.NewsArticleDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListClientArticlesResponse} returns this
 */
proto.api.v1alpha1.newsroom.ListClientArticlesResponse.prototype.clearArticleDetailsList = function() {
  return this.setArticleDetailsList([]);
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
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
displayToUser: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
articleLink: jspb.Message.getFieldWithDefault(msg, 3, ""),
alwaysShow: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest;
  return proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayToUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArticleLink(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysShow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getDisplayToUser();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getArticleLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAlwaysShow();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional bool display_to_user = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.getDisplayToUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.setDisplayToUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string article_link = 3;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.getArticleLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.setArticleLink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool always_show = 4;
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.getAlwaysShow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleRequest.prototype.setAlwaysShow = function(value) {
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
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetails: (f = msg.getPublishedArticleDetails()) && proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse;
  return proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.setPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional PublishedArticleDetails published_article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.prototype.getPublishedArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.PublishedArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.PublishedArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.prototype.setPublishedArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.prototype.clearPublishedArticleDetails = function() {
  return this.setPublishedArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.CreatePublishedClientArticleResponse.prototype.hasPublishedArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest;
  return proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPublishedArticleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 published_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.prototype.getPublishedArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest} returns this
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdRequest.prototype.setPublishedArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetails: (f = msg.getPublishedArticleDetails()) && proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse;
  return proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.setPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional PublishedArticleDetails published_article_details = 1;
 * @return {?proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.prototype.getPublishedArticleDetails = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.PublishedArticleDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.PublishedArticleDetails|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse} returns this
*/
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.prototype.setPublishedArticleDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse} returns this
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.prototype.clearPublishedArticleDetails = function() {
  return this.setPublishedArticleDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.GetPublishedClientArticleByIdResponse.prototype.hasPublishedArticleDetails = function() {
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
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest;
  return proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest} returns this
*/
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest} returns this
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageRequest.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse;
  return proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse} returns this
*/
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse} returns this
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.StoreClientArticleImageResponse.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newArticleSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest;
  return proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setNewArticleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewArticleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 new_article_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.prototype.getNewArticleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest} returns this
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleRequest.prototype.setNewArticleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
newsArticleImagesList: jspb.Message.toObjectList(msg.getNewsArticleImagesList(),
    proto.api.v1alpha1.newsroom.NewsArticleImage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse;
  return proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
      msg.addNewsArticleImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewsArticleImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewsArticleImage news_article_images = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.NewsArticleImage>}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.prototype.getNewsArticleImagesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.NewsArticleImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.NewsArticleImage>} value
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse} returns this
*/
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.prototype.setNewsArticleImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.NewsArticleImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.prototype.addNewsArticleImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.NewsArticleImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse} returns this
 */
proto.api.v1alpha1.newsroom.ListImagesForClientArticleResponse.prototype.clearNewsArticleImagesList = function() {
  return this.setNewsArticleImagesList([]);
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
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest;
  return proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest} returns this
*/
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest} returns this
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageRequest.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
image: (f = msg.getImage()) && proto.api.v1alpha1.newsroom.NewsArticleImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse;
  return proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.NewsArticleImage;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.NewsArticleImage.deserializeBinaryFromReader);
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
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.NewsArticleImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewsArticleImage image = 1;
 * @return {?proto.api.v1alpha1.newsroom.NewsArticleImage}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.prototype.getImage = function() {
  return /** @type{?proto.api.v1alpha1.newsroom.NewsArticleImage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.newsroom.NewsArticleImage, 1));
};


/**
 * @param {?proto.api.v1alpha1.newsroom.NewsArticleImage|undefined} value
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse} returns this
*/
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse} returns this
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.newsroom.UploadClientArticleImageResponse.prototype.hasImage = function() {
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
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest;
  return proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
publishedArticleDetailsList: jspb.Message.toObjectList(msg.getPublishedArticleDetailsList(),
    proto.api.v1alpha1.newsroom.PublishedArticleDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse;
  return proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.newsroom.PublishedArticleDetails;
      reader.readMessage(value,proto.api.v1alpha1.newsroom.PublishedArticleDetails.deserializeBinaryFromReader);
      msg.addPublishedArticleDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedArticleDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.newsroom.PublishedArticleDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PublishedArticleDetails published_article_details = 1;
 * @return {!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.prototype.getPublishedArticleDetailsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.newsroom.PublishedArticleDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.newsroom.PublishedArticleDetails>} value
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse} returns this
*/
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.prototype.setPublishedArticleDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.newsroom.PublishedArticleDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.newsroom.PublishedArticleDetails}
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.prototype.addPublishedArticleDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.newsroom.PublishedArticleDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse} returns this
 */
proto.api.v1alpha1.newsroom.ListPublishedClientArticlesResponse.prototype.clearPublishedArticleDetailsList = function() {
  return this.setPublishedArticleDetailsList([]);
};


goog.object.extend(exports, proto.api.v1alpha1.newsroom);
