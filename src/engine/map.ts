import { AgentTypes, RouteType, MapConnection, mapPositionCount, TicketType, TicketCounts } from "./constants";
import { Agent } from "./player";


export class MapPoint {
    public mapNumber: number;
    public isMetroStation: boolean = false;
    public isBusStation: boolean = false;
    public isTaxiStation: boolean = false;
    public isBoatStation: boolean = false;
    public occupiedByAgent: AgentTypes | null = null;
    public connectionArrays: MapConnection[] = [];

    constructor(mapNumber: number, isMetroStation?: boolean, isBusStation?: boolean, isTaxiStation?: boolean, isBoatStation?: boolean){
        this.mapNumber = mapNumber;
        if(isMetroStation !== undefined) this.isMetroStation = isMetroStation;
        if(isBusStation !== undefined) this.isBusStation = isBusStation;
        if(isTaxiStation !== undefined) this.isTaxiStation = isTaxiStation;
        if(isBoatStation !== undefined) this.isBoatStation = isBoatStation;
    }

    editStation(stationTypes: RouteType | RouteType[]){
        if(!Array.isArray(stationTypes)) stationTypes = [stationTypes];
        for(let stationType of stationTypes){
            switch (stationType) {
                case RouteType.BOAT:
                    this.isBoatStation = true;
                    break;
                case RouteType.METRO:
                    this.isMetroStation = true;
                    break;
                case RouteType.BUS:
                    this.isBusStation = true;
                    break;
                case RouteType.TAXI:
                    this.isTaxiStation = true;
                    break;

                default:
                    break;
            }
        }
    }

    addAgentFromPoint(agent: AgentTypes){
        if(this.occupiedByAgent) throw new Error("Agent already on this point.");
        this.occupiedByAgent = agent;
    }

    removeAgentFromPoint(agent: AgentTypes){
        if(!this.occupiedByAgent) throw new Error("Agent already not on this point.");
        this.occupiedByAgent = null;
    }

    getAvailableOptionsByTicket(ticket: TicketType): MapPoint[] {
        switch (ticket) {
            case TicketType.METRO:
                if(!this.isMetroStation) return[];
                return this.connectionArrays.filter((e)=>{
                    return e.routeType === RouteType.METRO;
                }).map(e => e.routeTo);

            case TicketType.BUS:
                if(!this.isBusStation) return[];
                return this.connectionArrays.filter((e)=>{
                    return e.routeType === RouteType.BUS;
                }).map(e => e.routeTo);

            case TicketType.TAXI:
                if(!this.isTaxiStation) return[];
                return this.connectionArrays.filter((e)=>{
                    return e.routeType === RouteType.TAXI;
                }).map(e => e.routeTo);

            case TicketType.BLACK:
                return this.connectionArrays.map(e => e.routeTo);

            case TicketType.DOUBLE:
                const jumpOne =  this.connectionArrays.map(e => e.routeTo);
                const jumpTwo = jumpOne.map((mapPoint)=>{
                    return mapPoint.connectionArrays.map(e => e.routeTo);
                }).flat();

                return jumpTwo;

            default:
                console.log("HOW");
                throw new Error("Inavlid ticket type found.");
        }
    }

    getAvailableOptions(agent: Agent): MapPoint[] {
        const ticketCountObject = agent.ticketCounts;
        let finalArray = [];
        for(let ticket of Object.values(TicketType)){
            if(ticketCountObject[ticket] === 0) continue;
            const availableOptions = this.getAvailableOptionsByTicket(ticket);
            finalArray.push(availableOptions);
        }

        return finalArray.flat();
    }
}

export class Map {
    public positions = Array.from({length: mapPositionCount}, (e, i) => i + 1);
    public mapPoints: MapPoint[] = [];

    constructor(){
        this.mapPoints = this.positions.map(e => new MapPoint(e));
    }
}