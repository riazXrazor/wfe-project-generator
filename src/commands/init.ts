import { join, normalize } from "path";
import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { writeFileSync, existsSync } from "fs";
const shell = require("shelljs");
const jsonfile = require("jsonfile");
const initials = require("initials");
const boxen = require("boxen");
const semver = require("semver");
const inquirer = require("inquirer");
const rimraf = require("rimraf");

import { downloadAndUnzip } from "../utils";
import { api_config, app_config } from "../jsons";
import {
  appmodulets,
  appcomponenthtml,
  approutingmodulets,
  wferendercomponentts,
  wferendercomponenthtml,
  appcomponentts,
} from "../textContents";

const DEFAULT_VERSION = "66.0.0";

const questions = [
  {
    type: "input",
    name: "version",
    message: "Enter `ng-cee-core` version to use (eg. 66.0.0)",
    default: function () {
      return DEFAULT_VERSION;
    },
    validate: function (value: any) {
      if (semver.valid(value)) {
        return true;
      }

      return "Please enter a valid x.x.x version";
    },
  },
  {
    type: "input",
    name: "name",
    message: "Enter project name",
    default: function () {
      return "test-app";
    },
    validate: function (value: any) {
      if (!existsSync(`./${value}`)) {
        return true;
      }

      return "Project with this name already exists";
    },
  },
  {
    type: "input",
    name: "appid",
    message: "Enter project application id",
    validate: function (value: any) {
      var pass = value.match(/[0-9]/i);
      if (pass) {
        return true;
      }

      return "Please enter a valid application id";
    },
  },
  {
    type: "list",
    name: "apptype",
    message: "Enter project application type",
    choices: ["Web", "Mobile"],
  },
  {
    type: "input",
    name: "defaultStepId",
    message: "Enter default step id (for route '/')",
    validate: function (value: any) {
      var pass = value.match(/[0-9]/i);
      if (pass) {
        return true;
      }

      return "Please enter a valid step id";
    },
  },
];

shell.config.silent = true;
export default class Init extends Command {
  static description = "Initializes and setup a WFE project.";

  static flags: any = {
    help: flags.help({ char: "h" }),
  };

  static args = [];

