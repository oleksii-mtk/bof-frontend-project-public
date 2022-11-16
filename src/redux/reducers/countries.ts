import { PlaylistAddOutlined } from "@mui/icons-material";
import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Country, stateCountries } from "../../types/country";


const initialState: stateCountries = {
    countries:[],
    filtered :[],
    loading : false,
    singleCountry :[],
    sortName: "asc"
}

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
           // state.filtered = state.countries.filter((item)=>{item.name.official.includes(action.payload)})
           state.filtered = state.countries.filter( (item) => 
             item.name.official.includes(input))
        },

        sortname: (state) => {

            if (state.sortName === "asc") {

                state.countries = state.countries.sort((a,b) =>  (a.name.official > b.name.official) ? 1 : -1)
                state.sortName = "desc"

            } else {
                state.countries = state.countries.sort((a,b) =>  (a.name.official > b.name.official) ? -1 : 1)
                state.sortName = "asc"

            }

        },

    },
    extraReducers: (build) => {
        build.addCase(fetchCountries.fulfilled,(state,action)=>{
            state.countries = action.payload
            state.loading = false;
        })

        build.addCase(fetchCountry.fulfilled,(state,action)=>{
            state.singleCountry = action.payload
            state.loading = false;
        })

    }


})

export const countriesReducer = countrySlicer.reducer
export const {search,sortname} = countrySlicer.actions