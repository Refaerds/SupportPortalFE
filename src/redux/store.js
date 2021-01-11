import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['mytickets']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware, logger];
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export default () => ({ store, persistor })