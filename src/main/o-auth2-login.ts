import { BrowserWindow } from "electron"
import { ClientConfiguration } from "../../src/common/types/client-configuration"

import axios from "axios"

function startAuth(client: ClientConfiguration) {
    const window = new BrowserWindow({
        width: 500,
        height: 400
    });

    const authUrl = new URL("http://localhost:8080/realms/master/protocol/openid-connect/auth")
    authUrl.searchParams.set("client_id", client.clientId)
    authUrl.searchParams.set("response_type", "code")
    authUrl.searchParams.set("redirect_uri", "http://apps.foo.local/success?foo=bar")



    const done = (e: Electron.Event, url: string) => {
        if (url.startsWith("http://apps.foo.local/success?foo=bar")) {
            e.preventDefault()
            window.close()

            console.log("Link Back:", url)

            const redirect = new URL(url)
            console.log(redirect)

            console.log("Code:", redirect.searchParams.get("code"))

            const authUrl = new URL("http://localhost:8080/realms/master/protocol/openid-connect/token")
            

            const params = new URLSearchParams()
            params.set("client_id", client.clientId)
            params.set("grant_type", "authorization_code")
            params.set("redirect_uri", "http://apps.foo.local/success?foo=bar")
            params.set("code", redirect.searchParams.get("code"))

            axios.post(authUrl.toString(), params, {
                auth: {
                    username: client.clientId,
                    password: client.clientSecret
                }
            }).then(console.log)
        }
    }

    window.webContents.on("will-navigate", done)
    window.webContents.on("will-redirect", done)

    window.loadURL(authUrl.toString())
}

export default startAuth