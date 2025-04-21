import React from "react";

const Newsletter = () => {
  return (
    <section className="flex flex-col py-8 my-12 w-full bg-violet-600 dark:bg-[#121212] dark:text-white max-md:pr-5 max-md:mt-10 max-md:max-w-full md:pr-20 md:py-16 md:max-md:pb-24">
      <div className="flex flex-col items-center self-center mb-0 max-w-full w-[793px] z-40 md:max-md:mb-2.5">
        <h2 className="self-stretch text-6xl font-bold tracking-wide text-center text-white max-md:max-w-full max-md:text-4xl">
          Get our stories delivered From us to your inbox weekly.
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-wrap gap-2.5 mt-12 ml-9 max-w-full w-[519px] max-md:mt-10"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="flex items-center gap-1 grow shrink-0 px-6 py-5 text-lg bg-white rounded-lg bg-blend-normal basis-0 text-slate-500 outline-none w-full max-md:px-5"
          />
          <button
            type="submit"
            className="px-8 py-5 text-xl font-bold text-center text-white rounded-lg border-2 border-white border-solid max-md:px-5 duration-100 cursor-pointer hover:bg-white hover:text-black"
          >
            Get started
          </button>
        </form>
        <p className="mt-6 ml-9 text-lg leading-7 text-center text-zinc-200 max-md:max-w-full">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
