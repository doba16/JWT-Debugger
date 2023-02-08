import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationServer } from "../../../common/types/authorization-server";

export interface AuthorizationServersSliceType {
    servers: AuthorizationServer[],
}

const initialState: AuthorizationServersSliceType = {
    servers: []
}

const authorizationServersSlice = createSlice({
    initialState,
    name: "authorizationServersSlice",
    reducers: {
        setServer: (state, changedServer: PayloadAction<AuthorizationServer>) => {
            state.servers = state.servers.map((server: AuthorizationServer) => 
                    changedServer.payload.id === server.id ? changedServer.payload : server)
        },
        addServer: (state, action: PayloadAction<{serverToAdd: AuthorizationServer}>) => {
            state.servers = [...state.servers, action.payload.serverToAdd]
        }
    }
})

export const {setServer, addServer} = authorizationServersSlice.actions
export default authorizationServersSlice.reducer