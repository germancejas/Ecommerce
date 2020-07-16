import { combineReducers } from "redux";


import { authentication } from './AuthenticationReducer.js';
import { registration } from './RegistrationReducer';
import { ProductsReducer } from './ProductsReducer.js';
import { CategoryReducer } from './CategoryReducer.js';
import { UserReducer } from './UserReducer.js';
import { AlertReducer } from './AlertReducer'
import { users } from './UserReducer'
const rootReducer = combineReducers({
    UserReducer,
    authentication,
    registration,
    ProductsReducer,
    CategoryReducer,
    UserReducer,
    AlertReducer,
    users
});

export default rootReducer