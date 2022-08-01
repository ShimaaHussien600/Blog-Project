import { Action, configureStore, ThunkAction, } from '@reduxjs/toolkit'
import blogArticleReducer from '../features/blog/reducer';

export const store = configureStore({
    reducer: {
        blogArticle: blogArticleReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

// <------------ this below code if we use wrapper -------------->


// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import blogArticles from '../features/slices/blogArticlesSlice'

// const combinedReducer = combineReducers({
//     blogArticles,
// });

// const masterReducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
            
//             blogArticles: {
//                 blogArticles: [...action.payload.blogArticles.blogArticles]
//             }
//         }
//         return nextState;
//     } else {
//     return combinedReducer(state, action)
//   }
// }

// export const makeStore = () =>
//   configureStore({
//     reducer: masterReducer,
//   });

// export const wrapper = createWrapper(makeStore, { debug: true });