import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
const shell = require("shelljs");
const jsonfile = require("jsonfile");

import { downloadAndUnzip } from "../utils";

export default class Init extends Command {
  static description = "Initializes and setup a WFE project.";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [];

  async run() {
    // const { args, flags } = this.parse(Init);

    if (!shell.which("ng")) {
      shell.echo("Sorry, this cli requires `ng` angular cli");
      shell.echo("plz install using , `npm install -g @angular/cli`");
      shell.exit(1);
    }

    const name = await cli.prompt("Enter project name");

    const appid = await cli.prompt("Enter project application id");

    const apptype = await cli.prompt("Enter project application type");

    if (shell.exec(`ng new ${name} --skipInstall=true`).code !== 0) {
      shell.echo("Error: Angular project generation failed.");
      shell.exit(1);
    }
    const projectdir = `./${name}`;
    const pkgjson = `${projectdir}/package.json`;
    const assets = `${projectdir}/src/assets`;
    const zippath = `${assets}/${appid}.zip`;
    const jsonzippath = `${assets}/jsons.zip`;

    const wfeconfigfile = `${projectdir}/wfeconfig.json`;
    const wfeconfigdata = {
      application_name: name,
      application_id: appid,
      device_type: apptype,
    };

    // wfe portal config url
    const spliterUrl = `https://sfv2-wfe-jsonsplitter-dev04.inadev.net:9098/v1/wfe_application?application_id=${appid}&device_type=${apptype}`;
    // jsons config url
    const jsonsfile = `https://srv-file5.gofile.io/download/WkUARu/jsons.zip`;

    await jsonfile.writeFile(wfeconfigfile, wfeconfigdata);

    const extradependencies = {
      "@agm/core": "^1.1.0",
      "@angular/cdk": "~8.2.3",
      "@angular/material": "~8.2.3",
      "@angular/material-moment-adapter": "^9.2.0",
      "@datorama/akita": "^4.10.9",
      "@datorama/akita-ngdevtools": "^3.0.2",
      "@kolkov/angular-editor": "^1.0.2",
      "@ng/cee-core": "git+ssh://git@www.inadev.net:7999/esa/ng-cee-core.git",
      hammerjs: "^2.0.8",
      jquery: "^3.4.1",
      "js-sha256": "^0.9.0",
      moment: "^2.24.0",
      "ngx-store": "^2.1.0",
      "ngx-toggle-switch": "^2.0.5",
      "ts-md5": "^1.2.7",
      "@ng-bootstrap/ng-bootstrap": "^6.1.0",
      "@ng-idle/core": "^8.0.0-beta.4",
      "@ng-idle/keepalive": "^8.0.0-beta.4",
    };

    const packagejson = jsonfile.readFileSync(pkgjson);

    packagejson.dependencies = {
      ...packagejson.dependencies,
      ...extradependencies,
    };

    jsonfile.writeFileSync(pkgjson, packagejson, { spaces: 2, EOL: "\r\n" });

    cli.action.start("fetching json for application");
    // download wfe configs
    downloadAndUnzip(spliterUrl, zippath, `${assets}/config`, () => {
      downloadAndUnzip(jsonsfile, jsonzippath, `${assets}/`, () => {
        cli.action.stop();

        console.log("Init complete!!");
      });
    });
  }
}
