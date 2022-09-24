import CircleCI from "@circleci/circleci-config-sdk";

const {
  Workflow,
  workflow: { WorkflowJob },
} = CircleCI;

import { test } from "./jobs/test.js";
import { build } from "./jobs/build.js";

export const workflow = new Workflow("dynamic-workflow", [
  new WorkflowJob(test),
  new WorkflowJob(build, {
    requires: [test.name],
  }),
]);
