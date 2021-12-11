module.exports = {
    graphAPIEndpoints: {
        exchange: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        blocklytics: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
        lockup: 'https://api.thegraph.com/subgraphs/name/matthewlilley/lockup',
    },

    graphWSEndpoints: {
        exchange: 'wss://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        blocklytics: 'wss://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
    },

    factoryAddress: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",

    TWENTY_FOUR_HOURS: 86400,
}
