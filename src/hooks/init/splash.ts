import { Hook } from "@oclif/config";
const path = require("path");
const logo = require("asciiart-logo");
const shell = require("shelljs");
const packagejson = path.join(__dirname, "..", "..", "..", "package.json");
const config = require(packagejson);
const updateNotifier = require("update-notifier");
const pkg = require(packagejson);
const notifier = updateNotifier({ pkg, updateCheckInterval: 0 });
const hook: Hook<"init"> = async function (opts) {
  config.font = "Standard";
  config.logoColor = "bold-green";
  config.textColor = "bold-blue";
  config.borderColor = "bold-blue";
  config.horizontalLayout = "fitted";
  shell.echo(logo(config).right("- by Riaz Laskar").render());
  notifier.notify({
    isGlobal: true,
    defer: false,
    boxenOpts: {
      padding: 2,
      margin: 2,
      align: "center",
      borderColor: "yellow",
    },
  });
};

export default hook;
