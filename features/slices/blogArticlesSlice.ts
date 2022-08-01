import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface BlogArticlesState {
    blogArticles: Array<object>,
    mainArticle: object,
    slider: object
}

// Define the initial state using that type
const initialState: BlogArticlesState = {
    blogArticles: [],
    mainArticle: {},
    slider: {}
}

export const blogArticlesSlice = createSlice({
    name: 'blogArticles',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<number>) => {
            state.blogArticles = [...state.blogArticles, action.payload]
        }
    }
})

export const { addComment } = blogArticlesSlice.actions
export default blogArticlesSlice.reducer