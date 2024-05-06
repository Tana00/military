import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen md:h-[80vh] w-full flex flex-col justify-center items-center bg-gray-100 border-none"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-10">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  gap-24 mx-5 mb-4">
        <div className="service-card">
          <h3 className="text-2xl font-bold mb-5">
            Military Personnel Lending
          </h3>
          <p className="text-center">
            We provide a platform for military personnel to access loans and
            financial services.
          </p>
        </div>
        <div className="service-card">
          <h3 className="text-2xl font-bold mb-5">Partner Onboarding</h3>
          <p className="text-center">
            We enable lenders and partners to register and offer their services
            to our users.
          </p>
        </div>
        <div className="service-card">
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
