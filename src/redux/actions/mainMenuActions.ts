import { MainMenuAction, MainMenuActionTypes } from "../constants";

export function setGameId(gameId: string): MainMenuAction {
    return {
        type: MainMenuActionTypes.SET_GAME_ID,
        payload: gameId
    }
}

export function unsetGameId(): MainMenuAction {
    return {
        type: MainMenuActionTypes.UNSET_GAME_ID,
        payload: null
    }
}