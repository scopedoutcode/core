/*
+------------------------+-----------+-----------+-----------+---------------+
|         UTC_Time       |  Account  | Operation |   Asset   |  Dollar_Value |
+------------------------+-----------+-----------+-----------+---------------+
| 2021-01-01 03:03:30    |  Margin   |    Buy    |    BTC    |      1200     |
| 2021-01-01 06:43:12    |  Margin   |    Sell   |    BTC    |      1500     |
| 2021-01-01 07:56:19    |  Margin   |    Buy    |    ETH    |      4342     |
| 2021-01-01 07:59:21    |  Margin   |    Buy    |    BTC    |      1000     |
| 2021-01-02 12:18:08    |  Margin   |    Sell   |    BTC    |      2000     |
| 2021-01-02 08:32:22    |  Margin   |    Sell   |    ETH    |      5900     |
+------------------------+-----------+-----------+-----------+---------------+
*/

const tradingData = [
    {
        UTCTime: '2021-01-01 03:03:30',
        account: 'Margin',
        operation: 'Buy',
        asset: 'BTC',
        dollarValue: 1200
    },
    {
        UTCTime: '2021-01-01 03:03:30',
        account: 'Margin',
        operation: 'Buy',
        asset: 'BTC',
        dollarValue: 1200
    }
]

/*
Associate trading profits to each asset
All unique assets
See if they belong reeserve assets (contains a bunch)
*/