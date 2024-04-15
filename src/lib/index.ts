/* eslint-disable @typescript-eslint/no-explicit-any */
import { IpcMainEvent, ipcMain, ipcRenderer } from "electron";

type ApiChannel<T> = keyof T;

type IpcMain<T> = {
  on: (channel: ApiChannel<T>, listener: (event: IpcMainEvent, ...args: any) => void) => void;
};

export function createMain<T>(): IpcMain<T> {
  return {
    on: <T>(channel: ApiChannel<T>, listener: (event: IpcMainEvent, ...args: any) => void) =>
      ipcMain.on(channel as string, listener)
  };
}

type IpcRenderer<T> = {
  send: (channel: ApiChannel<T>, ...args: any) => void;
};

export function createRenderer<T>(): IpcRenderer<T> {
  return {
    send: <T>(channel: ApiChannel<T>, ...args: any) => {
      ipcRenderer.send(channel as string, args);
    }
  };
}
