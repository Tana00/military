import React, { useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Services = () => {
  const cardRefs = useRef([]);
  cardRefs.current = [useRef(null), useRef(null), useRef(null)];

  useGSAP(() => {
    gsap.from(cardRefs.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);
  

  return (
    <div
      id="services"
      className="min-h-screen md:h-[80vh] w-full flex flex-col justify-center items-center bg-gray-100 border-none"
    >
      <h2 className=" text-slate-800 text-4xl font-nueu md:text-5xl lg:text-6xl font-bold mt-4 mb-10">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 md:gap-24 mx-5 mb-4 service-cards">
        <div ref={cardRefs.current[0]} id="card-1" className="service-card">
          <h3 className="text-2xl font-bold mb-5">
            Military Personnel Lending
          </h3>
          <p className="text-center">
            We provide a platform for military personnel to access loans and
            financial services.
          </p>
        </div>
        <div ref={cardRefs.current[1]} id="card-2" className="service-card2">
          <h3 className="text-2xl font-bold mb-5">Partner Onboarding</h3>
          <p className="text-center">
            We enable lenders and partners to register and offer their services
            to our users.
          </p>
        </div>
        <div ref={cardRefs.current[2]} id="card-3" className="service-card">
          <h3 className="text-2xl font-bold mb-5">KYC Validation</h3>
          <p className="text-center">
            We ensure the identity of our users through a comprehensive KYC
            validation process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;