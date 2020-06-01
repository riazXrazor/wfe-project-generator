import { unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const http = require("https");
const fs = require("fs");
const unzipper = require("unzipper");

tmpdir();

const downloadAndUnzip = (
  url: string,
  zipname: string,
  uzippath: string,
  cb?: any
) => {
  try {
    const dDest = join(tmpdir(), zipname);
    // console.log({ dDest, uzippath });
    const file = fs.createWriteStream(dDest);
    http
      .get(url, function (response: any) {
        response.pipe(file);
        file.on("finish", function () {
          file.close();
          fs.createReadStream(dDest)
            .pipe(unzipper.Extract({ path: uzippath }))
            .on("finish", () => {
              cb();
            })
            .on("error", function () {
              unlinkSync(dDest);
              cb(`Error: Please check the application id/type or the network.`);
            });
        });
      })
      .on("error", function () {
        cb(`Error: Please check the application id/type or the network..`);
      });
  } catch {
    cb(`Error: Please check the application id/type or the network...`);
  }
};

export { downloadAndUnzip };
