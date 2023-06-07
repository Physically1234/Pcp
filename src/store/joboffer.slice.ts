import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";
import { RootState } from ".";


export const fetchjobOffer = createAsyncThunk<any, void, {
    rejectValue: {
        msg: string
    }
}>("/jobOffers/fetchjobOffer", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("jobOffer").select("*,user(name)")
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't load jobOffers!" })
    }
})

export const fetchjobOfferById = createAsyncThunk<any, { jobOfferId: string }, {
    rejectValue: {
        msg: string
    }
}>("/jobOffers/fetchjobOffer", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("jobOffer").select("*,user(name)").eq("id", payload.jobOfferId)
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't load jobOffers!" })
    }
})

export const updatejobOffer = createAsyncThunk<any, { jobOfferId: string, profession: string, skills: string, location: string, time: string, transportation: string, salary: number, description: string }, {
    rejectValue: {
        msg: string
    }
}>("/jobOffers/updatejobOffer", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("jobOffer").update({
            profession: payload.profession
        }).eq("id", payload.jobOfferId).select("*,user(name)").single();
        const data = response.data;
        console.log(data, payload.jobOfferId)
        return fulfillWithValue(data);
    } catch (e) {
        console.log(e)
        return rejectWithValue({ msg: "couldn't able to update jobOffer!" })
    }
})

export const deletejobOffer = createAsyncThunk<any, {
    jobOfferId: string
}, {
    rejectValue: {
        msg: string
    }
}>("/jobOffers/deletejobOffer", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("jobOffer")
            .delete()
            .eq("id", payload.jobOfferId)
            .select("id");
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't delete JobOffers!" })
    }
})


type jobOffer = Database["public"]["Tables"]["jobOffer"]["Row"]

const jobOffersEntityAdapter = createEntityAdapter<jobOffer>({
    selectId: (jobOffer) => jobOffer.id,
})

interface StateProps {
    isPending: boolean,
    isUpdating: boolean,
    error: null | undefined | string
}

export const jobOffersSlice = createSlice({
    name: "jobOffers",
    initialState: jobOffersEntityAdapter.getInitialState<StateProps>({
        isPending: false,
        isUpdating: false,
        error: undefined
    }),
    reducers: {},
    extraReducers({ addCase }) {

        //fetch all jobOffer
        addCase(fetchjobOffer.pending, (state, action) => {
            state.isPending = true
            state.error = undefined
        })
            .addCase(fetchjobOffer.fulfilled, (state, action) => {
                state.isPending = false;
                jobOffersEntityAdapter.addMany(state, action.payload)
            })
            .addCase(fetchjobOffer.rejected, (state, action) => {
                state.isPending = false;
                state.error = action.payload?.msg
            })

        //update jobOffer
        addCase(updatejobOffer.pending, (state, action) => {
            state.isUpdating = true;
            state.error = undefined
        })
        addCase(updatejobOffer.fulfilled, (state, action,) => {
            jobOffersEntityAdapter.updateOne(state, {
                changes: {
                    profession: action.payload.profession,
                    skills: action.payload.skills,
                    transportation: action.payload.transportation,
                    location: action.payload.location,
                    time: action.payload.time,
                    salary: action.payload.salary
                },
                id: action.payload.id
            })
            state.isPending = false;
        })

        addCase(updatejobOffer.rejected, (state, action) => {
            state.isPending = false
            state.error = action.payload?.msg
        })

        //Delete jobOffer
        addCase(deletejobOffer.fulfilled, (state, action) => {
            jobOffersEntityAdapter.removeOne(state, action.payload.id)
        })
    },
});

export const jobOffersSelector = jobOffersEntityAdapter.getSelectors<RootState>((state) => state.jobOffers)