import { localities } from "@/lib/localitiesData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Locality {
  id: string;
  name: string;
}

interface LocalitiesState {
  localities: Locality[];
  suggestions: Locality[];
  query: string;
}

const initialState: LocalitiesState = {
  localities: localities,
  suggestions: [],
  query: "",
};

const localitiesSlice = createSlice({
  name: "localities",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.suggestions = state.localities.filter((locality) =>
        locality.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
  },
});

export const { setQuery, clearSuggestions } = localitiesSlice.actions;
export default localitiesSlice.reducer;
