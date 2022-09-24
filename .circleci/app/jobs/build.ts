import CircleCI from "@circleci/circleci-config-sdk";

const {
  Job,
  commands: { Checkout, Run },
} = CircleCI;

import { nodeExecutor } from "../executors/node.js";
import { installPackages } from "../orbs/circleci-node.js";

export const build = new Job("build", nodeExecutor.reuse(), [
  new Checkout(),
  installPackages(),
  new Run({
    command: "npm run build",
  }),
]);
