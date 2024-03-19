import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";

const initialState = loadState("like") || {
    likedItems: [],
    likeItemCount:0
}

const like = createSlice({
    name: "like",
    initialState,
    reducers: {
        add: (state, action) => {
            const liked = state.likedItems.find((item) => item.id === action.payload.id);
            if(!liked){
                return {...state, likedItems: [...state.likedItems, {...action.payload}]}
            }
            return state;
        },
        removeliked: (state, action) => {
            return {...state, likedItems: state.likedItems.filter((item) => item.id !== action.payload.id)}
        },
        likeItemCount: (state) => {
            return {...state, likeItemCount: state.likedItems.length }
        }
    }
})

export const likeReducer = like.reducer;

export const {add, removeliked, likeItemCount} = like.actions;