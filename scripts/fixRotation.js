const fs = require("fs");
const path = require("path");

const processFiles = () => {
  const files = fs.readdirSync(baseDir);
};

try {
  processFiles();
} catch (e) {
  console.log("Failed, Process Files With!", e);
}
