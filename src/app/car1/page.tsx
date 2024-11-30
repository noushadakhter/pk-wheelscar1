import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-blue-300 min-h-screen py-12">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
      Toyota Corolla Price in Pakistan, Images, Reviews, & <br /> Specs
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-12">
        <Image 
          src="/images/car1.jpg" 
          alt="Toyota Corolla details image"
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
            <h3 className="text-lg font-medium text-gray-800">Engine Options</h3>
            <p className="text-gray-600">
            Powered by 1.6L and 1.8L engines, the Corolla combines fuel efficiency  with smooth acceleration, ensuring a responsive drive in both city  and highway conditions.
            </p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Premium Exterior Design:</h3>
            <p className="text-gray-600">
            With its sleek body lines, LED headlights, and sporty alloy wheels, the Corolla combines style with function, standing out  on the road with a refined and modern look.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Advanced Safety Features:</h3>
            <p className="text-gray-600">
            Equipped with dual airbags, ABS, vehicle stability control, <br /> and brake assist, the Corolla prioritizes driver and <br /> passenger safety, offering peace of mind on every journey.
            </p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Luxurious Interior</h3>
            <p className="text-gray-600">
              Features like leather-trimmed seats, a multi-functional steering wheel, and advanced climate control create a comfortable cabin experience.
            </p>
          </div>
        </div>
      </div>

      {/* Comparisons with Competitors */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Comparisons with Competitors</h2>
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-8">Toyota Corolla VS Honda Civic</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
              <ul className="space-y-4 text-gray-600 list-disc ">
            <li>Corolla offers better fuel efficiency: 12-14 km/l vs. Civic 10-12 km/l</li>
            <li>Higher resale value and lower maintenance costs</li>
            <li>Corolla offers a slightly larger cabin space.</li>
            <li>Known for its durability and low maintenance costs.</li>
            <li>Both models are comparable in safety features.</li>
            <li>Corolla is preferred for its spacious interior and longevity.</li>

            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-gray-600 list-disc">
            
          <li>Both models are equipped with advanced safety features.</li>
          <li>Civic is known for its smooth, comfortable driving experience, suitable for daily commuting.</li>
          <li>Honda Civic offers a more refined and stylish design.</li>
          <li>Known for its smooth driving experience and fuel efficiency.</li>
          <li>Honda Civic has a more compact and modern interior layout.</li>
          <li>Favored for its advanced features and reliable performance.</li>

            </ul>
          </div>
        </div>
      </div>

      {/* Flexible Payment Options */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Flexible Payment Options for Your Toyota Corolla</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Cash Payment</h3>
            <p className="text-gray-600">Simplicity: Pay the full price upfront and enjoy a hassle-free transaction.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Bank Financing</h3>
            <p className="text-gray-600">Personalized Plans: Work with leading banks to find the right financing solution for you.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Installment Plans</h3>
            <p className="text-gray-600">Budget-Friendly: Spread the cost of your corolla over manageable monthly payments.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Trade-In Options</h3>
            <p className="text-gray-600">Maximize Value: Trade in your old vehicle for a fair market value, reducing the overall cost of your new Corolla.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Leasing</h3>
            <p className="text-gray-600">Drive New: Experience the latest model every few years without the commitment of ownership.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Online Payment</h3>
            <p className="text-gray-600">Ease of Access: Make secure payments online from the comfort of your home.</p>
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