import { configureStore } from "@reduxjs/toolkit";
import {useSelector} from "react-redux"
import { PostsSlice } from "./posts.slice";
import { jobOffersSlice } from "./joboffer.slice";
import { jobFilterSlice } from "./jobfilter.slice";

export const store = configureStore({
  reducer: {
    [PostsSlice.name]: PostsSlice.reducer,
    [jobOffersSlice.name]: jobOffersSlice.reducer,
    [jobFilterSlice.name]: jobFilterSlice.reducer

}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>