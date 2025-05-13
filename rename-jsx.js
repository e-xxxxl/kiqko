const fs = require("fs");
const path = require("path");

const walk = (dir, callback) => {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

walk("./src", (filePath) => {
  if (filePath.endsWith(".js")) {
    const content = fs.readFileSync(filePath, "utf8");
    if (content.includes("<") && content.includes(">")) {
      const newPath = filePath.replace(/\.js$/, ".jsx");
      fs.renameSync(filePath, newPath);
      console.log(`Renamed: ${filePath} -> ${newPath}`);
    }
  }
});
