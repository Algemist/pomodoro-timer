import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/model/StateSchema';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { taskReducer } from 'entities/task';

const rootReducer = combineReducers<StateSchema>({
    tasks: taskReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
