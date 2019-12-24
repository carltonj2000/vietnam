const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const ExifReader = require("exifreader");
const execSync = require("child_process").execSync;

const ymlDir = "./data";
const imgDir = "./src/images";

const mogExe = "/usr/local/bin/mogrify";
const mogArgs = "-auto-orient";

const processFiles = () => {
  const files = fs.readdirSync(ymlDir);
  const rotatedImages = [];
  files.forEach(file => {
    if (!/.*In.yml$/.test(file)) return;
    const data = fs.readFileSync(path.join(ymlDir, file)).toString();
    const docs = yaml.safeLoad(data);
    const imgRotated = docs
      .filter(doc => !!doc.rotate)
      .map(img => ({ ...img, dir: file.replace("In.yml", "") }));
    rotatedImages.push(...imgRotated);
  });
  rotatedImages.forEach(img => {
    const filePath = path.join(imgDir, img.dir, img.filename);
    const data = fs.readFileSync(filePath);
    const tags = ExifReader.load(data);
    // const exifRotataion = { "1": 0, "8": 90, "3": 180, "6": 270 };
    if (tags.Orientation.value === 1)
      return console.log("skipped", img.filename);
    console.log(img.filename, img.rotate, tags.Orientation.value);
    const cmd = `${mogExe} ${mogArgs} ${filePath}`;
    const result = execSync(cmd);
    console.log(cmd, "\n", result.toString());
  });
};

try {
  if (!fs.existsSync(mogExe))
    return console.log(
      "Error! Could not find",
      mogExe,
      "\nInstall imagicMagick"
    );
  processFiles();
} catch (e) {
  console.log("Failed, Process Files With!", e);
}
