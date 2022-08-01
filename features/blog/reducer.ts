import { createReducer } from '@reduxjs/toolkit';
import { getBlogArticlesdata } from './actions';

export type BlogArticlesState = {
    data: Array<object>;
    pending: boolean;
    error: boolean;
};

const initialState: BlogArticlesState = {
    data: [],
    pending: false,
    error: false,
};

export const blogArticleReducer = createReducer(initialState, builder => {
    
    // Since this is an API call we have 3 possible outcomes: pending, fulfilled and rejected. We have made allocations for all 3 outcomes. 
    // Doing this is good practice as we can tap into the status of the API call and give our users an idea of what's happening in the background.

    builder
        .addCase(getBlogArticlesdata.pending, state => {
            state.pending = true;
        })
        .addCase(getBlogArticlesdata.fulfilled, (state, { payload }) => {
            state.pending = false;
            state.data = payload;
        })
        .addCase(getBlogArticlesdata.rejected, state => {
            state.pending = false;
            state.error = true;
        });
});

export default blogArticleReducer;