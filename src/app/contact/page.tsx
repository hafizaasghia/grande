import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/con logo.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Contact refers to the act of establishing communication or connection with someone. It plays a crucial role in both personal and professional contexts serving as the bridge between individual organizations or entities.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-green-500 dark:text-sky-400">
              Contact
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