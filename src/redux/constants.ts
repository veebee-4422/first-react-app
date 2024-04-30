export const mapPositionCount = 200;

export enum TicketType {
    METRO = "METRO",
    BUS = "BUS",
    TAXI = "TAXI",
    BLACK = "BLACK",
    DOUBLE = "DOUBLE",
}

export enum RouteType {
    METRO = "METRO",
    BUS = "BUS",
    TAXI = "TAXI",
    BOAT = "BOAT",
}

export type MapConnection = {
    routeTo: number,
    routeType: RouteType,
    routeVia: number[]
}

export type TicketCounts = {
    METRO: number,
    BUS: number,
    TAXI: number,
    BLACK: number,
    DOUBLE: number,
}

export enum AgentTypes {
    RED = "RED",
    BLUE = "BLUE",
    GREEN = "GREEN",
    YELLOW = "YELLOW",
    PURPLE = "PURPLE",
    X = "X",
}

export const agentIsDetective = {
    [AgentTypes.RED]: true,
    [AgentTypes.BLUE]: true,
    [AgentTypes.GREEN]: true,
    [AgentTypes.YELLOW]: true,
    [AgentTypes.PURPLE]: true,
    [AgentTypes.X]: false,
}

export const StartingLocations = []

export type PlayerList = {
    isMrX: boolean;
    agentList: AgentTypes[];
    nick: string;
    deviceId: string;
}

