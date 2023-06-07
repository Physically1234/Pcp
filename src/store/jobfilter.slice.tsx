import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";
import { RootState } from ".";


type jobFilter = Database["public"]["Tables"]["jobFilter"]["Row"]

const jobFilterEntityAdapter = createEntityAdapter<jobFilter>({
    selectId: (jobFilter) => jobFilter.id,
})

interface StateProps {
    isPending: boolean,
    isUpdating: boolean,
    error: null | undefined | string
}
export const fetchjobs = createAsyncThunk<any, void, {
    rejectValue: {
        msg: string
    }
}>("/jobFilters/fetchjobs", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("jobFilter").select("*,user(name)")
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't load jobs!" })
    }
})

export const updatejobFilter = createAsyncThunk<any, { jobFilterId: string, jobRoles: string, skills: string, place: string, timings: string, transportation: string, salary: string }, {
    rejectValue: {
        msg: string
    }
}>("/jobFilter/updatejobFilter", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("jobFilter").update({
            jobRoles: payload.jobRoles
        }).eq("id", payload.jobFilterId).select("*,user(name)").single();
        const data = response.data;
        console.log(data, payload.jobFilterId)
        return fulfillWithValue(data);
    } catch (e) {
        console.log(e)
        return rejectWithValue({ msg: "couldn't able to update jobFilter!" })
    }
})

export const jobFilterSlice = createSlice({
    name: "jobFilter",
    initialState: jobFilterEntityAdapter.getInitialState<StateProps>({
        isPending: false,
        isUpdating: false,
        error: undefined
    }),
    reducers: {},
    extraReducers({ addCase }) {

        //fetch all jobFilter
        addCase(fetchjobs.pending, (state, action) => {
            state.isPending = true
            state.error = undefined
        })
            .addCase(fetchjobs.fulfilled, (state, action) => {
                state.isPending = false;
                jobFilterEntityAdapter.addMany(state, action.payload)
            })
            .addCase(fetchjobs.rejected, (state, action) => {
                state.isPending = false;
                state.error = action.payload?.msg
            })

        addCase(updatejobFilter.pending, (state, action) => {
            state.isUpdating = true;
            state.error = undefined
        });
        addCase(updatejobFilter.fulfilled, (state, action,) => {
            jobFilterEntityAdapter.updateOne(state, {
                changes: {
                    jobRoles: action.payload.jobRoles,
                    skills: action.payload.skills,
                    transportation: action.payload.transportation,
                    place: action.payload.place,
                    timings: action.payload.timings,
                    salary: action.payload.salary
                },
                id: action.payload.id
            })
            state.isPending = false;
        });
    }});
    export const jobOffersSelector = jobFilterEntityAdapter.getSelectors<RootState>((state) => state.jobFilter)
