import React from "react";
import { Link } from "react-router-dom";
function Brokerage() {
  return (
    <div className="container mx-auto px-4">
      <div className="p-5 mt-5 text-center border-t flex flex-wrap">
        <div className="w-full md:w-2/3 p-4">
          <Link to={''}>
            <h3 className="text-lg font-semibold">Brokerage calculator</h3>
          </Link>
          <ul className="text-left leading-8 text-xs text-gray-500 mt-4">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Link to={''}>
            <h3 className="text-lg font-semibold">List of charges</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;