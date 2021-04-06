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
const degit = require('degit');
const PROJECT_TEMPLATE = {
  'angular': 'riazXrazor/wfe-angular-project-template#HEAD'
}

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

const DEFAULT_VERSION = "107.10.4";

const questions = [
  {
    type: "list",
    name: "framework",
    default: function () {
      return "angular";
    },
    message: "Enter project application type",
    choices: ["angular", "react"],
    validate: function (value: any) {
      if (value === "angular") {
        return true;
      }

      if (value === "react") {
        return "Not ready yet, comming soon!!";
      }

      return "Invalid selection";
    },
  },
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
    default: function () {
      return "CEE_27";
    },
    message: "Enter project application id",
    validate: function (value: any) {
      var pass = true;
      if (pass) {
        return true;
      }

      return "Please enter a valid application id";
    },
  },
  {
    type: "input",
    name: "defaultStepId",
    default: function () {
      return "first-step-31090";
    },
    message: "Enter default step (for route '/')",
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
      .then(async ({ version, name, appid, framework, defaultStepId }: any) => {
        const prefix = initials(name.replace(/[0-9]/g, ""), 3).toLowerCase();

        cli.action.start("Initializing");

        const projectdir = join('.', `${name}`);
        const fetchingtemplate = degit(PROJECT_TEMPLATE['angular'], {
          cache: false,
          force: true,
          verbose: false,
        });

        fetchingtemplate.clone(projectdir).then(() => {

        const pkgjson = join(projectdir, `package.json`);
        const assets = join(projectdir, `src`, `assets`);
        const jsonzippath = join(assets, `jsons`);
        const appDirPath = join(projectdir, `src`, `app`);

        const wfeconfigfile = join(projectdir, `wfeconfig.json`);
        const wfeconfigdata = {
          application_name: name,
          application_id: appid,
          project_type: framework,
        };

        
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

        })
        .catch((e: any) => {
          console.error(e)
          shell.echo(
              boxen(`Error: Angular project generation failed.`, {
                padding: 1,
                borderColor: "red",
                align: "center",
              }))
          });
      })
      .catch((e: any) => {
        console.error(e)
      });
  }
}
