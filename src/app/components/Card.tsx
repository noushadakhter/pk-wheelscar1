import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className="flex justify-center m-12 space-x-6 flex-wrap">
      <div className="border border-blue-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car1.jpg"
          alt="Toyota Corolla"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car1">
            <p className="text-blue-600 font-semibold hover:underline">Toyota Corolla</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 58.5 - 78.3 lacs</p>
          <p className="text-gray-600">622 Reviews</p>
        </div>
      </div>

      <div className="border border-blue-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car2.png"
          alt="Suzuki Alto"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car2">
            <p className="text-blue-600 font-semibold hover:underline">Suzuki Alto</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 23.3 - 26.5 lacs</p>
          <p className="text-gray-600">219 Reviews</p>
        </div>
      </div>

      <div className="border border-blue-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car3.jpg"
          alt="Honda City"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car3">
            <p className="text-blue-600 font-semibold hover:underline">Honda City</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 46.2 - 57.7 lacs</p>
          <p className="text-gray-600">467 Reviews</p>
        </div>
      </div>

      <div className="border border-blue-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/images/car4.jpg"
          alt="Honda Civic"
          className="rounded-t-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
        <div className="text-center mt-4">
          <Link href="/car4">
            <p className="text-blue-600 font-semibold hover:underline">Honda Civic</p>
          </Link>
          <p className="text-green-600 font-medium">PKR 88.5 - 99.5 lacs</p>
          <p className="text-gray-600">392 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Card;