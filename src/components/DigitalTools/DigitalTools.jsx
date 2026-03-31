import React from "react";

const DigitalTools = () => {
  return (
    <section className="w-full bg-[#f5f5f7] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Premium Digital Tools
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
          Choose from our curated collection of premium digital products
          designed
          <br className="hidden sm:block" />
          to boost your productivity and creativity.
        </p>

        <div className="mt-7 flex justify-center">
          <div className="flex items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
            <button className="rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow">
              Products
            </button>
            <button className="rounded-full px-7 py-3 text-sm font-medium text-slate-700">
              Cart (2)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTools;
