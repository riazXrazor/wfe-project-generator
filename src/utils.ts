const http = require("https");
const fs = require("fs");
const unzipper = require("unzipper");

const downloadAndUnzip = (
  url: string,
  dDest: string,
  uzippath: string,
  cb?: any
) => {
  const file = fs.createWriteStream(dDest);
  http.get(url, function (response: any) {
    response.pipe(file);
    file.on("finish", function () {
      file.close();
      fs.createReadStream(dDest)
        .pipe(unzipper.Extract({ path: uzippath }))
        .on("end", cb);
    });
  });
};

export { downloadAndUnzip };
