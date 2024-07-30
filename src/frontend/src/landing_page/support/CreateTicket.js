import React from "react";
import { FaPlusCircle, FaUserCircle, FaChartLine, FaMoneyCheckAlt, FaDatabase } from 'react-icons/fa';

function CreateTicket() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl flex items-start justify-center text-center mb-2">To create a ticket, select a relevant topic</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <p className="flex text-[22px] font-extralight items-center mb-4">
            <FaPlusCircle className="mr-2" /> Account Opening
          </p>
          <ul className="space-y-2">
            <li><p className="text-blue-600 hover:underline cursor-pointer">Getting started</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Online</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Offline</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Charges</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Company, Partnership and HUF</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Non Resident Indian (NRI)</p></li>
          </ul>
        </div>
        <div>
          <p className="flex text-[22px] font-extralight items-center mb-4">
            <FaUserCircle className="mr-2" /> Your Zerodha Account
          </p>
          <ul className="space-y-2">
            <li><p className="text-blue-600 hover:underline cursor-pointer">Login credentials</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Your Profile</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Account modification and segment addition</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">CMR & DP ID</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Nomination</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Transfer and conversion of shares</p></li>
          </ul>
        </div>
        <div>
          <p className="flex text-[22px] font-extralight items-center mb-4">
            <FaChartLine className="mr-2" /> Trading and Markets
          </p>
          <ul className="space-y-2">
            <li><p className="text-blue-600 hover:underline cursor-pointer">Trading FAQs</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Kite</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Margins</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Product and order types</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Corporate actions</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Kite features</p></li>
          </ul>
        </div>
        <div>
          <p className="flex text-[22px] font-extralight items-center mb-4">
            <FaMoneyCheckAlt className="mr-2" /> Funds
          </p>
          <ul className="space-y-2">
            <li><p className="text-blue-600 hover:underline cursor-pointer">Fund withdrawal</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Adding funds</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Adding bank accounts</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">eMandates</p></li>
          </ul>
        </div>
        <div>
          <p className="flex text-[22px] font-extralight items-center mb-4">
            <FaDatabase className="mr-2" /> Console
          </p>
          <ul className="space-y-2">
            <li><p className="text-blue-600 hover:underline cursor-pointer">IPO</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Portfolio</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Funds statement</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Profile</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Reports</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Referral program</p></li>
          </ul>
        </div>
        <div>
          <p className="flex text-[22px] font-extralight items-center mb-4">
            <FaDatabase className="mr-2" /> Coin
          </p>
          <ul className="space-y-2">
            <li><p className="text-blue-600 hover:underline cursor-pointer">Understanding mutual funds and Coin</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Coin app</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Coin web</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">Transactions and reports</p></li>
            <li><p className="text-blue-600 hover:underline cursor-pointer">National Pension Scheme (NPS)</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;