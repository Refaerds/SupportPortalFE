import { combineReducers } from 'redux';
import pageReducer from './page/page-reducer';
import userReducer from './user/user-reducer';
import faqReducer from './faq/faq-reducer';
import myticketsReducer from './mytickets/mytickets-reducer';

export default combineReducers({
    user: userReducer,
    page: pageReducer,
    faq: faqReducer,
    mytickets: myticketsReducer
})