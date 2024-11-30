import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-blue-300 min-h-screen py-12">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Suzuki Alto Price in Pakistan, Images, Reviews, & Specs
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-12">
        <Image 
          src="/images/car2.png" 
          alt="Suzuki Alto details image"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Highlights and Key Features */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Highlights and Key Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Efficient Engine</h3>
            <p className="text-gray-600">
              The Suzuki Alto is powered by a fuel-efficient 0.8L engine, designed for economical city driving with excellent mileage.
            </p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Compact Design</h3>
            <p className="text-gray-600">
              With a compact body, the Alto is perfect for urban driving, offering easy maneuverability and hassle-free parking.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Safety Features</h3>
            <p className="text-gray-600">
              The Alto includes safety essentials such as airbags, ABS, and seatbelt reminders, providing peace of mind on every journey.
            </p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Comfortable Interior</h3>
            <p className="text-gray-600">
              The interior of the Alto offers comfortable seating with ample legroom, making it a cozy ride for both driver and passengers.
            </p>
          </div>
        </div>
      </div>

      {/* Comparisons with Competitors */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Comparisons with Competitors</h2>
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-8">Suzuki Alto VS Kia Picanto</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>Alto offers better fuel efficiency, ideal for daily commuting.</li>
              <li>Known for its affordability and lower maintenance costs.</li>
              <li>Compact size makes it easier to navigate through narrow city roads.</li>
              <li>Alto is favored for its economical performance and reliability.</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-gray-600 list-disc">
              <li>Picanto offers a slightly more powerful engine.</li>
              <li>Comes with a more refined interior and additional features.</li>
              <li>Both models have similar safety features.</li>
              <li>Picanto is preferred for a more premium interior experience.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flexible Payment Options */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Flexible Payment Options for Your Suzuki Alto</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Cash Payment</h3>
            <p className="text-gray-600">Simplicity: Pay the full price upfront and drive away in your Alto.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Bank Financing</h3>
            <p className="text-gray-600">Personalized Plans: Choose from a range of financing options tailored to your needs.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Installment Plans</h3>
            <p className="text-gray-600">Budget-Friendly: Enjoy manageable monthly payments for your Alto.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Trade-In Options</h3>
            <p className="text-gray-600">Maximize Value: Trade in your old vehicle and reduce the cost of your new Alto.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Leasing</h3>
            <p className="text-gray-600">Drive New: Experience the latest model every few years with a flexible lease plan.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Online Payment</h3>
            <p className="text-gray-600">Ease of Access: Securely make payments online from the comfort of your home.</p>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="flex justify-center">
        <Link href="/checkout">
          <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-3 px-10 rounded-lg font-semibold shadow-md">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;