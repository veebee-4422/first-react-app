import { combineReducers } from "redux";
import { mainMenuReducer } from "./mainMenuReducers";
import { agentReducer } from "./playerReducers";
import { gameReducer } from "./gameReducers";

export default combineReducers({
    mainMenuReducer,
    agentReducer,
    gameReducer
})