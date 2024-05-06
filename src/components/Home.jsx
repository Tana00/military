import React, { useRef } from "react";
import gsap from "gsap";
import {
  FaUserPlus,
  FaIdCard,
  FaHandHoldingUsd,
  FaChartLine,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";

const Home = () => {
  // implement gsap stagger method
  const boxRefs = useRef([]);

  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    gsap.from(
      [headlineRef.current, subheadlineRef.current, buttonRef.current],
      {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
    gsap.from(
      [
        boxRefs.current[0],
        boxRefs.current[4],
        boxRefs.current[1],
        boxRefs.current[3],
        boxRefs.current[2],
      ],
      {
        duration: 1,
        delay: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center md:justify-end overflow-clip">
      {/* <div className="blury"></div> */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-opacity-35"></div>
      <div className="flex flex-col justify-center items-center relative top-10 lg:top-10 4xl:-top-10  p-4">
        <p
          ref={headlineRef}
          id="headline"
          className="text-5xl leading-[80px] text-center sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-700 py-2 hover:from-neutral-200 hover:to-neutral-800 "
        >
          Lending Platform for Nigerian Military
        </p>
        <p
          ref={subheadlineRef}
          id="subheadline"
          className="text-base text-center sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-200 py-2"
        >
          Providing financial assistance to our heroes in their time of need.
        </p>
        <button
          ref={buttonRef}
          id="btn"
          className="bg-white text-gray-800 px-8 py-4 rounded-lg font-bold text-xl mt-4"
        >
          Get Started
        </button>
      </div>
      <div className="w-full hidden md:flex flex-col md:flex-row justify-evenly items-end px-4 gap-4 space-x-4">
        <div
          ref={(el) => (boxRefs.current[0] = el)}
          id="box-1"
          className="p-4 w-full md:w-1/5 h-96 rounded-sm bg-gradient-to-b from-neutral-900 to-black flex flex-col justify-center items-center text-center border border-neutral-800"
        >
          <FaUserPlus className="text-6xl text-center text-neutral-300 mb-4" />
          <p className="text-lg text-center text-neutral-300">
            Customer Onboarding
          </p>
        </div>
        <div
          ref={(el) => (boxRefs.current[1] = el)}
          id="box-2"
          className="flex flex-col p-4 w-full md:w-1/5 h-72 rounded-sm bg-gradient-to-b from-neutral-900 to-black  justify-center items-center text-center border border-neutral-800"
        >
          <FaIdCard className="text-6xl text-center text-neutral-300 mb-4" />
          <p className="text-lg text-center text-neutral-300">KYC Validation</p>
        </div>
        <div
          ref={(el) => (boxRefs.current[3] = el)}
          id="box-4"
          className="flex flex-col p-4 w-full md:w-1/5 h-72 rounded-sm bg-gradient-to-b from-neutral-900 to-black justify-center items-center text-center border border-neutral-800"
        >
          <FaHandHoldingUsd className="text-6xl text-center text-neutral-300 mb-4" />
          <p className="text-lg text-center text-neutral-300">
            Loan Management
          </p>
        </div>
        <div
          ref={(el) => (boxRefs.current[4] = el)}
          id="box-5"
          className="flex flex-col p-4 w-full md:w-1/5 h-96 rounded-sm bg-gradient-to-b from-neutral-900 to-black justify-center items-center text-center border border-neutral-800"
        >
          <FaChartLine className="text-6xl text-center text-neutral-300 mb-4" />
          <p className="text-lg text-center text-neutral-300">
            Reporting / Analytics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
