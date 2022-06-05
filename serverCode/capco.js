
// 4810b949 : value ( sum[numShares * quote.price, numShares * quote.price])
// 286ea600 : value
const positionSvc = {
    getCustomerPositions() {
        return new Promise((resolve, reject) => {
            const positions = [
                { "accountId": "4810b949", "symbol": "SHW", "numShares": 10 },
                { "accountId": "286ea600", "symbol": "LEG", "numShares": 75 },
                { "accountId": "286ea600", "symbol": "SHW", "numShares": 7 },
                { "accountId": "3a8f7d92", "symbol": "CAH", "numShares": 52 },
                { "accountId": "3a8f7d92", "symbol": "OTIS", "numShares": 110 },
                { "accountId": "286ea600", "symbol": "VFC", "numShares": 84 },
                { "accountId": "3a8f7d92", "symbol": "PEP", "numShares": 26 },
                { "accountId": "3a8f7d92", "symbol": "GD", "numShares": 44 },
                { "accountId": "3a8f7d92", "symbol": "SHW", "numShares": 4 },
                { "accountId": "b949203a", "symbol": "BDX", "numShares": 28 },
                { "accountId": "b949203a", "symbol": "VFC", "numShares": 55 },
                { "accountId": "3a8f7d92", "symbol": "MCD", "numShares": 23 },
                { "accountId": "8f7d928a", "symbol": "VFC", "numShares": 77 },
                { "accountId": "8f7d928a", "symbol": "KMB", "numShares": 31 },
                { "accountId": "8f7d928a", "symbol": "MCD", "numShares": 10 },
                { "accountId": "b949203a", "symbol": "SHW", "numShares": 7 },
                { "accountId": "b949203a", "symbol": "WMT", "numShares": 48 },
                { "accountId": "8f7d928a", "symbol": "BDX", "numShares": 13 },
                { "accountId": "b949203a", "symbol": "ROP", "numShares": 13 },
                { "accountId": "b949203a", "symbol": "LEG", "numShares": 105 },
                { "accountId": "286ea600", "symbol": "PEP", "numShares": 25 },
                { "accountId": "3a8f7d92", "symbol": "VFC", "numShares": 35 },
                { "accountId": "8f7d928a", "symbol": "NUE", "numShares": 81 },
                { "accountId": "286ea600", "symbol": "ECL", "numShares": 23 },
                { "accountId": "3a8f7d92", "symbol": "FRT", "numShares": 30 },
                { "accountId": "4810b949", "symbol": "DOV", "numShares": 29 },
                { "accountId": "8f7d928a", "symbol": "FRT", "numShares": 83 },
                { "accountId": "8f7d928a", "symbol": "SHW", "numShares": 10 },
                { "accountId": "4810b949", "symbol": "LEG", "numShares": 59 },
                { "accountId": "b949203a", "symbol": "FRT", "numShares": 80 },
                { "accountId": "286ea600", "symbol": "WMT", "numShares": 35 },
                { "accountId": "4810b949", "symbol": "KMB", "numShares": 32 },
                { "accountId": "4810b949", "symbol": "ECL", "numShares": 11 },
                { "accountId": "b949203a", "symbol": "KMB", "numShares": 34 },
                { "accountId": "4810b949", "symbol": "PBCT", "numShares": 469 },
                { "accountId": "8f7d928a", "symbol": "LEG", "numShares": 71 },
                { "accountId": "3a8f7d92", "symbol": "WMT", "numShares": 40 },
                { "accountId": "286ea600", "symbol": "PBCT", "numShares": 223 },
                { "accountId": "8f7d928a", "symbol": "T", "numShares": 118 },
                { "accountId": "4810b949", "symbol": "NUE", "numShares": 131 },
                { "accountId": "286ea600", "symbol": "GD", "numShares": 15 },
                { "accountId": "286ea600", "symbol": "MCD", "numShares": 22 },
                { "accountId": "286ea600", "symbol": "FRT", "numShares": 65 },
                { "accountId": "8f7d928a", "symbol": "DOV", "numShares": 27 },
                { "accountId": "8f7d928a", "symbol": "HRL", "numShares": 53 },
                { "accountId": "b949203a", "symbol": "MCD", "numShares": 14 },
                { "accountId": "3a8f7d92", "symbol": "PBCT", "numShares": 357 },
                { "accountId": "4810b949", "symbol": "CAH", "numShares": 61 },
                { "accountId": "8f7d928a", "symbol": "ECL", "numShares": 24 },
                { "accountId": "b949203a", "symbol": "DOV", "numShares": 38 },
                { "accountId": "8f7d928a", "symbol": "GD", "numShares": 41 },
                { "accountId": "3a8f7d92", "symbol": "ABBV", "numShares": 70 },
                { "accountId": "8f7d928a", "symbol": "PBCT", "numShares": 551 },
                { "accountId": "3a8f7d92", "symbol": "T", "numShares": 138 }
            ];
            resolve(positions);
        });
    }
};

