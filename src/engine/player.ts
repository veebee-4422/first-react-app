// import EventEmitter from "events"
import { AgentTypes, TicketCounts, TicketType } from "./constants";
import { Game } from "./engine";
import { Map, MapPoint } from "./map";

export class Agent {
    public agentType: AgentTypes;
    private agentX: Agent | undefined;
    public ticketCounts: TicketCounts;
    public isMyTurn: boolean = false;
    public isVisibile: boolean = true;
    public myPlayer: Player | undefined;

    public location: MapPoint | null;
    public initialLocationSet: boolean = false;

    private game: Game;

    constructor(agentType: AgentTypes, location: MapPoint | null, game: Game){
        this.agentType = agentType;
        this.location = location;
        this.ticketCounts = agentType === AgentTypes.X ? {
            METRO: 3,
            BUS: 3,
            TAXI: 4,
            BLACK: 5,
            DOUBLE: 2,
        } : {
            METRO: 4,
            BUS: 8,
            TAXI: 10,
            BLACK: 0,
            DOUBLE: 0,
        }

        this.game = game;
    }

    setInitialLocation(location: MapPoint){
        this.initialLocationSet = true;
        this.location = location;
    }

    toggleTurn(setTurn?: boolean){
        if(setTurn !== undefined) this.isMyTurn = setTurn;
        else this.isMyTurn = !this.isMyTurn;
    }

    toggleVisibility(setTurn?: boolean){
        if(this.agentType !== AgentTypes.X) return;
        if(setTurn !== undefined) this.isVisibile = setTurn;
        else this.isMyTurn = !this.isVisibile;
    }

    assignX(agentX: Agent){
        this.agentX = agentX;
    }

    moveToPoint(toPoint: MapPoint, ticket: TicketType){
        if(!this.location) throw new Error("Initial location not set.");
        const pointsVisited = this.location.connectionArrays.find(({routeTo, routeType, routeVia})=>{
            return routeTo === toPoint;
        })?.routeVia;
        if(!pointsVisited) throw new Error("toPoint Invalid: No connections exist.");
        this.location = toPoint;
        this.ticketCounts[ticket]--;

        if(this.agentType !== AgentTypes.X){
            if(!this.agentX) throw new Error("Mr X not found");
            this.agentX.ticketCounts[ticket]++;
        }

        return pointsVisited;
    }
}

export class Player {
    private isMrX: boolean = false;
    private agentList: Agent[] = [];
    private nick: string | undefined;
    private deviceId: string | undefined;
    private isMyTurn: boolean = false;

    constructor(){

    }

    addAgent(agent: Agent){
        const xToDetective = agent.agentType === AgentTypes.X && this.agentList.length;
        const detectiveToX = Boolean(this.agentList.find((existingAgent) => existingAgent.agentType === AgentTypes.X))

        if(xToDetective || detectiveToX) throw new Error("Invalid agent assignment.");

        this.agentList.push(agent);
        agent.myPlayer = this;
    }


}