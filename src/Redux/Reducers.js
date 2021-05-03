
import { combineReducers } from 'redux';

import { ThemeReducer } from '../Modules/Theming';
import { LocalizationReducer } from '../Modules/Localization';

import { loadingReducer, LOADING_NAMESPACE } from '../Modules/Loading';
import { userReducer, USER_NAMESPACE } from '../Modules/Auth/Redux/UserRedux';

export default combineReducers({
  theme: ThemeReducer,
  localization: LocalizationReducer,
  [USER_NAMESPACE]: userReducer,
  [LOADING_NAMESPACE]: loadingReducer,

});


