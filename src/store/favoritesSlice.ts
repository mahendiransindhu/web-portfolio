import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    likedProjects: [] as string[],
  },
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const projectId = action.payload;
      if (state.likedProjects.includes(projectId)) {
        state.likedProjects = state.likedProjects.filter(id => id !== projectId);
      } else {
        state.likedProjects.push(projectId);
      }
    },
  },
});

export const { toggleLike } = favoritesSlice.actions;
export default favoritesSlice.reducer;
