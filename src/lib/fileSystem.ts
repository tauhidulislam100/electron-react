import fs from "fs/promises";
import path from "path";

type FileSystem = {
  initialize: (directories: string[]) => Promise<void>;
  appendText: (directory: string, filename: string, content: string) => Promise<void>;
};

function resolvePath(...paths: string[]) {
  return path.resolve(__dirname, ...paths);
}

async function appendText(directory: string, filename: string, content: string) {
  const path = resolvePath(directory, filename);
  await fs.appendFile(path, `${content}\n`, "utf8");
}

async function initialize(directories: string[]) {
  const promises = directories.map((dir) => fs.mkdir(resolvePath(dir)));
  await Promise.allSettled(promises);
}

export const fileSystem: FileSystem = {
  initialize,
  appendText
};
