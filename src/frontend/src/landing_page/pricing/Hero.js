import pricingEquity from '../../images/pricingEquity.png'
import Intraday from '../../images/intradayTrades.png'
function Hero(){
    return(
        <div className="container mx-auto px-4">
          <div className="p-5 mt-5 border-b text-center">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <h3 className="text-gray-500 mt-3 text-xl">
              Free equity investments and flat ₹20 intraday and F&O trades
            </h3>
          </div>
          <div className="p-5 mt-5 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img src={pricingEquity} className="mx-auto" />
              <h1 className="text-xl font-semibold mt-4">Free equity delivery</h1>
              <p className="text-gray-500 mt-2">
                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
              </p>
            </div>
            <div className="p-4">
              <img src={Intraday} className="mx-auto" />
              <h1 className="text-xl font-semibold mt-4">Intraday and F&O trades</h1>
              <p className="text-gray-500 mt-2">
                Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
              </p>
            </div>
            <div className="p-4">
              <img src={pricingEquity} className="mx-auto" />
              <h1 className="text-xl font-semibold mt-4">Free direct MF</h1>
              <p className="text-gray-500 mt-2">
                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
    )
}
export default Hero;