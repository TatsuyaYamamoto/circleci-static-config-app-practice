import CircleCI from "@circleci/circleci-config-sdk";

const { Config } = CircleCI;

import { nodeExecutor } from "./executors/node.js";
import { test } from "./jobs/test.js";
import { build } from "./jobs/build.js";
import { orbsCircleciNode } from "./orbs/circleci-node.js";
import { workflow } from "./workflow.js";

const config = new Config(
  false,
  [test, build],
  [workflow],
  [nodeExecutor],
  undefined,
  undefined,
  [orbsCircleciNode]
);
config.version = 2.1;

export { config };
