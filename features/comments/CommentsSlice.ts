import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogArticleState {
    comments: Array<object>
}

const initialState: BlogArticleState = {
    comments:[],
}

export const BlogArticleSlice = createSlice({
    name: 'BlogArticle',
    initialState,
    reducers: {
        // addComment: (state, action: PayloadAction<Array<object>>){
            
        // }
    },
})

// Action creators are generated for each case reducer function
export const { addComment } = BlogArticleSlice.actions

export default BlogArticleSlice.reducer