import CircleCI from '@circleci/circleci-config-sdk';

const { executors: { DockerExecutor } } = CircleCI;

export const nodeExecutor = new DockerExecutor(
  'cimg/node:16.15.1',
).toReusable('docker-node');
