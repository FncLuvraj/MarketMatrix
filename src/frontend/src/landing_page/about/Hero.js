import React from 'react';

function Hero() {
    return (
        <div className='bg-white py-16 px-8'>
            <div className='container mx-auto text-center max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
                <h1 className='text-2xl md:text-3xl font-extralight mb-4 text-gray-800'>We pioneered the discount broking model in India.</h1>
                <h2 className='text-2xl md:text-3xl font-extralight mb-12 text-gray-800'>Now, we are breaking ground with our technology.</h2>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 mt-16 lg:mt-24 xl:mt-32">
                <div className='flex-1 text-gray-700 leading-loose text-sm md:text-base lg:text-lg'>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className='mt-4'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className='mt-4'>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='flex-1 text-gray-700 leading-loose text-sm md:text-base lg:text-lg'>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p className='mt-4'><a href='#' className='text-blue-600 hover:underline'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p className='mt-4'>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='#' className='text-blue-600 hover:underline'>blog</a> or see what the media is <a href='#' className='text-blue-600 hover:underline'>saying about us</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;