import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
const initialState: Country[] = []

export const fetchCountries = createAsyncThunk(
    "fetchCountries",
    async () => {
        const jsonData = await fetch("https://restcountries.com/v3/all?fields=name,capital,currencies,flags")
        return  jsonData.json()

    }
)

export const fetchCountry = createAsyncThunk(
    "fetchCountry",
    async (name:string) => {
        const jsonData = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        return  jsonData.json()

    }
)

const countrySlicer = createSlice({
    name:"countriesSlice",
    initialState,
    reducers:{
        search: (state, action : PayloadAction<string>) => {
            let input = action.payload
        }

    },
    extraReducers: (build) => {
        build.addCase(fetchCountries.fulfilled,(state,action)=>{
            return action.payload
        })

        build.addCase(fetchCountry.fulfilled,(state,action)=>{
            return action.payload
        })

    }


})

export const countriesReducer = countrySlicer.reducer
export const {search} = countrySlicer.actions