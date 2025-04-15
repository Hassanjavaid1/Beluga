import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loadingAnimation.json";

function Loader() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <Lottie animationData={loadingAnimation} />
      </div>
    </>
  );
}

export default Loader;
