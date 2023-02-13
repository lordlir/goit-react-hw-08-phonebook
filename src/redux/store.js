import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from './slice.contact';
import { FiltersReducer } from './slice.filter';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { FiltersReducer } from './slice.filter';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
// };

// const persistedContactReducer = persistReducer(persistConfig, ContactsReducer);

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: FiltersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});
console.log(store.getState());
// export const persistor = persistStore(store);
