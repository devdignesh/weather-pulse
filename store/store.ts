"use client";
import { configureStore } from "@reduxjs/toolkit";
import localitiesReducer from "./localitiesSlice";
import weatherReducer from './weatherSlice';
import cityLinksReducer from './cityLinksSlice'

const store = configureStore({
  reducer: {
    localities: localitiesReducer,
    weather: weatherReducer,
    cityLinks: cityLinksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
