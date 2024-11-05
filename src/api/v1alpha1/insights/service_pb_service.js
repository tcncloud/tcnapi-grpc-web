// package: api.v1alpha1.insights
// file: api/v1alpha1/insights/service.proto

var api_v1alpha1_insights_service_pb = require("../../../api/v1alpha1/insights/service_pb");
var api_v1alpha1_insights_insight_pb = require("../../../api/v1alpha1/insights/insight_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Insights = (function () {
  function Insights() {}
  Insights.serviceName = "api.v1alpha1.insights.Insights";
  return Insights;
}());

Insights.CreateInsight = {
  methodName: "CreateInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.CreateInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.CreateInsightResponse
};

Insights.ListInsights = {
  methodName: "ListInsights",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.ListInsightsRequest,
  responseType: api_v1alpha1_insights_insight_pb.ListInsightsResponse
};

Insights.ListInsightsStream = {
  methodName: "ListInsightsStream",
  service: Insights,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_insights_insight_pb.ListInsightsRequest,
  responseType: api_v1alpha1_insights_insight_pb.ListInsightsStreamResponse
};

Insights.ListOrgInsights = {
  methodName: "ListOrgInsights",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.ListOrgInsightsRequest,
  responseType: api_v1alpha1_insights_insight_pb.ListOrgInsightsResponse
};

Insights.UpdateInsight = {
  methodName: "UpdateInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.UpdateInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.UpdateInsightResponse
};

Insights.DeleteInsight = {
  methodName: "DeleteInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.DeleteInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.DeleteInsightResponse
};

Insights.GetInsight = {
  methodName: "GetInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.GetInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.GetInsightResponse
};

Insights.CreateCommonsInsight = {
  methodName: "CreateCommonsInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.CreateInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.CreateInsightResponse
};

Insights.UpdateCommonsInsight = {
  methodName: "UpdateCommonsInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.UpdateInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.UpdateInsightResponse
};

Insights.DeleteCommonsInsight = {
  methodName: "DeleteCommonsInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.DeleteInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.DeleteInsightResponse
};

Insights.GetVfsSchema = {
  methodName: "GetVfsSchema",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.GetVfsSchemaRequest,
  responseType: api_v1alpha1_insights_insight_pb.GetVfsSchemaResponse
};

Insights.ListVfses = {
  methodName: "ListVfses",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.ListVfsesRequest,
  responseType: api_v1alpha1_insights_insight_pb.ListVfsesResponse
};

Insights.ListVfsSchemas = {
  methodName: "ListVfsSchemas",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.ListVfsSchemasRequest,
  responseType: api_v1alpha1_insights_insight_pb.ListVfsSchemasResponse
};

Insights.PublishInsight = {
  methodName: "PublishInsight",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.PublishInsightRequest,
  responseType: api_v1alpha1_insights_insight_pb.PublishInsightResponse
};

Insights.CreateOutputConfiguration = {
  methodName: "CreateOutputConfiguration",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.CreateOutputConfigurationRequest,
  responseType: api_v1alpha1_insights_insight_pb.CreateOutputConfigurationResponse
};

Insights.ListOutputConfigurations = {
  methodName: "ListOutputConfigurations",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsRequest,
  responseType: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsResponse
};

Insights.UpdateOutputConfiguration = {
  methodName: "UpdateOutputConfiguration",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationRequest,
  responseType: api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationResponse
};

Insights.DeleteOutputConfiguration = {
  methodName: "DeleteOutputConfiguration",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationRequest,
  responseType: api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationResponse
};

Insights.GetOutputConfiguration = {
  methodName: "GetOutputConfiguration",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.GetOutputConfigurationRequest,
  responseType: api_v1alpha1_insights_insight_pb.GetOutputConfigurationResponse
};

Insights.SetDefaultOutputConfiguration = {
  methodName: "SetDefaultOutputConfiguration",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationRequest,
  responseType: api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationResponse
};

Insights.GetDefaultOutputConfiguration = {
  methodName: "GetDefaultOutputConfiguration",
  service: Insights,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationRequest,
  responseType: api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationResponse
};

exports.Insights = Insights;

function InsightsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InsightsClient.prototype.createInsight = function createInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.CreateInsight, {
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

InsightsClient.prototype.listInsights = function listInsights(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.ListInsights, {
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

InsightsClient.prototype.listInsightsStream = function listInsightsStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Insights.ListInsightsStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

InsightsClient.prototype.listOrgInsights = function listOrgInsights(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.ListOrgInsights, {
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

InsightsClient.prototype.updateInsight = function updateInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.UpdateInsight, {
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

InsightsClient.prototype.deleteInsight = function deleteInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.DeleteInsight, {
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

InsightsClient.prototype.getInsight = function getInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.GetInsight, {
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

InsightsClient.prototype.createCommonsInsight = function createCommonsInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.CreateCommonsInsight, {
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

InsightsClient.prototype.updateCommonsInsight = function updateCommonsInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.UpdateCommonsInsight, {
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

InsightsClient.prototype.deleteCommonsInsight = function deleteCommonsInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.DeleteCommonsInsight, {
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

InsightsClient.prototype.getVfsSchema = function getVfsSchema(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.GetVfsSchema, {
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

InsightsClient.prototype.listVfses = function listVfses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.ListVfses, {
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

InsightsClient.prototype.listVfsSchemas = function listVfsSchemas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.ListVfsSchemas, {
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

InsightsClient.prototype.publishInsight = function publishInsight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.PublishInsight, {
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

InsightsClient.prototype.createOutputConfiguration = function createOutputConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.CreateOutputConfiguration, {
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

InsightsClient.prototype.listOutputConfigurations = function listOutputConfigurations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.ListOutputConfigurations, {
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

InsightsClient.prototype.updateOutputConfiguration = function updateOutputConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.UpdateOutputConfiguration, {
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

InsightsClient.prototype.deleteOutputConfiguration = function deleteOutputConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.DeleteOutputConfiguration, {
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

InsightsClient.prototype.getOutputConfiguration = function getOutputConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.GetOutputConfiguration, {
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

InsightsClient.prototype.setDefaultOutputConfiguration = function setDefaultOutputConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.SetDefaultOutputConfiguration, {
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

InsightsClient.prototype.getDefaultOutputConfiguration = function getDefaultOutputConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Insights.GetDefaultOutputConfiguration, {
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

exports.InsightsClient = InsightsClient;

