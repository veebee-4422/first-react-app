import { GameAction, GameActionTypes } from "../constants";

export function getAvailablePoints(point: number): GameAction {
    return {
        type: GameActionTypes.GET_AVAILABLE_POINTS_AT,
        payload: point
    }
}