import {configureStore} from "@reduxjs/toolkit"
import authorizationServersSlice from "./authorization-servers-slice"
import navigationSlice from "./navigation-slice"

const store = configureStore({
    reducer:  {
        servers: authorizationServersSlice,
        navigation: navigationSlice
    }
})

export default store
