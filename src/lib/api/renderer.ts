import { contextBridge } from "electron";
import type { ApiBridge } from ".";
import { createRenderer } from "../ipc";

const renderer = createRenderer<ApiBridge>();

export const api: ApiBridge = {
  writeText: (value) => {
    renderer.send("writeText", value);
  }
};

contextBridge.exposeInMainWorld("api", api);

declare global {
  interface Window {
    api: ApiBridge;
  }
}
