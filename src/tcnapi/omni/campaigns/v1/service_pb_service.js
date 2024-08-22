// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/service.proto

var tcnapi_omni_campaigns_v1_service_pb = require("../../../../tcnapi/omni/campaigns/v1/service_pb");
var tcnapi_omni_campaigns_v1_campaigns_pb = require("../../../../tcnapi/omni/campaigns/v1/campaigns_pb");
var tcnapi_omni_campaigns_v1_entities_pb = require("../../../../tcnapi/omni/campaigns/v1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Campaigns = (function () {
  function Campaigns() {}
  Campaigns.serviceName = "tcnapi.omni.campaigns.v1.Campaigns";
  return Campaigns;
}());

Campaigns.ListCampaigns = {
  methodName: "ListCampaigns",
  service: Campaigns,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsRequest,
  responseType: tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsResponse
};

Campaigns.GetCampaign = {
  methodName: "GetCampaign",
  service: Campaigns,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_campaigns_v1_entities_pb.GetCampaignRequest,
  responseType: tcnapi_omni_campaigns_v1_campaigns_pb.Campaign
};

exports.Campaigns = Campaigns;

function CampaignsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CampaignsClient.prototype.listCampaigns = function listCampaigns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Campaigns.ListCampaigns, {
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

CampaignsClient.prototype.getCampaign = function getCampaign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Campaigns.GetCampaign, {
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

exports.CampaignsClient = CampaignsClient;

