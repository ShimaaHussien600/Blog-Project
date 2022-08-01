import { createSelector } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

export const selectBlogArticles = (state: RootState) => state.blogArticle     

export const blogArticlesSelector = createSelector(
    selectBlogArticles,
  state => state
)