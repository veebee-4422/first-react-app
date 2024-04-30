import { AgentAction, AgentActionTypes } from "../constants";
import { useAppSelector } from "../hooks";

export function agentReducer(state: any, action: AgentAction) {
    switch (action.type) {
        case AgentActionTypes.MOVE_TO_POINT:
            const data = useAppSelector(state => state.gameReducer);
            return action.payload;

        default:
            return null;
    }
}