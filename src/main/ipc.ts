import { ipcMain, IpcMainEvent } from "electron";
import { ClientConfiguration } from "../../src/common/types/client-configuration";
import startAuth from "./o-auth2-login";

function registerIpc() {
    ipcMain.on("startAuth", (_e: IpcMainEvent, client: ClientConfiguration) => {
        console.log("Starting Auth...", client)
        startAuth(client)
    })
}

export default registerIpc;