// package: api.v0alpha
// file: api/v0alpha/ana.proto

var api_v0alpha_ana_pb = require("../../api/v0alpha/ana_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Ana = (function () {
  function Ana() {}
  Ana.serviceName = "api.v0alpha.Ana";
  return Ana;
}());

Ana.GetSpecifiedVisualizations = {
  methodName: "GetSpecifiedVisualizations",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetSpecifiedVisualizationsReq,
  responseType: api_v0alpha_ana_pb.Visualizations
};

Ana.RegisterAccount = {
  methodName: "RegisterAccount",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.RegisterAccountReq,
  responseType: api_v0alpha_ana_pb.AnaAccount
};

Ana.SetWeeks = {
  methodName: "SetWeeks",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetWeeksReq,
  responseType: api_v0alpha_ana_pb.SetWeeksRes
};

Ana.SetDefaultTimeFilter = {
  methodName: "SetDefaultTimeFilter",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetDefaultTimeFilterReq,
  responseType: api_v0alpha_ana_pb.SetDefaultTimeFilterRes
};

Ana.SetDefaultDashboard = {
  methodName: "SetDefaultDashboard",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetDefaultDashboardReq,
  responseType: api_v0alpha_ana_pb.SetDefaultDashboardRes
};

Ana.GetAccount = {
  methodName: "GetAccount",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetAccountReq,
  responseType: api_v0alpha_ana_pb.AnaAccount
};

Ana.GetSpecifiedAccount = {
  methodName: "GetSpecifiedAccount",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetSpecifiedAccountReq,
  responseType: api_v0alpha_ana_pb.AnaAccount
};

Ana.GetAuthorizedAnalyticsLink = {
  methodName: "GetAuthorizedAnalyticsLink",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkReq,
  responseType: api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkRes
};

Ana.GenerateMonthlyBilling = {
  methodName: "GenerateMonthlyBilling",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GenerateMonthlyBillingReq,
  responseType: api_v0alpha_ana_pb.GenerateMonthlyBillingRes
};

Ana.GetTimeZone = {
  methodName: "GetTimeZone",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetTimeZoneReq,
  responseType: api_v0alpha_ana_pb.TimeZone
};

Ana.SetTimeZone = {
  methodName: "SetTimeZone",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetTimeZoneReq,
  responseType: api_v0alpha_ana_pb.SetTimeZoneRes
};

Ana.CopyDashViz = {
  methodName: "CopyDashViz",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.CopyDashVizReq,
  responseType: api_v0alpha_ana_pb.CopyDashVizRes
};

Ana.GetSpecifiedBillingSummary = {
  methodName: "GetSpecifiedBillingSummary",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetSpecifiedBillingSummaryReq,
  responseType: api_v0alpha_ana_pb.BillingSummary
};

Ana.GetBillingSummary = {
  methodName: "GetBillingSummary",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetBillingSummaryReq,
  responseType: api_v0alpha_ana_pb.BillingSummary
};

Ana.EnableCustomReports = {
  methodName: "EnableCustomReports",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetCustomReportsEnabledReq,
  responseType: api_v0alpha_ana_pb.SetCustomReportsEnabledRes
};

Ana.DisableCustomReports = {
  methodName: "DisableCustomReports",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetCustomReportsEnabledReq,
  responseType: api_v0alpha_ana_pb.SetCustomReportsEnabledRes
};

Ana.MakeAdoptable = {
  methodName: "MakeAdoptable",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.MakeAdoptableReq,
  responseType: api_v0alpha_ana_pb.MakeAdoptableRes
};

Ana.MakeUnadoptable = {
  methodName: "MakeUnadoptable",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.MakeAdoptableReq,
  responseType: api_v0alpha_ana_pb.MakeAdoptableRes
};

Ana.AdoptAnaAccount = {
  methodName: "AdoptAnaAccount",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetAnaAccountRelationReq,
  responseType: api_v0alpha_ana_pb.SetAnaAccountRelationRes
};

Ana.DisownAnaAccount = {
  methodName: "DisownAnaAccount",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.SetAnaAccountRelationReq,
  responseType: api_v0alpha_ana_pb.SetAnaAccountRelationRes
};

Ana.GetAccessibleClients = {
  methodName: "GetAccessibleClients",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetAccessibleClientsReq,
  responseType: api_v0alpha_ana_pb.SimpleRelations
};

Ana.GetFamily = {
  methodName: "GetFamily",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetFamilyReq,
  responseType: api_v0alpha_ana_pb.Family
};

Ana.GetAllowedDataVisibility = {
  methodName: "GetAllowedDataVisibility",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetVisibilityReq,
  responseType: api_v0alpha_ana_pb.DataVisibility
};

Ana.GetCurrentDataVisibility = {
  methodName: "GetCurrentDataVisibility",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetVisibilityReq,
  responseType: api_v0alpha_ana_pb.DataVisibility
};

