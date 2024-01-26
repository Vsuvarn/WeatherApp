import {
  configureStore,
  ConfigureStoreOptions,
  combineReducers,
} from '@reduxjs/toolkit';
import { api } from './services';
import weatherReducer from './reducer/weatherReducer';


// export const createStore = (
//   options?: ConfigureStoreOptions['preloadedState'] | undefined,
// ) =>
//   configureStore({
//     reducer: {
//       [api.reducerPath]: api.reducer,
//       weatherReducer,
//     },
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
//     ...options,
//   });
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    weatherReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

