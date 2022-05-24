import basketReducer from "./basketReducer";
import fromsReducer from "./fromsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	basketReducer: basketReducer,
	fromsReducer: fromsReducer,
});

export default rootReducer;