Ana.GetIndicesVisibility = {
  methodName: "GetIndicesVisibility",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetVisibilityReq,
  responseType: api_v0alpha_ana_pb.IndicesVisibility
};

Ana.GetAuditableDataVisibility = {
  methodName: "GetAuditableDataVisibility",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetVisibilityReq,
  responseType: api_v0alpha_ana_pb.DataVisibility
};

Ana.GetOrganizationNames = {
  methodName: "GetOrganizationNames",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetOrganizationNamesReq,
  responseType: api_v0alpha_ana_pb.GetOrganizationNamesRes
};

Ana.GenerateVizDataById = {
  methodName: "GenerateVizDataById",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GenerateVizDataByIdReq,
  responseType: api_v0alpha_ana_pb.GenerateVizDataByIdRes
};

Ana.GetClientStatus = {
  methodName: "GetClientStatus",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.GetClientStatusReq,
  responseType: api_v0alpha_ana_pb.GetClientStatusResp
};

Ana.ReloadClientData = {
  methodName: "ReloadClientData",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.ReloadClientDataReq,
  responseType: api_v0alpha_ana_pb.ReloadClientDataResp
};

Ana.ListVisualizationsLegacy = {
  methodName: "ListVisualizationsLegacy",
  service: Ana,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_ana_pb.ListVisualizationsLegacyReq,
  responseType: api_v0alpha_ana_pb.ListVisualizationsLegacyRes
};

exports.Ana = Ana;

function AnaClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AnaClient.prototype.getSpecifiedVisualizations = function getSpecifiedVisualizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetSpecifiedVisualizations, {
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

AnaClient.prototype.registerAccount = function registerAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.RegisterAccount, {
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

AnaClient.prototype.setWeeks = function setWeeks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.SetWeeks, {
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

AnaClient.prototype.setDefaultTimeFilter = function setDefaultTimeFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.SetDefaultTimeFilter, {
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

AnaClient.prototype.setDefaultDashboard = function setDefaultDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.SetDefaultDashboard, {
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

AnaClient.prototype.getAccount = function getAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetAccount, {
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

AnaClient.prototype.getSpecifiedAccount = function getSpecifiedAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetSpecifiedAccount, {
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

AnaClient.prototype.getAuthorizedAnalyticsLink = function getAuthorizedAnalyticsLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetAuthorizedAnalyticsLink, {
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

AnaClient.prototype.generateMonthlyBilling = function generateMonthlyBilling(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GenerateMonthlyBilling, {
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

AnaClient.prototype.getTimeZone = function getTimeZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetTimeZone, {
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

AnaClient.prototype.setTimeZone = function setTimeZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.SetTimeZone, {
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

AnaClient.prototype.copyDashViz = function copyDashViz(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.CopyDashViz, {
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

AnaClient.prototype.getSpecifiedBillingSummary = function getSpecifiedBillingSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetSpecifiedBillingSummary, {
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

AnaClient.prototype.getBillingSummary = function getBillingSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetBillingSummary, {
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

AnaClient.prototype.enableCustomReports = function enableCustomReports(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.EnableCustomReports, {
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

AnaClient.prototype.disableCustomReports = function disableCustomReports(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.DisableCustomReports, {
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

AnaClient.prototype.makeAdoptable = function makeAdoptable(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.MakeAdoptable, {
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

AnaClient.prototype.makeUnadoptable = function makeUnadoptable(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.MakeUnadoptable, {
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

AnaClient.prototype.adoptAnaAccount = function adoptAnaAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.AdoptAnaAccount, {
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

AnaClient.prototype.disownAnaAccount = function disownAnaAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.DisownAnaAccount, {
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

AnaClient.prototype.getAccessibleClients = function getAccessibleClients(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetAccessibleClients, {
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

AnaClient.prototype.getFamily = function getFamily(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetFamily, {
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

AnaClient.prototype.getAllowedDataVisibility = function getAllowedDataVisibility(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetAllowedDataVisibility, {
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

AnaClient.prototype.getCurrentDataVisibility = function getCurrentDataVisibility(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetCurrentDataVisibility, {
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

AnaClient.prototype.getIndicesVisibility = function getIndicesVisibility(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetIndicesVisibility, {
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

AnaClient.prototype.getAuditableDataVisibility = function getAuditableDataVisibility(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetAuditableDataVisibility, {
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

AnaClient.prototype.getOrganizationNames = function getOrganizationNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetOrganizationNames, {
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

AnaClient.prototype.generateVizDataById = function generateVizDataById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GenerateVizDataById, {
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

AnaClient.prototype.getClientStatus = function getClientStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.GetClientStatus, {
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

AnaClient.prototype.reloadClientData = function reloadClientData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.ReloadClientData, {
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

AnaClient.prototype.listVisualizationsLegacy = function listVisualizationsLegacy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Ana.ListVisualizationsLegacy, {
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

exports.AnaClient = AnaClient;

