import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.auth';
import { ContactsReducer } from './slice.contact';
import { FiltersReducer } from './slice.filter';
import { userReducer } from './user/slice.user';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: FiltersReducer,
    auth: authPersistedReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
console.log(store.getState());
export const persistor = persistStore(store);
