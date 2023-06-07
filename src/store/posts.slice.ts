import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";
import { RootState } from ".";


export const fetchPosts = createAsyncThunk<any, void, {
    rejectValue: {
        msg: string
    }
}>("/posts/fetchPosts", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("post").select("*,user(name)")
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't load posts!" })
    }
})

export const fetchPostById = createAsyncThunk<any, { postId: string }, {
    rejectValue: {
        msg: string
    }
}>("/posts/fetchPosts", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("post").select("*,user(name)").eq("id", payload.postId)
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't load posts!" })
    }
})

export const updatePost = createAsyncThunk<any, { postId: string, content: string }, {
    rejectValue: {
        msg: string
    }
}>("/posts/updatePost", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("post").update({
            content: payload.content
        }).eq("id", payload.postId).select("*,user(name)").single();
        const data = response.data;
        console.log(data, payload.postId)
        return fulfillWithValue(data);
    } catch (e) {
        console.log(e)
        return rejectWithValue({ msg: "couldn't able to update post!" })
    }
})

export const deletePost = createAsyncThunk<any, {
    postId: string
}, {
    rejectValue: {
        msg: string
    }
}>("/posts/deletePost", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("post")
            .delete()
            .eq("id", payload.postId)
            .select("id");
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't delete posts!" })
    }
})

export const CommentPosts = createAsyncThunk<any, void, {
    rejectValue: {
        msg: string
    }
}>("/posts/fetchPosts", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await SupaClient.from("post").select("*,user(names)")
        const data = response.data;

        return fulfillWithValue(data);
    } catch (e) {
        return rejectWithValue({ msg: "couldn't load posts!" })
    }
})


type Post = Database["public"]["Tables"]["post"]["Row"]

const postsEntityAdapter = createEntityAdapter<Post>({
    selectId: (post) => post.id,
})

interface StateProps {
    isPending: boolean,
    isUpdating: boolean,
    error: null | undefined | string
}

export const PostsSlice = createSlice({
    name: "posts",
    initialState: postsEntityAdapter.getInitialState<StateProps>({
        isPending: false,
        isUpdating: false,
        error: undefined
    }),
    reducers: {},
    extraReducers({ addCase }) {

        //fetch all post
        addCase(fetchPosts.pending, (state, action) => {
            state.isPending = true
            state.error = undefined
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isPending = false;
                postsEntityAdapter.addMany(state, action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isPending = false;
                state.error = action.payload?.msg
            })

        //update post
        addCase(updatePost.pending, (state, action) => {
            state.isUpdating = true;
            state.error = undefined
        })
        addCase(updatePost.fulfilled, (state, action) => {
            postsEntityAdapter.updateOne(state, {
                changes: {
                    content: action.payload.content
                },
                id: action.payload.id
            })
            state.isPending = false;
        })

        addCase(updatePost.rejected, (state, action) => {
            state.isPending = false
            state.error = action.payload?.msg
        })

        //Delete Post
        addCase(deletePost.fulfilled, (state, action) => {
            postsEntityAdapter.removeOne(state, action.payload.id)
        })
    },
});

export const postsSelector = postsEntityAdapter.getSelectors<RootState>((state) => state.posts)