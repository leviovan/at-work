import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'



export const store = configureStore({
  reducer: {
    users: userSlice,
  },

  
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch