import CircleCI from "@circleci/circleci-config-sdk";

const {
  Job,
  commands: { Checkout, Run },
  reusable: { ReusedCommand },
} = CircleCI;

import { nodeExecutor } from "../executors/node.js";
import { orbsCircleciNode } from "../orbs/circleci-node.js";

export const lint = new Job("lint", nodeExecutor.reuse(), [
  new Checkout(),
  new ReusedCommand(orbsCircleciNode.commands["install-packages"]),
  new Run({
    command: "npm run lint",
  }),
]);
