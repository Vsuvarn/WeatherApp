import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { weatherQuery } from '../services/weatherapi';
const INITIAL_STATE = {
  currentWeather: {},
};

const weatherReducer = createSlice({
  name: 'weather',
  initialState: INITIAL_STATE,
  reducers: {
    RESET(state, action) {
      state = INITIAL_STATE;
    },
  },
  extraReducers: builder => {
    /* holidays start */
    builder.addMatcher(
      weatherQuery.endpoints.weatherApi.matchFulfilled,
      (state, action) => {
        state.currentWeather = action.payload;
      },
    );
    builder.addMatcher(
      weatherQuery.endpoints.weatherApi.matchPending,
      (_state, _action) => { },
    );
    builder.addMatcher(
      weatherQuery.endpoints.weatherApi.matchRejected,
      (state, action) => {
        state.currentWeather = action.payload;
      },
    );
    /* holidays end */
  },
});

export const { RESET } = weatherReducer.actions;
export default weatherReducer.reducer;
