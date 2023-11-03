import { combineReducers } from "redux";
import menuReducer from "./MenuModule";
import userReducer from "./UserModule";

const rootReducer = combineReducers({
    menu: menuReducer, user: userReducer
});

export default rootReducer