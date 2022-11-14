import {configureStore,ThunkAction,Action} from "@reduxjs/toolkit"
import {countriesReducer} from "./reducers/countries"

export const store = configureStore({
    reducer:{
        countriesReducer,


    }
}
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default store