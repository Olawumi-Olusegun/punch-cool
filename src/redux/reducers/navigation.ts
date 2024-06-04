import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface navigationStateProps {
    isMobile: boolean;
}

const initialState: navigationStateProps = {
    isMobile: false,
}

const navSlice = createSlice({
    name: "navigation",
    initialState: initialState,
    reducers: {
        toggleNav: (state) => {
            state.isMobile = !state.isMobile;
        },
        openNavMenu: (state) => {
            state.isMobile = true 
        },
        closeMenu: (state) => {
            state.isMobile = false;
        }

    }
})



export const { toggleNav, openNavMenu, closeMenu } = navSlice.actions;


export const toggleNavbar = createSelector((state: RootState) => state, (state) => state.navigation);


export default navSlice.reducer;