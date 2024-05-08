import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/loan.json";

function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center h-full w-full m-auto">
      <Lottie options={defaultOptions} height={"auto"} width={"100%"} />
    </div>
  );
}

export default LottieAnimation;
