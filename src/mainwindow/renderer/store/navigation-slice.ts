import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type SelectedResourceType = "server" | "client" | undefined

interface NavigationState {
    selectedResourceType: SelectedResourceType,
    selectedResource?: string
}

const initialState: NavigationState = {
    selectedResourceType: undefined,
    selectedResource: undefined
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState: initialState,
    reducers: {
        navigateToServer: (state, payload: PayloadAction<{serverId: string}>) => {
            state.selectedResourceType = "server"
            state.selectedResource = payload.payload.serverId
        }
    }
})

export const {navigateToServer} = navigationSlice.actions
export default navigationSlice.reducer