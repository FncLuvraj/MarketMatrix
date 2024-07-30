import React from "react";

function Hero() {
  return (
    <section className="bg-blue-500 text-white py-10">
      <div className="container mx-auto text-center px-4">
        <div className="mb-5">
          <h4 className="text-3xl font-semibold">Support Portal</h4>
          <p className="text-blue-200 hover:underline">
            Track tickets
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2 p-5">
            <h1 className="text-2xl font-semibold mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              className="border p-3 w-full rounded-lg text-gray-900"
            />
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4">
              <p className="text-white underline cursor-pointer">
                Track account opening
              </p>
              <p className="text-white underline cursor-pointer">
                Track segment activation
              </p>
              <p className="text-white underline cursor-pointer">
                Intraday margins
              </p>
              <p className="text-white underline cursor-pointer">
                Kite user manual
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h1 className="text-2xl font-semibold mb-4">Featured</h1>
            <ol className="list-decimal list-inside">
              <li className="mb-2">
                <p className="text-white underline cursor-pointer">
                  Surveillance measure on scrips - July 2024
                </p>
              </li>
              <li>
                <p className="text-white underline cursor-pointer">
                  Latest Intraday leverages and Square-off timings
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;