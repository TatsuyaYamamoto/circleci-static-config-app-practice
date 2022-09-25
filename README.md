# CircleCI static config app practice

> See [t28.dev/circleci-config-app-with-sdk](https://t28.dev/circleci-config-app-with-sdk/) for more details.

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TatsuyaYamamoto/circleci-static-config-app-practice/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TatsuyaYamamoto/circleci-static-config-app-practice/tree/main)

```shell
$ npm --prefix .circleci/app run build
```

```shell
# local test
$ circleci local execute --job build --job lint
$ circleci local execute --job build --job test
$ circleci local execute --job build --job build
```
