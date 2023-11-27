import { configureStore } from '@reduxjs/toolkit'
import callsReducer from './entities/calls/callsSlice'

export const store = configureStore({
  reducer: {
    calls: callsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch