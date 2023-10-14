import { configureStore, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  settings: {
    filter: '',
  },
};

function countryReducer(state = initialState.countries, action) {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return { ...state, countries: action.payload };
    default:
      return state;
  }
}

function settingsReducer(state = initialState.settings, action) {
  switch (action.type) {
    case 'SET_FILTER_SETTINGS':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  countries: countryReducer,
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
