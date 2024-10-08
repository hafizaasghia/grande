import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/home.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Home is where we feel most comfortable. Its the place with our favorite cozy spots like the soft sofa in the living room and the kitchen where we cook and chat. Our bedrooms are where we relax and sleep soundly. 
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-500 dark:text-black-400">
          About my Home
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
