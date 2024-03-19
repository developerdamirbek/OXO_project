import { configureStore, createListenerMiddleware , isAnyOf} from "@reduxjs/toolkit";
import { add, likeItemCount, likeReducer, removeliked } from "./reducers/likeReducer";
import { saveState } from "../lib/storage";
const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
    matcher:isAnyOf(add,removeliked),
    effect:(_,api)=>{
        // api.dispatch(add());
        // api.dispatch(removeliked());
        api.dispatch(likeItemCount())
    }
  })

export const store = configureStore({
    reducer:{
        like:likeReducer,
    },
    middleware:(defaultMiddleware)=> defaultMiddleware().prepend(storageMiddleware.middleware)
})

store.subscribe(()=>{
    saveState('like',store.getState().like )
})
