import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navigation from "./reducers/navigation";

const reducers = combineReducers({
    "navigation": navigation,
});

const store = configureStore({ reducer: reducers })

export type RootState = ReturnType<typeof store.getState>

export default store;