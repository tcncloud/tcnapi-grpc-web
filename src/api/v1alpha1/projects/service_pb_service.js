// package: api.v1alpha1.projects
// file: api/v1alpha1/projects/service.proto

var api_v1alpha1_projects_service_pb = require("../../../api/v1alpha1/projects/service_pb");
var api_v1alpha1_projects_projects_pb = require("../../../api/v1alpha1/projects/projects_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Projects = (function () {
  function Projects() {}
  Projects.serviceName = "api.v1alpha1.projects.Projects";
  return Projects;
}());

Projects.ListProjects = {
  methodName: "ListProjects",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_projects_projects_pb.ListProjectsRequest,
  responseType: api_v1alpha1_projects_projects_pb.ListProjectsResponse
};

Projects.GetProjectById = {
  methodName: "GetProjectById",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_projects_projects_pb.GetProjectByIdRequest,
  responseType: api_v1alpha1_projects_projects_pb.GetProjectByIdResponse
};

exports.Projects = Projects;

function ProjectsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProjectsClient.prototype.listProjects = function listProjects(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Projects.ListProjects, {
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

ProjectsClient.prototype.getProjectById = function getProjectById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Projects.GetProjectById, {
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

exports.ProjectsClient = ProjectsClient;

