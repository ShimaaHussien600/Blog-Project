import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBlogArticlesdata = createAsyncThunk('blog/articlesData', async () => {
    // here fetching the articles data from the api using axios or fetch 
    //   const response = await axios.get('https://test/');
    //   const res = await fetch(`https://...`)
    //   const data = await res.json()

});