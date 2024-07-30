import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import logo from '../../images/logo.png';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-8 mt-32'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
        {/* Left side - Logo and Social Links */}
        <div className='flex-1 mb-6 lg:mb-0 text-center lg:text-left'>
          <img src={logo} alt='Zerodha Logo' className='h-8 mx-auto lg:mx-0' />
          <p className='mt-4 text-gray-600 text-xs'>
            © 2010 - 2024, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
          <div className='flex justify-center lg:justify-start space-x-4 mt-4'>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaTwitter size={18} />
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaFacebookF size={18} />
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaInstagram size={18} />
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaLinkedinIn size={18} />
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaYoutube size={18} />
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaWhatsapp size={18} />
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600'>
              <FaTelegramPlane size={18} />
            </a>
          </div>
        </div>

        {/* Center - Company, Support, Account */}
        <div className='flex-1 flex flex-wrap justify-around lg:justify-between'>
          <div className='mb-6 lg:mb-0'>
            <h3 className='text-gray-900 font-medium mb-4'>Company</h3>
            <ul className='text-gray-600 space-y-2 text-sm'>
              <li><a href='#' className='hover:text-blue-600'>About</a></li>
              <li><a href='#' className='hover:text-blue-600'>Products</a></li>
              <li><a href='#' className='hover:text-blue-600'>Pricing</a></li>
              <li><a href='#' className='hover:text-blue-600'>Referral programme</a></li>
              <li><a href='#' className='hover:text-blue-600'>Careers</a></li>
              <li><a href='#' className='hover:text-blue-600'>Zerodha.tech</a></li>
              <li><a href='#' className='hover:text-blue-600'>Press & media</a></li>
              <li><a href='#' className='hover:text-blue-600'>Zerodha Cares (CSR)</a></li>
            </ul>
          </div>
          <div className='mb-6 lg:mb-0'>
            <h3 className='text-gray-900 font-medium mb-4'>Support</h3>
            <ul className='text-gray-600 space-y-2 text-sm'>
              <li><a href='#' className='hover:text-blue-600'>Contact us</a></li>
              <li><a href='#' className='hover:text-blue-600'>Support portal</a></li>
              <li><a href='#' className='hover:text-blue-600'>Z-Connect blog</a></li>
              <li><a href='#' className='hover:text-blue-600'>List of charges</a></li>
              <li><a href='#' className='hover:text-blue-600'>Downloads & resources</a></li>
              <li><a href='#' className='hover:text-blue-600'>Videos</a></li>
              <li><a href='#' className='hover:text-blue-600'>Market overview</a></li>
              <li><a href='#' className='hover:text-blue-600'>How to file a complaint?</a></li>
              <li><a href='#' className='hover:text-blue-600'>Status of your complaints</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-gray-900 font-medium mb-4'>Account</h3>
            <ul className='text-gray-600 space-y-2 text-sm'>
              <li><a href='#' className='hover:text-blue-600'>Open an account</a></li>
              <li><a href='#' className='hover:text-blue-600'>Fund transfer</a></li>
            </ul>
          </div>
        </div>
      </div>

        {/* Legal Section */}
        <div className='mt-8 text-gray-400 text-xs'>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span className='text-blue-600'>complaints@zerodha.com</span>, for DP related to <span className='text-blue-600'>dp@zerodha.com</span>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p className='mt-4'>Procedure to file a complaint on <span className='text-blue-600'>SEBI SCORES</span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

          <p className='mt-4'><span className='text-blue-600'>Smart Online Dispute Resolution</span> | <span className='text-blue-600'>Grievances Redressal Mechanism</span></p>

          <p className='mt-4'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p className='mt-4'>Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your mobile number/email ID with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p className='mt-4'>“Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.” Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don’t give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <span className='text-blue-600'>create a ticket here.</span></p>

          <div className='mt-4 flex flex-wrap justify-center lg:justify-between'>
            <a href='#' className='text-blue-600 hover:underline'>NSE</a>
            <a href='#' className='text-blue-600 hover:underline'>BSE</a>
            <a href='#' className='text-blue-600 hover:underline'>MCX</a>
            <a href='#' className='text-blue-600 hover:underline'>Terms & conditions</a>
            <a href='#' className='text-blue-600 hover:underline'>Policies & procedures</a>
            <a href='#' className='text-blue-600 hover:underline'>Privacy policy</a>
            <a href='#' className='text-blue-600 hover:underline'>Disclosure</a>
            <a href='#' className='text-blue-600 hover:underline'>For investor’s attention</a>
            <a href='#' className='text-blue-600 hover:underline'>Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}