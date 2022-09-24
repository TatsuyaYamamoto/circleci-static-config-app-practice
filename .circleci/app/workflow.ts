import CircleCI from "@circleci/circleci-config-sdk";

const {
  Workflow,
  workflow: { WorkflowJob },
} = CircleCI;

import { lint } from "./jobs/lint.js";
import { test } from "./jobs/test.js";
import { build } from "./jobs/build.js";

export const workflow = new Workflow("Lint, test, and build", [
  new WorkflowJob(lint),
  new WorkflowJob(test),
  new WorkflowJob(build, {
    requires: [lint.name, test.name],
  }),
]);
