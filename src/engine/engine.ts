import EventEmitter from "events"
import { AgentTypes, HEARTBEAT_DURATION } from "./constants";
import { Agent, Player } from "./player";
import { Map } from "./map";
import axios from "axios";

async function createConnection(playerId: string) {
    return {
        gameId: "123123123213",
        playersJoined: []
    }
}

export class Game extends EventEmitter {
    private live: boolean = false;
    private connectionMade: boolean = false;
    private turnCount: number;
    private playerList: Player[] = [];
    private gameId: string | null = null;
    private deviceId: string;

    private agentRed: Agent;
    private agentBlue: Agent;
    private agentGreen: Agent;
    private agentYellow: Agent;
    private agentPurple: Agent;
    private agentX: Agent;

    private allowDetectivePointPassCatch: boolean = false;
    private allowDetectivePathBlocking: boolean = false;
    private allowMrXIntentionalReveal: boolean = false;

    private map: Map;

    constructor(deviceId: string, map: Map) {
        super();

        this.deviceId = deviceId;
        this.turnCount = 0;

        this.agentRed = new Agent(AgentTypes.RED, null, this);
        this.agentBlue = new Agent(AgentTypes.BLUE, null, this);
        this.agentGreen = new Agent(AgentTypes.GREEN, null, this);
        this.agentYellow = new Agent(AgentTypes.YELLOW, null, this);
        this.agentPurple = new Agent(AgentTypes.PURPLE, null, this);
        this.agentX = new Agent(AgentTypes.X, null, this);

        this.map = map;
    }

    async init() {
        if (this.gameId) return;
        const { gameId } = await createConnection(this.deviceId);
        this.gameId = gameId;
    }

    joinPlayer(player: Player){
        this.playerList.push(player);
    }

    goLive() {
        if (!this.agentX.location || !this.agentBlue.location || !this.agentGreen.location ||
            !this.agentPurple.location || !this.agentRed.location || !this.agentYellow.location) {
            throw new Error("All agents not assigned locations yet.");
        }
        this.live = true;
    }

    end(){
        this.emit("END");
    }
}

export class GameHandler {
    private game: Game;

    private heartbeatInterval: NodeJS.Timeout;
    constructor(){
        const deviceId = GameHandler.getDeviceId();
        const map = new Map();

        this.game = new Game(deviceId, map);
        this.heartbeatInterval = setTimeout(GameHandler.heartbeat, HEARTBEAT_DURATION);
    }

    static getDeviceId(){
        return "123123123"
    }

    static heartbeat(){
        
    }

    cleanup(){
        const deviceId = GameHandler.getDeviceId();
        const map = new Map();
        this.game = new Game(deviceId, map);
        clearInterval(this.heartbeatInterval);

        this.heartbeatInterval = setTimeout(GameHandler.heartbeat, HEARTBEAT_DURATION);
    }

    static async createGameRoom(){
        await axios({
            
        })
    }
}