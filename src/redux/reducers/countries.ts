import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
const initialState: Country[] = []

export const fetchCountries = createAsyncThunk(
    "fetchCountries",
    async () => {
        const jsonData = await fetch("https://restcountries.com/v3/all?fields=name,capital,currencies,flags")
        return  jsonData.json()

    }
)

const countrySlicer = createSlice({
    name:"countriesSlice",
    initialState,
    reducers:{

    },
    extraReducers: (build) => {
        build.addCase(fetchCountries.fulfilled,(state,action)=>{
            return action.payload
        })

    }
})

export const countriesReducer = countrySlicer.reducer