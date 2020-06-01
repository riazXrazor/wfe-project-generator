import { join } from "path";
import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
const shell = require("shelljs");
const fs = require("fs");
const jsonfile = require("jsonfile");
const boxen = require("boxen");

import { downloadAndUnzip } from "../utils";

export default class Updateconfig extends Command {
  static description = "Update wfe config json of the application.";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [];

  async run() {
    // const { args, flags } = this.parse(Updateconfig);
    const wfeconfigfile = `./wfeconfig.json`;
    if (!fs.existsSync(wfeconfigfile)) {
      shell.echo(
        boxen(
          `WFE project not initialized.
use "wfe init" to initialize
      `,
          { padding: 1, borderColor: "red", align: "center" }
        )
      );
      shell.exit(1);
    }
    cli.action.start("Updating");
    const wfeconfigdata = jsonfile.readFileSync(wfeconfigfile);

    const appid = wfeconfigdata.application_id;

    const apptype = wfeconfigdata.device_type;

    const projectdir = join(".");
    const assets = join(projectdir, `src`, `assets`);

    // wfe portal config url
    const spliterUrl = `https://sfv2-wfe-jsonsplitter-dev04.inadev.net:9098/v1/wfe_application?application_id=${appid}&device_type=${apptype}`;

    // download wfe configs
    downloadAndUnzip(spliterUrl, `${appid}.zip`, join(assets, "config"), () => {
      cli.action.stop();
      shell.echo(
        boxen(`Update completed successfully!!`, {
          padding: 1,
          borderColor: "green",
          align: "center",
        })
      );
    });
  }
}
