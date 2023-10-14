import { configureStore, combineReducers } from '@reduxjs/toolkit';

const initialState = { countries: [] };

function countryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return { ...state, countries: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  countries: countryReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;