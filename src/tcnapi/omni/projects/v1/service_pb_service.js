// package: tcnapi.omni.projects.v1
// file: tcnapi/omni/projects/v1/service.proto

var tcnapi_omni_projects_v1_service_pb = require("../../../../tcnapi/omni/projects/v1/service_pb");
var tcnapi_omni_projects_v1_entities_pb = require("../../../../tcnapi/omni/projects/v1/entities_pb");
var tcnapi_omni_projects_v1_projects_pb = require("../../../../tcnapi/omni/projects/v1/projects_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Projects = (function () {
  function Projects() {}
  Projects.serviceName = "tcnapi.omni.projects.v1.Projects";
  return Projects;
}());

Projects.ListProjects = {
  methodName: "ListProjects",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_projects_v1_entities_pb.ListProjectsRequest,
  responseType: tcnapi_omni_projects_v1_entities_pb.ListProjectsResponse
};

Projects.GetProject = {
  methodName: "GetProject",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_projects_v1_entities_pb.GetProjectRequest,
  responseType: tcnapi_omni_projects_v1_projects_pb.Project
};

Projects.CreateProject = {
  methodName: "CreateProject",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_projects_v1_entities_pb.CreateProjectRequest,
  responseType: tcnapi_omni_projects_v1_projects_pb.Project
};

Projects.UpdateProject = {
  methodName: "UpdateProject",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_projects_v1_entities_pb.UpdateProjectRequest,
  responseType: tcnapi_omni_projects_v1_projects_pb.Project
};

Projects.DeleteProject = {
  methodName: "DeleteProject",
  service: Projects,
  requestStream: false,
  responseStream: false,
  requestType: tcnapi_omni_projects_v1_entities_pb.DeleteProjectRequest,
  responseType: tcnapi_omni_projects_v1_projects_pb.Project
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

ProjectsClient.prototype.getProject = function getProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Projects.GetProject, {
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

ProjectsClient.prototype.createProject = function createProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Projects.CreateProject, {
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

ProjectsClient.prototype.updateProject = function updateProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Projects.UpdateProject, {
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

ProjectsClient.prototype.deleteProject = function deleteProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Projects.DeleteProject, {
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

