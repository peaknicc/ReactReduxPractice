import { combineReducers } from "redux";
import menuReducer from "./MenuModule";
import userReducer from "./UserModule";

const rootReducer = combineReducers({
    menuReducer, userReducer
});

export default rootReducer