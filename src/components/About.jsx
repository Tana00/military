import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img1 from "../assets/female.png";
import img2 from "../assets/handshake.jpg";
const About = () => {
  return (
    <div
      id="target-section"
      className="min-h-screen w-full flex flex-col justify-center items-center text-center text-7xl bg-white p-2 md:p-4 "
    >
      <h2 className="text-4xl md:text-7xl font-bold my-4 text-slate-800">
        
      </h2>
      <div className="w-full h-full flex flex-col gap-4 md:gap-6 px-4">
        <div className="flex flex-col md:flex-row gap-5 justify-around">
          <div className="w-full md:w-2/5 rounded-md">
            <img
              src={img1}
              alt="female"
              className="w-full h-full object-contain bg-secondary-color rounded-md "
            />
          </div>
          {/*  some text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-5xl font-nueu mt-4 md:mt-0 mb-5">
              What We Do
            </h2>
            <p className="text-lg">
              ArmedForcesLoan is a dedicated lending platform designed to
              provide financial support and assistance to military personnel and
              paramilitary forces.
            </p>
            <p className="text-lg">
              With ArmedForcesLoan, military personnel and paramilitary forces
              can access a range of loan products, including asset financing,
              fixed loans, salary advances, and loan buyback options.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-around">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-nueu md:text-5xl mt-4 md:mt-0 mb-5">
              Our Vision
            </h2>
            <p className="text-lg">
              At ArmedForcesLoan, we are committed to serving those who serve
              our nation. Join us in our mission to provide financial
              empowerment and support to our heroes in uniform.
            </p>
          </div>
          <div className="w-full md:w-2/5 rounded-md">
            <img
              src={img2}
              alt="handshake"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
