import {configureStore,ThunkAction,Action} from "@reduxjs/toolkit"
import { stateCountries } from "../types/country"
import {countriesReducer} from "./reducers/countries"

const countriesStorePreloaded:stateCountries = JSON.parse(localStorage.getItem("countriesReducer") || "[]")
export const store = configureStore({
    reducer:{
        countriesReducer,
    
    },
    preloadedState:{
      countriesReducer: countriesStorePreloaded
    }
  }
)

store.subscribe(() => {
  localStorage.setItem("countriesReducer",JSON.stringify(store.getState().countriesReducer))
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