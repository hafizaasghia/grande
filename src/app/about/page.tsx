import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/About.jfif"
          alt="About"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Homes are more than just buildings they are the backdrop to our lives filled with the echoes of laughter and the warmth of cherished memories.Each home reflects its inhabitants unique stories and personalities offering a sanctuary where we find comfort and belonging.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-pink-500 dark:text-sky-400">
              About
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