export const mappings = {
    1: {
        [RouteType.TAXI]: {
            8: [],
            9: [],
        },
        [RouteType.BUS]: {
            46: [8, 18, 31, 44, 58],
            58: [],
        },
        [RouteType.METRO]: {
            46: [],
        },
        [RouteType.BOAT]: {}
    },
    2: {
        [RouteType.TAXI]: {
            10: [],
            20: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    3: {
        [RouteType.TAXI]: {
            11: [],
            4: [],
            12: [],
        },
        [RouteType.BUS]: {
            22: [],
            23: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    4: {
        [RouteType.TAXI]: {
            3: [],
            13: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    5: {
        [RouteType.TAXI]: {
            15: [],
            16: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    6: {
        [RouteType.TAXI]: {
            7: [],
            29: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    7: {
        [RouteType.TAXI]: {
            6: [],
            17: [],
        },
        [RouteType.BUS]: {
            42: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    8: {
        [RouteType.TAXI]: {
            18: [],
            1: [],
            19: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    9: {
        [RouteType.TAXI]: {
            1: [],
            20: [],
            19: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    10: {
        [RouteType.TAXI]: {
            2: [],
            11: [],
            21: [],
            34: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    11: {
        [RouteType.TAXI]: {
            3: [],
            10: [],
            22: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    12: {
        [RouteType.TAXI]: {
            23: [],
            3: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    13: {
        [RouteType.TAXI]: {
            4: [],
            23: [],
            24: [],
        },
        [RouteType.BUS]: {
            14: [],
            23: [],
            52: [],
        },
        [RouteType.METRO]: {
            46: [],
            67: [],
            89: [],
        },
        [RouteType.BOAT]: {}
    },
    14: {
        [RouteType.TAXI]: {
            25: [],
            15: [],
        },
        [RouteType.BUS]: {
            13: [],
            15: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    15: {
        [RouteType.TAXI]: {
            14: [],
            26: [],
            28: [],
            16: [],
            5: [],
        },
        [RouteType.BUS]: {
            14: [],
            29: [],
            41: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    16: {
        [RouteType.TAXI]: {
            15: [],
            5: [],
            28: [],
            29: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    17: {
        [RouteType.TAXI]: {
            7: [],
            30: [],
            29: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    18: {
        [RouteType.TAXI]: {
            8: [],
            31: [],
            43: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    19: {
        [RouteType.TAXI]: {
            8: [],
            9: [],
            32: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    20: {
        [RouteType.TAXI]: {
            2: [],
            9: [],
            33: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    21: {
        [RouteType.TAXI]: {
            10: [],
            33: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    22: {
        [RouteType.TAXI]: {
            11: [],
            23: [],
            34: [],
            35: [],
        },
        [RouteType.BUS]: {
            3: [],
            23: [],
            34: [],
            65: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    23: {
        [RouteType.TAXI]: {
            12: [],
            13: [],
            22: [],
            37: [],
        },
        [RouteType.BUS]: {
            3: [],
            22: [],
            13: [],
            67: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    24: {
        [RouteType.TAXI]: {
            13: [],
            37: [],
            38: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    25: {
        [RouteType.TAXI]: {
            14: [],
            39: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    26: {
        [RouteType.TAXI]: {
            15: [],
            27: [],
            39: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    27: {
        [RouteType.TAXI]: {
            26: [],
            28: [],
            40: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    28: {
        [RouteType.TAXI]: {
            15: [],
            16: [],
            27: [],
            41: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    29: {
        [RouteType.TAXI]: {
            6: [],
            16: [],
            17: [],
            41: [],
            42: [],
        },
        [RouteType.BUS]: {
            15: [],
            41: [],
            42: [],
            55: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    30: {
        [RouteType.TAXI]: {
            17: [],
            42: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    31: {
        [RouteType.TAXI]: {
            18: [],
            43: [],
            44: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    32: {
        [RouteType.TAXI]: {
            19: [],
            33: [],
            44: [],
            45: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    33: {
        [RouteType.TAXI]: {
            20: [],
            21: [],
            32: [],
            46: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    34: {
        [RouteType.TAXI]: {
            10: [],
            22: [],
            47: [],
            48: [],
        },
        [RouteType.BUS]: {
            22: [],
            46: [],
            63: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    35: {
        [RouteType.TAXI]: {
            22: [],
            36: [],
            48: [],
            65: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    36: {
        [RouteType.TAXI]: {
            35: [],
            37: [],
            49: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    37: {
        [RouteType.TAXI]: {
            23: [],
            24: [],
            36: [],
            50: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    38: {
        [RouteType.TAXI]: {
            24: [],
            50: [],
            51: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    39: {
        [RouteType.TAXI]: {
            25: [],
            26: [],
            51: [],
            52: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    40: {
        [RouteType.TAXI]: {
            27: [],
            41: [],
            52: [],
            53: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    41: {
        [RouteType.TAXI]: {
            40: [],
            54: [],
            29: [],
            28: [],
        },
        [RouteType.BUS]: {
            15: [],
            29: [],
            52: [],
            87: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    42: {
        [RouteType.TAXI]: {
            29: [],
            30: [],
            56: [],
            72: [],
        },
        [RouteType.BUS]: {
            7: [],
            29: [],
            72: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    43: {
        [RouteType.TAXI]: {
            18: [],
            31: [],
            57: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    44: {
        [RouteType.TAXI]: {
            31: [],
            32: [],
            58: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    45: {
        [RouteType.TAXI]: {
            32: [],
            46: [],
            58: [],
            59: [],
            60: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    46: {
        [RouteType.TAXI]: {
            33: [],
            45: [],
            47: [],
            61: [],
        },
        [RouteType.BUS]: {
            1: [],
            34: [],
            58: [],
            78: [],
        },
        [RouteType.METRO]: {
            1: [],
            13: [],
            74: [],
            79: [],
        },
        [RouteType.BOAT]: {}
    },
    47: {
        [RouteType.TAXI]: {
            46: [],
            34: [],
            62: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    48: {
        [RouteType.TAXI]: {
            34: [],
            35: [],
            62: [],
            63: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    49: {
        [RouteType.TAXI]: {
            36: [],
            50: [],
            66: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    50: {
        [RouteType.TAXI]: {
            37: [],
            38: [],
            49: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    51: {
        [RouteType.TAXI]: {
            38: [],
            39: [],
            52: [],
            67: [],
            68: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    52: {
        [RouteType.TAXI]: {
            39: [],
            40: [],
            51: [],
            69: [],
        },
        [RouteType.BUS]: {
            13: [],
            41: [],
            67: [],
            86: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    53: {
        [RouteType.TAXI]: {
            40: [],
            54: [],
            69: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    54: {
        [RouteType.TAXI]: {
            41: [],
            53: [],
            55: [],
            70: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    55: {
        [RouteType.TAXI]: {
            54: [],
            71: [],
        },
        [RouteType.BUS]: {
            29: [],
            89: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    56: {
        [RouteType.TAXI]: {
            42: [],
            91: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    57: {
        [RouteType.TAXI]: {
            43: [],
            58: [],
            73: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    58: {
        [RouteType.TAXI]: {
            44: [],
            45: [],
            57: [],
            59: [],
            75: [],
            74: [],
        },
        [RouteType.BUS]: {
            1: [],
            46: [],
            74: [],
            77: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    59: {
        [RouteType.TAXI]: {
            45: [],
            58: [],
            75: [],
            76: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    60: {
        [RouteType.TAXI]: {
            45: [],
            61: [],
            76: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    61: {
        [RouteType.TAXI]: {
            46: [],
            60: [],
            62: [],
            76: [],
            78: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    62: {
        [RouteType.TAXI]: {
            47: [],
            48: [],
            61: [],
            79: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    63: {
        [RouteType.TAXI]: {
            48: [],
            64: [],
            79: [],
            80: [],
        },
        [RouteType.BUS]: {
            34: [],
            65: [],
            79: [],
            100: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    64: {
        [RouteType.TAXI]: {
            63: [],
            65: [],
            81: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    65: {
        [RouteType.TAXI]: {
            35: [],
            64: [],
            82: [],
        },
        [RouteType.BUS]: {
            22: [],
            67: [],
            63: [],
            82: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    66: {
        [RouteType.TAXI]: {
            49: [],
            67: [],
            82: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    67: {
        [RouteType.TAXI]: {
            51: [],
            66: [],
            68: [],
            84: [],
        },
        [RouteType.BUS]: {
            23: [],
            52: [],
            65: [],
            82: [],
            102: [],
        },
        [RouteType.METRO]: {
            13: [],
            79: [],
            89: [],
            111: [],
        },
        [RouteType.BOAT]: {}
    },
    68: {
        [RouteType.TAXI]: {
            51: [],
            67: [],
            69: [],
            85: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    69: {
        [RouteType.TAXI]: {
            52: [],
            53: [],
            68: [],
            86: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    70: {
        [RouteType.TAXI]: {
            54: [],
            71: [],
            87: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    71: {
        [RouteType.TAXI]: {
            55: [],
            70: [],
            72: [],
            89: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    72: {
        [RouteType.TAXI]: {
            42: [],
            71: [],
            90: [],
            91: [],
        },
        [RouteType.BUS]: {
            42: [],
            105: [],
            107: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    73: {
        [RouteType.TAXI]: {
            57: [],
            74: [],
            92: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    74: {
        [RouteType.TAXI]: {
            58: [],
            73: [],
            75: [],
            92: [],
        },
        [RouteType.BUS]: {
            58: [],
            94: [],
        },
        [RouteType.METRO]: {
            46: [],
        },
        [RouteType.BOAT]: {}
    },
    75: {
        [RouteType.TAXI]: {
            58: [],
            59: [],
            74: [],
            94: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    76: {
        [RouteType.TAXI]: {
            59: [],
            60: [],
            61: [],
            77: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    77: {
        [RouteType.TAXI]: {
            76: [],
            78: [],
            95: [],
            96: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    78: {
        [RouteType.TAXI]: {
            61: [],
            77: [],
            79: [],
            97: [],
        },
        [RouteType.BUS]: {
            46: [],
            58: [],
            79: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    79: {
        [RouteType.TAXI]: {
            62: [],
            63: [],
            78: [],
            98: [],
        },
        [RouteType.BUS]: {
            63: [],
            78: [],
        },
        [RouteType.METRO]: {
            46: [],
            67: [],
            93: [],
            111: [],
        },
        [RouteType.BOAT]: {}
    },
    80: {
        [RouteType.TAXI]: {
            63: [],
            99: [],
            100: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    81: {
        [RouteType.TAXI]: {
            64: [],
            82: [],
            100: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    82: {
        [RouteType.TAXI]: {
            65: [],
            66: [],
            81: [],
            101: [],
        },
        [RouteType.BUS]: {
            65: [],
            67: [],
            100: [],
            140: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    83: {
        [RouteType.TAXI]: {
            101: [],
            102: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    84: {
        [RouteType.TAXI]: {
            67: [],
            85: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    85: {
        [RouteType.TAXI]: {
            68: [],
            84: [],
            103: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    86: {
        [RouteType.TAXI]: {
            69: [],
            103: [],
            104: [],
        },
        [RouteType.BUS]: {
            52: [],
            87: [],
            102: [],
            116: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    87: {
        [RouteType.TAXI]: {
            70: [],
            88: [],
        },
        [RouteType.BUS]: {
            41: [],
            86: [],
            105: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    88: {
        [RouteType.TAXI]: {
            87: [],
            89: [],
            117: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    89: {
        [RouteType.TAXI]: {
            71: [],
            88: [],
            105: [],
        },
        [RouteType.BUS]: {
            55: [],
            105: [],
        },
        [RouteType.METRO]: {
            13: [],
            67: [],
            140: [],
            159: [],
        },
        [RouteType.BOAT]: {}
    },
    90: {
        [RouteType.TAXI]: {
            72: [],
            91: [],
            105: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    91: {
        [RouteType.TAXI]: {
            56: [],
            72: [],
            90: [],
            105: [],
            107: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    92: {
        [RouteType.TAXI]: {
            73: [],
            74: [],
            93: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    93: {
        [RouteType.TAXI]: {
            92: [],
            94: [],
        },
        [RouteType.BUS]: {
            94: [],
        },
        [RouteType.METRO]: {
            79: [],
        },
        [RouteType.BOAT]: {}
    },
    94: {
        [RouteType.TAXI]: {
            93: [],
            75: [],
            95: [],
        },
        [RouteType.BUS]: {
            74: [],
            78: [],
            93: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    95: {
        [RouteType.TAXI]: {
            94: [],
            77: [],
            122: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    96: {
        [RouteType.TAXI]: {
            77: [],
            97: [],
            109: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    97: {
        [RouteType.TAXI]: {
            96: [],
            78: [],
            98: [],
            109: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    98: {
        [RouteType.TAXI]: {
            97: [],
            79: [],
            99: [],
            110: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    99: {
        [RouteType.TAXI]: {
            98: [],
            80: [],
            110: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    100: {
        [RouteType.TAXI]: {
            80: [],
            81: [],
            101: [],
            112: [],
            113: [],
        },
        [RouteType.BUS]: {
            63: [],
            111: [],
            82: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    101: {
        [RouteType.TAXI]: {
            100: [],
            82: [],
            114: [],
            83: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    102: {
        [RouteType.TAXI]: {
            83: [],
            115: [],
            103: [],
        },
        [RouteType.BUS]: {
            67: [],
            127: [],
            86: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    103: {
        [RouteType.TAXI]: {
            102: [],
            85: [],
            86: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    104: {
        [RouteType.TAXI]: {
            86: [],
            116: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    105: {
        [RouteType.TAXI]: {
            89: [],
            90: [],
            91: [],
            106: [],
            118: [],
        },
        [RouteType.BUS]: {
            87: [],
            89: [],
            72: [],
            107: [],
            118: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    106: {
        [RouteType.TAXI]: {
            105: [],
            107: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    107: {
        [RouteType.TAXI]: {
            91: [],
            106: [],
            119: [],
        },
        [RouteType.BUS]: {
            105: [],
            72: [],
            161: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    109: {
        [RouteType.TAXI]: {
            96: [],
            97: [],
            110: [],
            124: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    110: {
        [RouteType.TAXI]: {
            98: [],
            99: [],
            109: [],
            111: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    111: {
        [RouteType.TAXI]: {
            124: [],
            110: [],
            112: [],
        },
        [RouteType.BUS]: {
            124: [],
            100: [],
        },
        [RouteType.METRO]: {
            79: [],
            67: [],
            163: [],
            153: [],
        },
        [RouteType.BOAT]: {}
    },
    112: {
        [RouteType.TAXI]: {
            111: [],
            125: [],
            100: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    113: {
        [RouteType.TAXI]: {
            125: [],
            100: [],
            114: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    114: {
        [RouteType.TAXI]: {
            101: [],
            113: [],
            115: [],
            126: [],
            132: [],
            131: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    115: {
        [RouteType.TAXI]: {
            114: [],
            102: [],
            127: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {
            118: [],
            157: [],
        },
    },
    116: {
        [RouteType.TAXI]: {
            104: [],
            117: [],
            128: [],
            127: [],
        },
        [RouteType.BUS]: {
            86: [],
            118: [],
            127: [],
            128: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    117: {
        [RouteType.TAXI]: {
            88: [],
            116: [],
            118: [],
            129: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    118: {
        [RouteType.TAXI]: {
            105: [],
            117: [],
            119: [],
        },
        [RouteType.BUS]: {
            105: [],
            116: [],
            135: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {
            115: [],
        },
    },
    119: {
        [RouteType.TAXI]: {
            118: [],
            107: [],
            136: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    120: {
        [RouteType.TAXI]: {
            121: [],
            144: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    121: {
        [RouteType.TAXI]: {
            120: [],
            122: [],
            145: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    122: {
        [RouteType.TAXI]: {
            95: [],
            121: [],
            123: [],
            146: [],
        },
        [RouteType.BUS]: {
            123: [],
            144: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    123: {
        [RouteType.TAXI]: {
            122: [],
            124: [],
            137: [],
            148: [],
            149: [],
        },
        [RouteType.BUS]: {
            122: [],
            124: [],
            144: [],
            165: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    124: {
        [RouteType.TAXI]: {
            109: [],
            111: [],
            123: [],
            130: [],
            138: [],
        },
        [RouteType.BUS]: {
            111: [],
            123: [],
            153: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    125: {
        [RouteType.TAXI]: {
            112: [],
            113: [],
            131: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    126: {
        [RouteType.TAXI]: {
            114: [],
            127: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    127: {
        [RouteType.TAXI]: {
            115: [],
            116: [],
            126: [],
            133: [],
            134: [],
        },
        [RouteType.BUS]: {
            102: [],
            116: [],
            133: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    128: {
        [RouteType.TAXI]: {
            116: [],
            129: [],
            134: [],
            142: [],
        },
        [RouteType.BUS]: {
            116: [],
            142: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    129: {
        [RouteType.TAXI]: {
            117: [],
            128: [],
            135: [],
            142: [],
            143: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    130: {
        [RouteType.TAXI]: {
            124: [],
            131: [],
            139: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    131: {
        [RouteType.TAXI]: {
            114: [],
            125: [],
            130: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    132: {
        [RouteType.TAXI]: {
            114: [],
            140: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    133: {
        [RouteType.TAXI]: {
            127: [],
            140: [],
            141: [],
        },
        [RouteType.BUS]: {
            127: [],
            140: [],
            157: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    134: {
        [RouteType.TAXI]: {
            127: [],
            128: [],
            141: [],
            142: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    135: {
        [RouteType.TAXI]: {
            129: [],
            136: [],
            143: [],
            161: [],
        },
        [RouteType.BUS]: {
            118: [],
            159: [],
            161: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    136: {
        [RouteType.TAXI]: {
            119: [],
            135: [],
            162: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    137: {
        [RouteType.TAXI]: {
            123: [],
            147: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    138: {
        [RouteType.TAXI]: {
            124: [],
            150: [],
            152: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    139: {
        [RouteType.TAXI]: {
            130: [],
            140: [],
            153: [],
            154: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    140: {
        [RouteType.TAXI]: {
            132: [],
            133: [],
            139: [],
            154: [],
            156: [],
        },
        [RouteType.BUS]: {
            82: [],
            133: [],
            154: [],
            156: [],
        },
        [RouteType.METRO]: {
            89: [],
            153: [],
            159: [],
        },
        [RouteType.BOAT]: {}
    },
    141: {
        [RouteType.TAXI]: {
            133: [],
            134: [],
            142: [],
            158: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    142: {
        [RouteType.TAXI]: {
            128: [],
            129: [],
            134: [],
            141: [],
            143: [],
            158: [],
            159: [],
        },
        [RouteType.BUS]: {
            128: [],
            157: [],
            159: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    143: {
        [RouteType.TAXI]: {
            129: [],
            135: [],
            142: [],
            159: [],
            160: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    144: {
        [RouteType.TAXI]: {
            120: [],
            145: [],
            177: [],
        },
        [RouteType.BUS]: {
            122: [],
            123: [],
            163: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    145: {
        [RouteType.TAXI]: {
            121: [],
            144: [],
            146: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    146: {
        [RouteType.TAXI]: {
            122: [],
            145: [],
            147: [],
            163: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    147: {
        [RouteType.TAXI]: {
            137: [],
            146: [],
            164: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    148: {
        [RouteType.TAXI]: {
            123: [],
            149: [],
            164: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    149: {
        [RouteType.TAXI]: {
            123: [],
            148: [],
            150: [],
            165: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    150: {
        [RouteType.TAXI]: {
            138: [],
            149: [],
            151: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    151: {
        [RouteType.TAXI]: {
            150: [],
            152: [],
            165: [],
            166: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    152: {
        [RouteType.TAXI]: {
            138: [],
            151: [],
            153: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    153: {
        [RouteType.TAXI]: {
            139: [],
            152: [],
            154: [],
            166: [],
            167: [],
        },
        [RouteType.BUS]: {
            124: [],
            154: [],
            180: [],
            184: [],
        },
        [RouteType.METRO]: {
            111: [],
            140: [],
            163: [],
            185: [],
        },
        [RouteType.BOAT]: {}
    },
    154: {
        [RouteType.TAXI]: {
            139: [],
            140: [],
            153: [],
            155: [],
        },
        [RouteType.BUS]: {
            140: [],
            153: [],
            156: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    155: {
        [RouteType.TAXI]: {
            154: [],
            156: [],
            167: [],
            168: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    156: {
        [RouteType.TAXI]: {
            140: [],
            155: [],
            157: [],
            169: [],
        },
        [RouteType.BUS]: {
            140: [],
            154: [],
            157: [],
            184: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    157: {
        [RouteType.TAXI]: {
            156: [],
            158: [],
            170: [],
        },
        [RouteType.BUS]: {
            133: [],
            142: [],
            156: [],
            185: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {
            115: [],
            194: [],
        },
    },
    158: {
        [RouteType.TAXI]: {
            141: [],
            142: [],
            157: [],
            171: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    159: {
        [RouteType.TAXI]: {
            142: [],
            143: [],
            160: [],
            172: [],
            188: [],
        },
        [RouteType.BUS]: {
            142: [],
            135: [],
            161: [],
            187: [],
            199: [],
        },
        [RouteType.METRO]: {
            89: [],
            140: [],
            185: [],
        },
        [RouteType.BOAT]: {}
    },
    160: {
        [RouteType.TAXI]: {
            143: [],
            159: [],
            161: [],
            173: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    161: {
        [RouteType.TAXI]: {
            135: [],
            160: [],
            174: [],
        },
        [RouteType.BUS]: {
            107: [],
            135: [],
            159: [],
            199: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    162: {
        [RouteType.TAXI]: {
            136: [],
            175: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    163: {
        [RouteType.TAXI]: {
            146: [],
            177: [],
        },
        [RouteType.BUS]: {
            144: [],
            176: [],
            191: [],
        },
        [RouteType.METRO]: {
            111: [],
            153: [],
        },
        [RouteType.BOAT]: {}
    },
    164: {
        [RouteType.TAXI]: {
            147: [],
            148: [],
            178: [],
            179: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    165: {
        [RouteType.TAXI]: {
            149: [],
            151: [],
            179: [],
            180: [],
        },
        [RouteType.BUS]: {
            123: [],
            180: [],
            191: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    166: {
        [RouteType.TAXI]: {
            151: [],
            153: [],
            181: [],
            183: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    167: {
        [RouteType.TAXI]: {
            153: [],
            155: [],
            168: [],
            183: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    168: {
        [RouteType.TAXI]: {
            155: [],
            167: [],
            184: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    169: {
        [RouteType.TAXI]: {
            156: [],
            184: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    170: {
        [RouteType.TAXI]: {
            157: [],
            171: [],
            185: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    171: {
        [RouteType.TAXI]: {
            158: [],
            170: [],
            172: [],
            186: [],
            198: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    172: {
        [RouteType.TAXI]: {
            159: [],
            171: [],
            187: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    173: {
        [RouteType.TAXI]: {
            160: [],
            174: [],
            188: [],
            200: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    174: {
        [RouteType.TAXI]: {
            161: [],
            173: [],
            175: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    175: {
        [RouteType.TAXI]: {
            162: [],
            174: [],
            200: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    176: {
        [RouteType.TAXI]: {
            177: [],
            189: [],
        },
        [RouteType.BUS]: {
            163: [],
            190: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    177: {
        [RouteType.TAXI]: {
            144: [],
            163: [],
            176: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    178: {
        [RouteType.TAXI]: {
            164: [],
            189: [],
            191: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    179: {
        [RouteType.TAXI]: {
            164: [],
            165: [],
            191: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    180: {
        [RouteType.TAXI]: {
            165: [],
            181: [],
            193: [],
        },
        [RouteType.BUS]: {
            153: [],
            165: [],
            184: [],
            190: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    181: {
        [RouteType.TAXI]: {
            166: [],
            180: [],
            182: [],
            193: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    182: {
        [RouteType.TAXI]: {
            181: [],
            183: [],
            195: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    183: {
        [RouteType.TAXI]: {
            166: [],
            167: [],
            182: [],
            196: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    184: {
        [RouteType.TAXI]: {
            168: [],
            169: [],
            196: [],
            197: [],
            185: [],
        },
        [RouteType.BUS]: {
            153: [],
            156: [],
            180: [],
            185: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    185: {
        [RouteType.TAXI]: {
            170: [],
            184: [],
            186: [],
        },
        [RouteType.BUS]: {
            157: [],
            184: [],
            187: [],
        },
        [RouteType.METRO]: {
            153: [],
            159: [],
        },
        [RouteType.BOAT]: {}
    },
    186: {
        [RouteType.TAXI]: {
            171: [],
            185: [],
            198: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    187: {
        [RouteType.TAXI]: {
            172: [],
            188: [],
            198: [],
        },
        [RouteType.BUS]: {
            159: [],
            185: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    188: {
        [RouteType.TAXI]: {
            159: [],
            173: [],
            187: [],
            199: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    189: {
        [RouteType.TAXI]: {
            176: [],
            178: [],
            190: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    190: {
        [RouteType.TAXI]: {
            189: [],
            191: [],
            192: [],
        },
        [RouteType.BUS]: {
            176: [],
            191: [],
            180: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    191: {
        [RouteType.TAXI]: {
            178: [],
            179: [],
            190: [],
            192: [],
        },
        [RouteType.BUS]: {
            163: [],
            165: [],
            190: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    192: {
        [RouteType.TAXI]: {
            191: [],
            190: [],
            194: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    193: {
        [RouteType.TAXI]: {
            180: [],
            181: [],
            194: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    194: {
        [RouteType.TAXI]: {
            192: [],
            193: [],
            195: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {
            157: [],
        },
    },
    195: {
        [RouteType.TAXI]: {
            182: [],
            194: [],
            197: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    196: {
        [RouteType.TAXI]: {
            183: [],
            184: [],
            197: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    197: {
        [RouteType.TAXI]: {
            184: [],
            195: [],
            196: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    198: {
        [RouteType.TAXI]: {
            171: [],
            186: [],
            187: [],
            199: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    199: {
        [RouteType.TAXI]: {
            188: [],
            198: [],
            200: [],
        },
        [RouteType.BUS]: {
            159: [],
            161: [],
        },
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    },
    200: {
        [RouteType.TAXI]: {
            173: [],
            175: [],
            199: [],
        },
        [RouteType.BUS]: {},
        [RouteType.METRO]: {},
        [RouteType.BOAT]: {}
    }
}

export const HEARTBEAT_DURATION = 5000;

export enum MainMenuActionTypes {
    SET_GAME_ID = "SET_GAME_ID",
    UNSET_GAME_ID = "UNSET_GAME_ID",
}

export type MainMenuAction = {
    type: MainMenuActionTypes,
    payload: any
}

export enum AgentActionTypes {
    MOVE_TO_POINT = "MOVE_TO_POINT",
}

export type AgentAction = {
    type: AgentActionTypes,
    payload: any
}

export enum GameActionTypes {
    GET_AVAILABLE_POINTS_AT = "GET_AVAILABLE_POINTS_AT",
}

export type GameAction = {
    type: GameActionTypes,
    payload: any
}