const quoteSvc = {
    getAllPreviousClose() {
        return new Promise((resolve, reject) => {
            const quotes = [
                { "symbol": "ABBV", "price": 91.87 },
                { "symbol": "BDX", "price": 233.54 },
                { "symbol": "CAH", "price": 49.30 },
                { "symbol": "DOV", "price": 109.26 },
                { "symbol": "ECL", "price": 204.96 },
                { "symbol": "FRT", "price": 81.83 },
                { "symbol": "GD", "price": 151.24 },
                { "symbol": "HRL", "price": 50.81 },
                { "symbol": "JNJ", "price": 147.97 },
                { "symbol": "KMB", "price": 150.74 },
                { "symbol": "LEG", "price": 41.73 },
                { "symbol": "MCD", "price": 211.79 },
                { "symbol": "NUE", "price": 46.91 },
                { "symbol": "OTIS", "price": 60.99 },
                { "symbol": "PBCT", "price": 10.86 },
                { "symbol": "PEP", "price": 138.33 },
                { "symbol": "ROP", "price": 419.45 },
                { "symbol": "SHW", "price": 666.77 },
                { "symbol": "T", "price": 29.44 },
                { "symbol": "VFC", "price": 68.15 },
                { "symbol": "WMT", "price": 141.15 },
                { "symbol": "XOM", "price": 38.88 }
            ];
            resolve(quotes);
        });
    }
};

/*
 * Using positionSvc and quoteSvc, retrieve all the positions
 * and closing prices, then list each account ID with the total
 * value of all of that accounts positions.
 *
 * Bonus: Can you output the accounts sorted by total value in
 * descending order so that 8f7d928a is at the top?
 *
 * I think we need to get this results:
4810b949 1280.53
286ea600 1716.81
3a8f7d92 1701.72
b949203a 2124.41
8f7d928a 2058.03
 */
const consolidatedList = (custpositions, quote) => {
    let customers = []
    custpositions.map((customer) => {
        customers.push(Object.values(customer)[0])
    })
    const customers2 = [...new Set(customers)]
    console.log(customers2);
    customers2.sort().reverse().forEach((customerID) => {
        let inividualCustomerPrice = 0
        custpositions.map((customerDetails) => {
            const cID = Object.values(customerDetails)[0]
            const symbol = Object.values(customerDetails)[1]
            const numShares = Object.values(customerDetails)[2]
            const q = quote.find((e, i, a) => e.symbol === symbol)
            if (customerID === cID) {
                // console.log(customerID, symbol, numShares, q.price);
                inividualCustomerPrice += q.price
            }
        })
        console.log(customerID, inividualCustomerPrice.toFixed(2));

    })
}
const getListAccountPoitionValues = async (pSvc, qSvc) => {
    const customerPositions = await pSvc.getCustomerPositions()
        .then(res => {
            return res
        })
    const quote = await qSvc.getAllPreviousClose()
        .then(res => {
            return res
        })
    const result = consolidatedList(customerPositions, quote)
}


export default function getCapCoResults() {
    console.log('================================')

    getListAccountPoitionValues(positionSvc, quoteSvc)
}
