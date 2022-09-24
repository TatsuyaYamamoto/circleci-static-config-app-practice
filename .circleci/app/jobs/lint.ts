import CircleCI from "@circleci/circleci-config-sdk";

const {
  Job,
  commands: { Checkout, Run },
} = CircleCI;

import { nodeExecutor } from "../executors/node.js";
import { installPackages } from "../orbs/circleci-node.js";

export const lint = new Job("lint", nodeExecutor.reuse(), [
  new Checkout(),
  installPackages(),
  new Run({
    command: "npm run lint",
  }),
]);