  async run() {
    // const { args, flags } = this.parse(Init);

    if (!shell.which("ng")) {
      shell.echo(
        boxen(
          `Sorry, this cli requires "ng" angular cli
plz install using , "npm install -g @angular/cli"
      `,
          { padding: 1, borderColor: "red", align: "center" }
        )
      );
      shell.exit(1);
    }

    inquirer
      .prompt(questions)
      .then(async ({ version, name, appid, apptype, defaultStepId }: any) => {
        const prefix = initials(name.replace(/[0-9]/g, ""), 3).toLowerCase();

        cli.action.start("Initializing");

        if (
          shell.exec(
            `ng new ${name} --skipInstall=true --routing=true --prefix=${prefix} --style=scss`
          ).code !== 0
        ) {
          cli.action.start("An Error occured cleaning up files");
          rimraf(join(".", `${name}`), (e: any) => {
            shell.echo(
              boxen(`Error: Angular project generation failed.`, {
                padding: 1,
                borderColor: "red",
                align: "center",
              })
            );
            shell.exit(1);
          });
        }
        const projectdir = join(".", `${name}`);
        const pkgjson = join(projectdir, `package.json`);
        const assets = join(projectdir, `src`, `assets`);
        const jsonzippath = join(assets, `jsons`);
        const appDirPath = join(projectdir, `src`, `app`);

        const wfeconfigfile = join(projectdir, `wfeconfig.json`);
        const wfeconfigdata = {
          application_name: name,
          application_id: appid,
          device_type: apptype,
        };

        // wfe portal config url
        const spliterUrl = `https://sfv2-wfe-jsonsplitter-dev04.inadev.net:9098/v1/wfe_application?application_id=${appid}&device_type=${apptype}`;

        await jsonfile.writeFile(wfeconfigfile, wfeconfigdata);
        const packagejson = jsonfile.readFileSync(pkgjson);
        packagejson.dependencies = {
          "@agm/core": "^1.1.0",
          "@angular/animations": "~8.2.14",
          "@angular/cdk": "~8.2.3",
          "@angular/common": "~8.2.14",
          "@angular/compiler": "~8.2.14",
          "@angular/core": "~8.2.14",
          "@angular/forms": "~8.2.14",
          "@angular/material": "~8.2.3",
          "@angular/material-moment-adapter": "^9.2.0",
          "@angular/platform-browser": "~8.2.14",
          "@angular/platform-browser-dynamic": "~8.2.14",
          "@angular/router": "~8.2.14",
          "@datorama/akita": "^4.10.9",
          "@datorama/akita-ngdevtools": "^3.0.2",
          "@kolkov/angular-editor": "^1.0.2",
          "@ng-bootstrap/ng-bootstrap": "~5.2.2",
          "@ng-idle/core": "^8.0.0-beta.4",
          "@ng-idle/keepalive": "^8.0.0-beta.4",
          "@ng/cee-core": `git+http://git@www.inadev.net/scm/scm/esa/ng-cee-core.git#${version}`,
          hammerjs: "^2.0.8",
          jquery: "^3.4.1",
          "js-sha256": "^0.9.0",
          moment: "^2.24.0",
          "ngx-store": "^2.1.0",
          "ngx-toggle-switch": "^2.0.5",
          rxjs: "~6.4.0",
          "ts-md5": "^1.2.7",
          tslib: "^1.10.0",
          "zone.js": "~0.9.1",
        };

        packagejson.devDependencies = {
          "@angular-devkit/build-angular": "~0.803.20",
          "@angular/cli": "~8.3.20",
          "@angular/compiler-cli": "~8.2.14",
          "@angular/language-service": "~8.2.14",
          "@types/node": "~8.9.4",
          "@types/jasmine": "~3.3.8",
          "@types/jasminewd2": "~2.0.3",
          codelyzer: "^5.0.0",
          "jasmine-core": "~3.4.0",
          "jasmine-spec-reporter": "~4.2.1",
          karma: "~4.1.0",
          "karma-chrome-launcher": "~2.2.0",
          "karma-coverage-istanbul-reporter": "~2.0.1",
          "karma-jasmine": "~2.0.1",
          "karma-jasmine-html-reporter": "^1.4.0",
          protractor: "~5.4.0",
          "ts-node": "~7.0.0",
          tslint: "~5.15.0",
          typescript: "~3.5.3",
        };

        jsonfile.writeFileSync(pkgjson, packagejson, {
          spaces: 2,
          EOL: "\r\n",
        });

        shell.mkdir(jsonzippath);

        jsonfile.writeFileSync(
          join(jsonzippath, `api_config.json`),
          api_config,
          {
            spaces: 2,
            EOL: "\r\n",
          }
        );
        jsonfile.writeFileSync(
          join(jsonzippath, `app_config.json`),
          app_config,
          {
            spaces: 2,
            EOL: "\r\n",
          }
        );

        // download wfe configs
        downloadAndUnzip(
          spliterUrl,
          `${appid}.zip`,
          join(assets, `config`),
          (err: any) => {
            if (err) {
              cli.action.start("An Error occured cleaning up files");
              rimraf(`${projectdir}`, (e: any) => {
                shell.echo(
                  boxen(err, {
                    padding: 1,
                    borderColor: "red",
                    align: "center",
                  })
                );
                shell.exit(1);
              });

              return;
            }

            writeFileSync(join(appDirPath, `app.module.ts`), appmodulets);
            writeFileSync(
              join(appDirPath, `app.component.html`),
              appcomponenthtml
            );

            writeFileSync(
              join(appDirPath, `app.component.ts`),
              appcomponentts
                .replace(/app-/g, `${prefix}-`)
                .replace("DEFAULT_STEP_ID", defaultStepId)
            );
            writeFileSync(
              join(appDirPath, `app-routing.module.ts`),
              approutingmodulets
            );
            const wfets = normalize(
              `./src/app/wfe-render/wfe-render.component.ts`
            );
            const wfehtml = normalize(
              `./src/app/wfe-render/wfe-render.component.html`
            );
            shell.cd(projectdir);
            shell.exec(`ng g c wfe-render --skipTests=true`);
            writeFileSync(
              wfets,
              wferendercomponentts.replace(/app-/g, `${prefix}-`)
            );
            writeFileSync(wfehtml, wferendercomponenthtml);
            cli.action.stop();

            shell.echo(
              boxen(
                `Initialization completed successfully!!
cd ${name}
npm install
        `,
                {
                  padding: 1,
                  borderColor: "green",
                  align: "center",
                }
              )
            );
          }
        );
      });
  }
}
