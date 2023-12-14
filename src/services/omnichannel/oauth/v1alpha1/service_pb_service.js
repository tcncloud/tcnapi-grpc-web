// package: services.omnichannel.oauth.v1alpha1
// file: services/omnichannel/oauth/v1alpha1/service.proto

var services_omnichannel_oauth_v1alpha1_service_pb = require("../../../../services/omnichannel/oauth/v1alpha1/service_pb");
var services_omnichannel_oauth_v1alpha1_entities_pb = require("../../../../services/omnichannel/oauth/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OauthService = (function () {
  function OauthService() {}
  OauthService.serviceName = "services.omnichannel.oauth.v1alpha1.OauthService";
  return OauthService;
}());

OauthService.GetConnectedInboxOAuthURL = {
  methodName: "GetConnectedInboxOAuthURL",
  service: OauthService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_oauth_v1alpha1_entities_pb.GetConnectedInboxOAuthURLRequest,
  responseType: services_omnichannel_oauth_v1alpha1_entities_pb.GetConnectedInboxOAuthURLResponse
};

exports.OauthService = OauthService;

function OauthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OauthServiceClient.prototype.getConnectedInboxOAuthURL = function getConnectedInboxOAuthURL(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OauthService.GetConnectedInboxOAuthURL, {
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

exports.OauthServiceClient = OauthServiceClient;

