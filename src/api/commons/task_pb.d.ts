// package: api.commons
// file: api/commons/task.proto

import * as jspb from "google-protobuf";

export interface TaskStatusMap {
  TASK_UNKNOWN: 0;
  TASK_SCHEDULED: 2100;
  TASK_WAITING: 2110;
  TASK_PREPARING: 2120;
  TASK_RUNNING: 2200;
  TASK_COMPLETED: 2300;
  TASK_CANCELLED_TIMEOUT: 2310;
  TASK_CANCELLED_USER: 2320;
  TASK_CANCELLED_ADMIN: 2330;
}

export const TaskStatus: TaskStatusMap;

