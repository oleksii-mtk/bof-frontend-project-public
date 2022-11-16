import {configureStore,ThunkAction,Action} from "@reduxjs/toolkit"
import { stateCountries, stateFavorites } from "../types/country"
import {countriesReducer} from "./reducers/countries"
import { favReducer } from "./reducers/favorites"

const countriesStorePreloaded:stateCountries = JSON.parse(localStorage.getItem("countriesReducer") || "[]")
const favStorePreloaded:stateFavorites = JSON.parse(localStorage.getItem("favReducer") || "[]")
export const store = configureStore({
    reducer:{
        countriesReducer,
        favReducer,
    
    },
    preloadedState:{
     countriesReducer: countriesStorePreloaded,
     favReducer: favStorePreloaded,
    }
  }
)

store.subscribe(() => {
   localStorage.setItem("countriesReducer",JSON.stringify(store.getState().countriesReducer)) 
   localStorage.setItem("favReducer",JSON.stringify(store.getState().favReducer)) 
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