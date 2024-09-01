import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/address.png"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            An address is a fundamental piece of information that specifies the location of a person organization or place. It serves as a critical tool for navigation communication and the delivery of goods and services.            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-yellow-500 dark:text-sky-400">
              Address
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Asghia Saeed
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;