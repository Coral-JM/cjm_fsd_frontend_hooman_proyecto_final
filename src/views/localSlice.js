import { createSlice } from "@reduxjs/toolkit";  

export const localSlice = createSlice({
    name: 'local',
    initialState: {
        choosenLocal : {}
    },
    reducers: {
        addChoosenLocal: (state, action) => {
            console.log("local elegido ", action.payload);
            return {
                ...state,
                ...action.payload
            }
        },
    }
})

export const { addChoosenLocal } = localSlice.actions;
export const localData = (state) => state.local;
export default localSlice.reducer;