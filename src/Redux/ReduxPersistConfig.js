import AsyncStorage from '@react-native-community/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import {createBlacklistFilter} from 'redux-persist-transform-filter';
// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
import { ThemeReducer} from '../Modules/Theming/Redux/ThemingRedux';


const rootReducer = combineReducers({
  theme:ThemeReducer,
});



const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['nav', 'app'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: [
      'theme'
    ],
  },
};

export default REDUX_PERSIST;
