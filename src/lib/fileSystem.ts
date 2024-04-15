import fs from "fs/promises";
import path from "path";

type FileSystem = {
  initialize: (directories: string[]) => Promise<void>;
  appendText: (directory: string, filename: string, content: string) => Promise<void>;
};

async function appendText(directory: string, filename: string, content: string) {
  const path = resolvePath(directory, filename);
  await fs.appendFile(path, `${content}\n`, "utf8");
}

function resolvePath(...paths: string[]) {
  return path.resolve(__dirname, ...paths);
}

async function initialize(directories: string[]) {
  try {
    const promises = directories.map((dir) => fs.mkdir(resolvePath(dir)));
    await Promise.all(promises);
  } catch {
    /* empty */
  }
}

export const fileSystem: FileSystem = {
  initialize,
  appendText
};
