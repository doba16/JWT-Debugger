// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { ClientConfiguration } from "../../common/types/client-configuration";

contextBridge.exposeInMainWorld("authApi", {
    startAuth: (client: ClientConfiguration) => {ipcRenderer.send("startAuth", client)}
})
