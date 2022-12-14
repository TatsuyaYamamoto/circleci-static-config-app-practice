import CircleCI from "@circleci/circleci-config-sdk";

const {
  orb: { OrbImport },
  reusable: { ReusedCommand },
  parameters: { CustomParametersList },
} = CircleCI;

type OrbImportManifest = ConstructorParameters<typeof OrbImport>[5];

const orbsCircleciNodeManifest: OrbImportManifest = {
  commands: {
    "install-packages": new CustomParametersList([
      /* omit */
    ]),
  },
  jobs: {},
  executors: {},
};

export const orbsCircleciNode = new OrbImport(
  "node",
  "circleci",
  "node",
  "5.0.2",
  undefined,
  orbsCircleciNodeManifest
);

export const installPackages = () =>
  new ReusedCommand(orbsCircleciNode.commands["install-packages"]);
