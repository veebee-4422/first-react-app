import { AgentAction, AgentActionTypes } from "../constants";

export function moveToPoint(pointIndex: number): AgentAction {
    return {
        type: AgentActionTypes.MOVE_TO_POINT,
        payload: pointIndex
    }
}