import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country, stateFavorites } from "../../types/country";

const initialState: stateFavorites = {
  countries: [],
};

const favSlicer = createSlice({
  name: "favSlice",
  initialState,
  reducers: {
    addRemove: (state, action: PayloadAction<Country>) => {
      
      const isFound = state.countries.some(element => {

          return (element.name.official === action.payload.name.official)? true : false;
      })

      if (isFound) {
        state.countries = state.countries.filter((c) => {
          return c.name.official !== action.payload.name.official;
        });
      } else {
        state.countries.push(action.payload);
      }
    },
  },
});

export const favReducer = favSlicer.reducer;
export const { addRemove } = favSlicer.actions;
