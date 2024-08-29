import { cityLinks } from "@/lib/cityLinks";
import { localities } from "@/lib/localitiesData";
import { createSlice } from "@reduxjs/toolkit";

interface CityLinks {
  id: string;
  name: string;
}

interface CityLinkState {
  cityLinks: CityLinks[];
}


const initialState: CityLinkState = {
  cityLinks: cityLinks,
};

const cityLinksSlice = createSlice({
  name: "cityLinks",
  initialState,
  reducers: {},
});

export default cityLinksSlice.reducer;
