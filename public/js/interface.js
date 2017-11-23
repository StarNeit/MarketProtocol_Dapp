MarketABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "creator",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastPriceQueryResult",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "BASE_TOKEN",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "myid",
                "type": "bytes32"
            },
            {
                "name": "result",
                "type": "string"
            }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PRICE_DECIMAL_PLACES",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "withdrawAmount",
                "type": "uint256"
            }
        ],
        "name": "withdrawTokens",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isSettled",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "SELL_SIDE",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "queryID",
                "type": "bytes32"
            },
            {
                "name": "result",
                "type": "string"
            },
            {
                "name": "proof",
                "type": "bytes"
            }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "settleAndClose",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserAccountBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "QUERY_CALLBACK_GAS",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "BUY_SIDE",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "getQtyFilledOrCancelledFromOrder",
        "outputs": [
            {
                "name": "",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ORACLE_DATA_SOURCE",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserPosition",
        "outputs": [
            {
                "name": "",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ORACLE_QUERY",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "CONTRACT_NAME",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "BASE_TOKEN_ADDRESS",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "collateralPoolBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orderAddresses",
                "type": "address[3]"
            },
            {
                "name": "unsignedOrderValues",
                "type": "uint256[5]"
            },
            {
                "name": "orderQty",
                "type": "int256"
            },
            {
                "name": "qtyToFill",
                "type": "int256"
            },
            {
                "name": "v",
                "type": "uint8"
            },
            {
                "name": "r",
                "type": "bytes32"
            },
            {
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "tradeOrder",
        "outputs": [
            {
                "name": "filledQty",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "depositAmount",
                "type": "uint256"
            }
        ],
        "name": "depositTokensForTrading",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "COST_PER_QUERY",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PRICE_CAP",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "EXPIRATION",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PRICE_FLOOR",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ORACLE_QUERY_REPEAT",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "QTY_DECIMAL_PLACES",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "settlementPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newCreator",
                "type": "address"
            }
        ],
        "name": "transferCreator",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orderAddresses",
                "type": "address[3]"
            },
            {
                "name": "unsignedOrderValues",
                "type": "uint256[5]"
            },
            {
                "name": "orderQty",
                "type": "int256"
            },
            {
                "name": "qtyToCancel",
                "type": "int256"
            }
        ],
        "name": "cancelOrder",
        "outputs": [
            {
                "name": "qtyCancelled",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "contractName",
                "type": "string"
            },
            {
                "name": "baseTokenAddress",
                "type": "address"
            },
            {
                "name": "oracleDataSource",
                "type": "string"
            },
            {
                "name": "oracleQuery",
                "type": "string"
            },
            {
                "name": "oracleQueryRepeatSeconds",
                "type": "uint256"
            },
            {
                "name": "floorPrice",
                "type": "uint256"
            },
            {
                "name": "capPrice",
                "type": "uint256"
            },
            {
                "name": "priceDecimalPlaces",
                "type": "uint256"
            },
            {
                "name": "qtyDecimalPlaces",
                "type": "uint256"
            },
            {
                "name": "secondsToExpiration",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "OracleQuerySuccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "OracleQueryFailed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "price",
                "type": "string"
            }
        ],
        "name": "UpdatedLastPrice",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "settlePrice",
                "type": "uint256"
            }
        ],
        "name": "ContractSettled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "balance",
                "type": "uint256"
            }
        ],
        "name": "UpdatedUserBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "balance",
                "type": "uint256"
            }
        ],
        "name": "UpdatedPoolBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "errorCode",
                "type": "uint8"
            },
            {
                "indexed": true,
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "Error",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "maker",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "taker",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "feeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "filledQty",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "paidMakerFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "paidTakerFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "OrderFilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "maker",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "feeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "cancelledQty",
                "type": "int256"
            },
            {
                "indexed": true,
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "OrderCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "currentCreator",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newCreator",
                "type": "address"
            }
        ],
        "name": "CreatorTransferred",
        "type": "event"
    }
];
