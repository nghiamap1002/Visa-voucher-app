import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';
import { getPersistConfig } from 'redux-deep-persist';
// slices
import globalReducer from './slices/global';

// ----------------------------------------------------------------------
const rootReducer = combineReducers({
  global: globalReducer,
});

const rootPersistConfig = getPersistConfig({
  key: 'root',
  storage: storage,
  // keyPrefix: 'redux-',
  // whitelist: [...whileListGlobalPage, ...whileListCheckoutPage],
  rootReducer,
});

export { rootPersistConfig, rootReducer };
